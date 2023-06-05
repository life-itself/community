import Head from "next/head";

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
  return (
    <Component
      layout={frontMatter.layout}
      components={components}
      frontMatter={frontMatter}
      {...rest}
    />
  );
}
