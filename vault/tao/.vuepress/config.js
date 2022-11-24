module.exports = {
  title: 'The Tao of Life Itself',
  description: 'Guide to our way of being and doing',
  markdown: {
    linkify: true,
    typographer: true,
    breaks: true,
    html: true,
    toc: {
      includeLevel: [2, 3]
    },
    extendMarkdown: md => {
      md.use(require('markdown-it-footnote'))
    }
  },
  themeConfig: {
    // Assumes GitHub. Can also be a full GitLab url.
    repo: 'https://github.com/life-itself/tao',
    repoLabel: 'Contribute!',
    // defaults to false, set to true to enable
    editLinks: true,
    sidebar: 'auto',
    nav: [
      { text: 'About', items: [
          { text: 'About', link: '/#about' },
          { text: 'Plans', link: '/plans/' },
          { text: 'Governance', link: '/governance/' }
        ]
      },
      { text: 'Why', items: [
          { text: 'Narrative', link: '/narrative/' },
          { text: 'Reason for existence (SCQH)', link: '/scqh/' }
        ]
      },
      { text: 'Culture', link: '/culture/' },
      { text: 'Hubs', link: '/hubs/' },
      { text: 'Getting Stuff Done', items: [
          { text: 'Getting Stuff Done overview',  link: '/getting-stuff-done/' },
          { text: 'Working with Us ',  link: '/working-with-us/' },
          { text: 'Onboarding Guide',  link: '/onboarding/' },
          { text: 'Issues and Tasks',  link: '/issues/' },
        ]
      },
      { text: 'Reference', link: '/#reference' } 
    ]
  },
  plugins: [
    [
      'vuepress-plugin-mermaidjs',
      // removing until GA 4 is supported - see https://github.com/vuejs/vuepress/issues/2713
      // using the head tag below to insert for now
      // '@vuepress/plugin-google-analytics',
      // {
      //   'ga': ''
      // }
    ]
  ],
  head: [
      [
          'script',
          {
              async: true,
              src: 'https://www.googletagmanager.com/gtag/js?id=G-708S7CJQ7G',
          },
      ],
      [
          'script',
          {},
          [
              "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-708S7CJQ7G');",
          ],
      ],
  ],
}
