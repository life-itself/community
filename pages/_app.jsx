/* eslint import/no-default-export: off */
import { DefaultSeo, NextSeo } from "next-seo";
import { ThemeProvider } from "next-themes";
import { useRouter } from "next/router";
import Script from "next/script";
import { useEffect, useState } from "react";
import "tailwindcss/tailwind.css";

import { Layout } from "../components/Layout";
import { SearchProvider } from "../components/search";
import { siteConfig } from "../config/siteConfig";
import * as gtag from "../lib/gtag";
import "../styles/docsearch.css";
import "../styles/global.css";
import "../styles/prism.css";

// ToC: get the html nodelist for headings
function collectHeadings(nodes) {
  const sections = [];

  Array.from(nodes).forEach((node) => {
    const { id, innerText: title, tagName: level } = node;
    if (!(id && title)) {
      return;
    }
    if (level === "H3") {
      const parentSection = sections[sections.length - 1];
      if (parentSection) parentSection.children.push({ id, title });
    } else if (level === "H2") {
      sections.push({ id, title, children: [] });
    }

    sections.push(...collectHeadings(node.children ?? []));
  });

  return sections;
}

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    if (siteConfig.analytics) {
      const handleRouteChange = (url) => {
        gtag.pageview(url);
      };
      router.events.on("routeChangeComplete", handleRouteChange);
      return () => {
        router.events.off("routeChangeComplete", handleRouteChange);
      };
    }
  }, [router.events]);

  const [tableOfContents, setTableOfContents] = useState([]);

  useEffect(() => {
    const headingNodes = document.querySelectorAll("h2,h3");
    const toc = collectHeadings(headingNodes);
    setTableOfContents(toc ?? []);
  }, [router.asPath]); // update table of contents on route change with next/link

  // Seo config
  const url = siteConfig.authorUrl.replace(/\/+$/, "");
  const frontMatterImage =
    typeof pageProps?.image === "string" && pageProps.image;
  const seoImageURL = frontMatterImage && frontMatterImage.startsWith("http")
    ? pageProps.image
    : url + pageProps.image

  const seo = {
    title: pageProps?.title,
    description: pageProps?.description?.replace(/(\r\n|\n|\r)/gm, ""), // remove whitespaces
    canonical: pageProps.url_path ? `${url}/${pageProps?.url_path}` : url,
    openGraph: {
      url: pageProps.url_path ? `${url}/${pageProps?.url_path}` : url,
      images: pageProps?.image ? [
        {
          url: seoImageURL,
          width: 1200,
          height: 627,
          alt: pageProps?.title,
          type: "image/png"
        },
      ] : []
    }
  }

  return (
    <ThemeProvider
      disableTransitionOnChange
      attribute="class"
      defaultTheme={siteConfig.theme.default}
      forcedTheme={siteConfig.theme.default ? null : "light"}
    >
      <DefaultSeo defaultTitle={siteConfig.title} {...siteConfig.nextSeo} />
      <NextSeo {...seo} />
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      {siteConfig.analytics && (
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${siteConfig.analytics}`}
        />
      )}
      {siteConfig.analytics && (
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${siteConfig.analytics}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      )}
      <SearchProvider searchConfig={siteConfig.search}>
        <Layout title={pageProps.title} tableOfContents={tableOfContents}>
          <Component {...pageProps} />
        </Layout>
      </SearchProvider>
    </ThemeProvider>
  );
}

export default MyApp;
