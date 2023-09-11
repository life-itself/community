/* eslint import/no-unresolved: off */
import { defineDocumentType, defineNestedType, makeSource } from "contentlayer/source-files";
import { h } from "hastscript";
import { remark } from "remark";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeMathjax from "rehype-mathjax";
import rehypePrismPlus from "rehype-prism-plus";
import rehypeSlug from "rehype-slug";
import callouts from "remark-callouts";
import remarkEmbed from "remark-embed-plus";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import smartypants from "remark-smartypants";
import remarkToc from "remark-toc";
import wikiLinkPlugin from "remark-wiki-link-plus";
import mdxMermaid from 'mdx-mermaid';
import stripMarkdown from "strip-markdown";

import { siteConfig } from "./config/siteConfig";
import { filterMarkdown } from "./lib/filterMarkdown";

const sharedFields = {
  title: { type: "string" },
  description: { type: "string" },
  image: { type: "string" },
  layout: { type: "string", default: "docs" },
  editLink: { type: "boolean" },
  toc: { type: "boolean" },
  isDraft: { type: "boolean" },
  data: { type: "list", of: { type: "string" }, default: [] },
  aliases: { type: "list", of: { type: "string" } },
};

const computedFields = {
  description: {
    type: "string",
    /* eslint no-underscore-dangle: off */
    resolve: async (doc) => {
      // use frontmatter description if exists
      if (doc.description) return doc.description;

      const content = filterMarkdown(doc.body.raw)

      // remove markdown formatting
      const stripped = await remark()
        .use(stripMarkdown, {
          remove: ["heading", "blockquote", "list", "image", "html", "code"],
        })
        .process(content);

      if (stripped.value) {
        const description = stripped.value.toString().slice(0, 200);
        return description + "...";
      }
    },
  },
  url_path: {
    type: "string",
    /* eslint no-underscore-dangle: off */
    resolve: (post) => post._raw.flattenedPath,
  },
  slug: {
    type: "string",
    /* eslint no-underscore-dangle: off */
    resolve: (doc) => doc._raw.flattenedPath.replace(/^(.+?\/)*/, ""),
  },
};

const Page = defineDocumentType(() => ({
  name: "Page",
  filePathPattern: "**/*.md*",
  contentType: "mdx",
  fields: {
    ...sharedFields,
    created: { type: "date" },
    authors: {
      type: "list",
      of: { type: "string" },
    },
  },
  computedFields,
}));

const Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: `${siteConfig.blogDir}/**/!(index)*.md*`,
  contentType: "mdx",
  fields: {
    ...sharedFields,
    layout: { type: "string", default: "blog" },
    created: {
      type: "date",
    },
    authors: {
      type: "list",
      of: { type: "string" },
    },
    categories: {
      type: "list",
      of: { type: "string" }
    },
    tags: {
      type: "list",
      of: { type: "string" },
    }
  },
  computedFields,
}));

export const Person = defineDocumentType(() => ({
  name: "Person",
  filePathPattern: `${siteConfig.peopleDir}/!(index)*.md*`,
  contentType: "mdx",
  fields: {
    ...sharedFields,
    layout: { type: "string", default: "people" },
    id: {
      type: "string",
    },
    name: {
      type: "string",
      required: true,
    },
    avatar: {
      type: "string",
      default: siteConfig.avatarPlaceholder,
    },
    email: {
      type: "string",
    },
    twitter: {
      type: "string",
    },
    linkedin: {
      type: "string",
    },
    github: {
      type: "string",
    },
  },
  computedFields,
}));

const Podcast = defineDocumentType(() => ({
  name: "Podcast",
  contentType: "mdx",
  filePathPattern: "podcast/**/*.md*",
  fields: {
    ...sharedFields,
    date: { type: "date" },
    author: { type: "string" },
    src: { type: "string" },
    audioType: { type: "string", default: "audio/x-m4a" },
    layout: { type: "string", default: "podcast" },
  },
  computedFields
}))

const statusOptions = [
  "active",
  "incubating",
  "inactive",
  "completed"
]

const resolutionOptions = [
  "dormant",
  "retired",
  "merged",
  "cancelled"
]

const Initiative = defineDocumentType(() => ({
  name: "Initiative",
  contentType: "mdx",
  filePathPattern: "initiatives/**/*.md*",
  fields: {
    ...sharedFields,
    layout: { type: "string", default: "initiatives" },
    homepage: { type: "json" },
    start: { type: "json" },
    end: { type: "json" },
    team: { type: "list", of: { type: "string" }, default: [] },
    alumni: { type: "json" },
    size: { type: "enum", options: ["xl", "l", "m", "s", "xs"] },
    state: { type: "enum", options: ["open", "closed"] },
    status: { type: "enum", options: statusOptions },
    resolution: { type: "enum", options: resolutionOptions },
    created: { type: "date" },
  },
  computedFields: {
    ...computedFields,
    alumni: {
      type: "list",
      resolve: doc => {
        if (!Array.isArray(doc.alumni)) return []
        return doc.alumni
      }
    }
  }
}))

