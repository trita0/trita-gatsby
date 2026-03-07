// If you don't want to use TypeScript you can delete this file!
import * as React from "react"
import { PageProps, Link, graphql, HeadFC } from "gatsby"

import SiteLayout from "../layouts/SiteLayout"
import Seo from "../components/Seo"

type DataProps = {
  site: {
    buildTime: string
  }
}

const UsingTypescript: React.FC<PageProps<DataProps>> = ({
  data,
  location,
}) => (
  <SiteLayout>
    <h1 className="font-display text-4xl font-bold tracking-tight text-ink-950">
      Gatsby supports <b>TypeScript by default</b>
    </h1>
    <div className="mt-6 space-y-4 font-body text-lg leading-relaxed text-ink-950/70">
      <p>
        This means that you can create and write <code>.ts/.tsx</code> files for
        your pages, components, and <code>gatsby-*</code> configuration files (for
        example <code>gatsby-config.ts</code>).
      </p>
      <p>
        For type checking you'll want to install <code>typescript</code> via npm
        and run <code>tsc --init</code> to create a <code>tsconfig</code> file.
      </p>
      <p>
        You're currently on the page <code>{location.pathname}</code> which was
        built on {data.site.buildTime}.
      </p>
      <p>
        To learn more, head over to our{" "}
        <a href="https://www.gatsbyjs.com/docs/how-to/custom-configuration/typescript/" className="font-semibold text-marigold-500 hover:text-marigold-600 transition">
          documentation about TypeScript
        </a>
        .
      </p>
    </div>
    <Link to="/" className="mt-8 inline-block font-ui text-sm font-bold text-marigold-500 hover:text-marigold-600 transition">Go back to the homepage</Link>
  </SiteLayout>
)

export const Head: HeadFC<DataProps> = () => <Seo title="Using TypeScript" description={undefined} children={undefined} />

export default UsingTypescript

export const query = graphql`
  {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
  }
`
