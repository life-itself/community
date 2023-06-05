import Head from "next/head";

import { siteConfig } from "../config/siteConfig";
import { CustomLink } from "./Link";
import { Pre } from "./Pre";
import { Mermaid } from "./Mermaid";

const components = {
  Head,
  a: CustomLink,
  pre: Pre,
  mermaid: Mermaid,
  wrapper: ({ layout, ...rest }) => {
    const Layout = require(`../layouts/${layout}`).default;
    return <Layout {...rest} />;
  },
};

export function MdxPage({ mdxComponent, frontMatter, ...rest }) {
  const Component = mdxComponent;

  const { title, description } = frontMatter

  // Handle SEO Image urls in frontmatter
  const websiteUrl = siteConfig.authorUrl.replace(/\/+$/, "");
  const frontMatterImage =
    typeof frontMatter?.image === "string" && frontMatter.image;
  const seoImageUrl =
    frontMatterImage && frontMatterImage.startsWith("http")
      ? frontMatterImage
      : websiteUrl + frontMatterImage;

  return (
    <Component
      layout={frontMatter.layout}
      components={components}
      frontMatter={frontMatter}
      {...rest}
    />
  );
}
