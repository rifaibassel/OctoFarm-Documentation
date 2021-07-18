const fs = require('fs');
const path = require('path');

const { description } = require('../../package')
const templateBase = `${__dirname}/../`

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Vuepress Docs Boilerplate',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: 'https://github.com/OctoFarm/OctoFarm-Documentation',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    nextLinks: false,
    prevLinks: false,
    lastUpdated: false,
    nav: [
      // {
      //   text: 'API',
      //   link: '/api/',
      // },
      // {
      //   text: 'Contributing',
      //   link: '/contributing/'
      // },
      {
        text: 'Guides',
        link: '/guides/'
      },
      {
        text: 'Installation',
        link: '/installation/'
      },
      {
        text: 'OctoFarm',
        link: 'https://octofarm.net'
      },
      {
        text: 'Github',
        link: 'https://github.com/OctoFarm/OctoFarm'
      },
    ],
    sidebar: {
      '/installation/': generateSideBar("installation", "Installation Instructions"),
      '/guides/': generateSideBar("guides", "Application Guides"),
      '/api/': generateSideBar("api", "API Usage"),
      '/contributing/': generateSideBar("contributing", "Contributing Guidelines")
    },
    sidebarDepth: 2,
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    ['vuepress-plugin-code-copy', {
      staticIcon: true
    }]
  ]
}

function generateSideBar(folder, title){
  const extensions = [".md"];
  const files = fs
      .readdirSync(path.join(`${templateBase}${folder}`))
      .filter((item) =>
          item.toLowerCase() !== `readme.md` &&
          fs.statSync(path.join(`${templateBase}${folder}`, item)).isFile() &&
          extensions.includes(path.extname(item))
      )
  return [{title: title, children: [...files]}];
}
