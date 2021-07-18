const fs = require('fs');
const path = require('path');

const { description } = require('../../package')
const templateBase = `${__dirname}/../`

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'OctoFarms Documentation',
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
    ['link', { rel: 'icon', href: '/logo.png' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon-152x152.png' }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: 'https://github.com/OctoFarm/OctoFarm-Documentation',
    editLinks: false,
    docsDir: 'src/.vuepress/dist',
    editLinkText: '',
    nextLinks: false,
    prevLinks: false,
    lastUpdated: "Last Updated",
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
    ],
    sidebar: {
      '/installation/': generateSideBar("installation", "Installation Instructions"),
      '/guides/': generateSideBar("guides", "Application Guides"),
      '/api/': generateSideBar("api", "API Usage"),
      '/contributing/': generateSideBar("contributing", "Contributing Guidelines")
    },
    sidebarDepth: 2,
    /**
     * Locales configuration for translation support
     *
     * ref：https://vuepress.vuejs.org/guide/i18n.html#site-level-i18n-config
     */
    locales: {
      // The key is the path for the locale to be nested under.
      // As a special case, the default locale can use '/' as its path.
      '/': {
        lang: 'en-GB', // this will be set as the lang attribute on <html>
        title: 'OctoFarm Documentation',
        description: 'OctoFarms official documentation'
      },
      // '/zh/': {
      //   lang: 'zh-CN',
      //   title: 'VuePress',
      //   description: 'Vue 驱动的静态网站生成器'
      // }
    },

  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    ['vuepress-plugin-code-copy', {
      staticIcon: true
    }],
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: true
      }
    ]
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
