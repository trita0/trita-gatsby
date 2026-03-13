import type { GatsbyFunctionRequest, GatsbyFunctionResponse } from "gatsby"

function between(str: string, open: string, close: string): string {
  const start = str.indexOf(open)
  if (start === -1) return ""
  const end = str.indexOf(close, start + open.length)
  if (end === -1) return ""
  return str.slice(start + open.length, end).trim()
}

function allBetween(str: string, open: string, close: string): string[] {
  const results: string[] = []
  let cursor = 0
  while (true) {
    const start = str.indexOf(open, cursor)
    if (start === -1) break
    const end = str.indexOf(close, start + open.length)
    if (end === -1) break
    results.push(str.slice(start + open.length, end).trim())
    cursor = end + close.length
  }
  return results
}

function stripCdata(str: string): string {
  return str.replace(/^<!\[CDATA\[/, "").replace(/\]\]>$/, "").trim()
}

function stripHtml(html: string): string {
  return html
    .replace(/<[^>]*>/g, "")
    .replace(/&amp;/g, "&")
    .replace(/&nbsp;/g, " ")
    .replace(/&[a-z]+;/gi, " ")
    .replace(/\s+/g, " ")
    .trim()
}

// Extract the very first <img src="..."> from an HTML string
function firstImgSrc(html: string): string | null {
  const match = html.match(/<img[^>]+src=["']([^"']+)["']/i)
  return match?.[1] ?? null
}

// Fetch og:image from an article page — used as fallback for hero image
async function fetchOgImage(url: string): Promise<string | null> {
  try {
    const res = await fetch(url, {
      headers: { "User-Agent": "Mozilla/5.0 (compatible; Trita/1.0)" },
    })
    if (!res.ok) return null
    const html = await res.text()
    // og:image
    const ogMatch = html.match(/<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["']/i)
      ?? html.match(/<meta[^>]+content=["']([^"']+)["'][^>]+property=["']og:image["']/i)
    if (ogMatch?.[1]) return ogMatch[1]
    // twitter:image fallback
    const twMatch = html.match(/<meta[^>]+name=["']twitter:image["'][^>]+content=["']([^"']+)["']/i)
      ?? html.match(/<meta[^>]+content=["']([^"']+)["'][^>]+name=["']twitter:image["']/i)
    return twMatch?.[1] ?? null
  } catch {
    return null
  }
}

export default async function handler(
  _req: GatsbyFunctionRequest,
  res: GatsbyFunctionResponse
) {
  try {
    const feedRes = await fetch("https://rollthedice.in/blogs/talk.atom", {
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; Trita/1.0)",
        Accept: "application/atom+xml, application/xml, text/xml, */*",
      },
    })

    if (!feedRes.ok) {
      res.status(502).json({ error: "Could not fetch blog feed", articles: [] })
      return
    }

    const xml = await feedRes.text()
    const entries = allBetween(xml, "<entry>", "</entry>")

    // Parse all entries first
    const parsed = entries.map((entry, i) => {
      const title = stripCdata(between(entry, "<title>", "</title>"))
      const linkMatch = entry.match(/rel="alternate"[^>]*href="([^"]+)"/)
        ?? entry.match(/href="([^"]+)"[^>]*rel="alternate"/)
      const href = linkMatch?.[1] ?? ""
      const handle = href.split("/").pop() ?? String(i)
      const summaryRaw = between(entry, "<summary>", "</summary>") || between(entry, "<summary type=\"html\">", "</summary>")
      const contentRaw = between(entry, "<content>", "</content>") || between(entry, "<content type=\"html\">", "</content>")
      const summaryHtml = stripCdata(summaryRaw)
      const contentHtml = stripCdata(contentRaw)
      const excerpt = stripHtml(summaryHtml || contentHtml).slice(0, 200)
      const published_at = between(entry, "<published>", "</published>")
        || between(entry, "<updated>", "</updated>")

      // Image priority from feed:
      // 1. <media:thumbnail url="...">
      // 2. first <img> in summary
      // 3. first <img> in content
      const mediaThumbnail = entry.match(/<media:thumbnail[^>]+url=["']([^"']+)["']/i)?.[1]
        ?? entry.match(/url=["']([^"']+)["'][^>]*\/>/i)?.[1]
        ?? null
      const summaryImg = firstImgSrc(summaryHtml)
      const contentImg = firstImgSrc(contentHtml)
      const feedImage = mediaThumbnail || summaryImg || contentImg || null

      return { id: i, title, handle, href, excerpt, published_at, feedImage }
    })

    // For entries missing a feedImage, fetch og:image from the article page
    // Limit to 10 concurrent fetches to stay fast
    const articles = await Promise.all(
      parsed.map(async (p) => {
        let image = p.feedImage
        if (!image && p.href) {
          image = await fetchOgImage(p.href)
        }
        const { feedImage: _, ...rest } = p
        return { ...rest, image }
      })
    )

    res.setHeader("Cache-Control", "public, s-maxage=600, stale-while-revalidate=60")
    res.status(200).json({ articles })
  } catch (err) {
    console.error("blog-posts error:", err)
    res.status(500).json({ error: "Internal server error", articles: [] })
  }
}