const Residency = defineDocumentType(() => ({
  name: "Residency",
  contentType: "mdx",
  filePathPattern: "programs/**/*.md*",
  fields: {
    ...sharedFields,
    layout: { type: "string", default: "residencies" },
    start: { type: "json" },
    end: { type: "json" },
    facilitators: { type: "json" },
    location: { type: "string" },
    cost: { type: "string" },
    "apply-button": { type: "string" },
    created: { type: "date" }
  },
  computedFields
}))

/* Ecosystem document types */

const NestedUrl = defineNestedType(() => ({
  name: 'NestedUrl',
  fields: {
    url: { type: 'string' },
    cached: { type: 'string' },
    cached_new: { type: 'string' }
  }
}));

const SocialChangeFields = defineNestedType(() => ({
  name: 'SocialChange',
  fields: {
    inner: { type: 'json' },
    cultural: { type: 'json' },
    systems: { type: 'json' }
  }
}));

const resolveArrays = ['topic', 'activity', 'people', 'locations'].reduce(
  (el, key) => ({
    ...el,
    [key]: {
      type: 'json',
      resolve: (doc) => (doc[key] == 0 ? [] : doc[key])
    }
  }),
  {}
);

const Profile = defineDocumentType(() => ({
  name: 'Profile',
  filePathPattern: 'ecosystem/profiles/**/*.md*',
  contentType: 'mdx',
  fields: {
    ...sharedFields,
    layout: { type: 'string', default: 'profile' },
    id: { type: 'string' },
    url: { type: 'string' },
    tagline: { type: 'json' },
    activity: { type: 'json' },
    topic: { type: 'json' },
    regions: { type: 'json' },
    locations: { type: 'json' },
    started: { type: 'json' },
    ended: { type: 'string' },
    active: { type: 'string' },
    people: { type: 'json' },
    notes_data_entry: { type: 'string' },
    facebook: { type: 'json' },
    twitter: { type: 'json' },
    instagram: { type: 'json' },
    linkedin: { type: 'json' },
    youtube: { type: 'json' },
    blog: { type: 'json' },
    logo: { type: 'nested', of: NestedUrl },
    image: { type: 'nested', of: NestedUrl },
    curation_status: { type: 'string' },
    social_change: { type: 'nested', of: SocialChangeFields }
  },
  computedFields: {
    ...computedFields,
    ...resolveArrays
  }
}));

const Topic = defineDocumentType(() => ({
  name: 'Topic',
  filePathPattern: 'ecosystem/topics/**/*.md*',
  contentType: 'mdx',
  fields: {
    ...sharedFields,
    id: { type: 'string' },
    image: { type: 'string' },
    emoji: { type: 'json' },
    super_topic: { type: 'string' }
  },
  computedFields
}));

const contentLayerExcludeDefaults = [
  "node_modules",
  ".git",
  ".yarn",
  ".cache",
  ".next",
  ".contentlayer",
  "package.json",
  "tsconfig.json",
];

/* eslint import/no-default-export: off */
export default makeSource({
  contentDirPath: siteConfig.content,
  contentDirExclude: contentLayerExcludeDefaults.concat([
    ".flowershow",
    ".obsidian",
    ...siteConfig.contentExclude,
  ]),
  contentDirInclude: siteConfig.contentInclude,
  documentTypes: [Blog, Person, Podcast, Profile, Topic, Initiative, Residency, Page],
  mdx: {
    cwd: process.cwd(),
    remarkPlugins: [
      remarkEmbed,
      remarkGfm,
      [smartypants, { quotes: false, dashes: "oldschool" }],
      remarkMath,
      callouts,
      [wikiLinkPlugin, { markdownFolder: siteConfig.content }],
      [
        remarkToc,
        {
          heading: "Table of contents",
          // maxDepth: "3",
          tight: true,
        },
      ],
      mdxMermaid
    ],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          test(element) {
            return (
              ["h2", "h3", "h4", "h5", "h6"].includes(element.tagName) &&
              element.properties?.id !== "table-of-contents" &&
              element.properties?.className !== "blockquote-heading"
            );
          },
          content() {
            return [
              h(
                "svg",
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  fill: "#ab2b65",
                  viewBox: "0 0 20 20",
                  className: "w-5 h-5",
                },
                [
                  h("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M9.493 2.853a.75.75 0 00-1.486-.205L7.545 6H4.198a.75.75 0 000 1.5h3.14l-.69 5H3.302a.75.75 0 000 1.5h3.14l-.435 3.148a.75.75 0 001.486.205L7.955 14h2.986l-.434 3.148a.75.75 0 001.486.205L12.456 14h3.346a.75.75 0 000-1.5h-3.14l.69-5h3.346a.75.75 0 000-1.5h-3.14l.435-3.147a.75.75 0 00-1.486-.205L12.045 6H9.059l.434-3.147zM8.852 7.5l-.69 5h2.986l.69-5H8.852z",
                  }),
                ]
              ),
            ];
          },
        },
      ],
      rehypeMathjax,
      [rehypePrismPlus, { ignoreMissing: true }],
    ],
  },
});
