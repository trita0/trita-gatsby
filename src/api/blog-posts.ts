import type { GatsbyFunctionRequest, GatsbyFunctionResponse } from "gatsby"
import { XMLParser } from "fast-xml-parser"

function stripHtml(html: string): string {
  return html
    .replace(/<[^>]*>/g, "")
    .replace(/&amp;/g, "&")
    .replace(/&nbsp;/g, " ")
    .replace(/&[a-z]+;/gi, " ")
    .replace(/\s+/g, " ")
    .trim()
}

async function fetchOgImage(url: string): Promise<string | null> {
  try {
    const res = await fetch(url, {
      headers: { "User-Agent": "Mozilla/5.0 (compatible; Trita/1.0)" },
    })
    if (!res.ok) return null
    const html = await res.text()
    const ogMatch = html.match(/<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["']/i)
      ?? html.match(/<meta[^>]+content=["']([^"']+)["'][^>]+property=["']og:image["']/i)
    if (ogMatch?.[1]) return ogMatch[1]
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
    const parser = new XMLParser({ ignoreAttributes: false, attributeNamePrefix: "@_" })
    const feed = parser.parse(xml)

    const parsed = (feed?.feed?.entry || []).map((entry: any, i: number) => {
      const title = entry.title
      const href = entry.link?.["@_href"] ?? ""
      const handle = href.split("/").pop() ?? String(i)
      const summaryHtml = entry.summary?.["#text"] || ""
      const contentHtml = entry.content?.["#text"] || ""
      const excerpt = stripHtml(summaryHtml || contentHtml).slice(0, 200)
      const published_at = entry.published || entry.updated

      const mediaThumbnail = entry["media:thumbnail"]?.["@_url"]
      const feedImage = mediaThumbnail || null

      return { id: i, title, handle, href, excerpt, published_at, feedImage }
    })

    const articles = await Promise.all(
      parsed.map(async (p: any) => {
        let image = p.feedImage
        if (!image && p.href) {
          image = await fetchOgImage(p.href)
        }
        const { feedImage, ...rest } = p
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
