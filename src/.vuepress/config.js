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
    repo: 'https://github.com/OctoFarm/OctoFarm',
    docsRepo: 'https://github.com/OctoFarm/OctoFarm-Documentation',
    docsDir: 'src',
    nextLinks: false,
    prevLinks: false,
    smoothScroll: true,
    editLinks: true,
    sidebarDepth: 2,
    logo: '/logo.png',
    /**
     * Locales configuration for translation support
     *
     * ref：https://vuepress.vuejs.org/guide/i18n.html#site-level-i18n-config
     */
    locales: {
      // The key is the path for the locale to be nested under.
      // As a special case, the default locale can use '/' as its path.
      '/': {
        searchPlaceholder: 'Search...',
        // text for the language dropdown
        selectText: 'Languages',
        // label for this locale in the language dropdown
        label: 'English',
        // Aria Label for locale in the dropdown
        ariaLabel: 'Languages',
        // text for the edit-on-github link
        editLinkText: 'Edit this page on GitHub',
        // config for Service Worker
        serviceWorker: {
          updatePopup: {
            message: "New content is available.",
            buttonText: "Refresh"
          }
        },
        // algolia docsearch options for current locale
        algolia: {},
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
            text: 'Getting Started',
            link: '/getting-started/'
          },
          {
            text: 'Guides',
            link: '/guides/'
          },
          {
            text: 'Installation',
            link: '/installation/'
          },
          {
            text: 'OctoFarm.net',
            link: 'https://octofarm.net',
            target: '_blank'
          },
        ],
        sidebar: {
          '/getting-started/': generateSideBar("getting-started", "Getting Started"),
          '/installation/': generateSideBar("installation", "Installation Instructions"),
          '/guides/': generateSideBar("guides", "Application Guides"),
          '/api/': generateSideBar("api", "API Usage"),
          '/contributing/': generateSideBar("contributing", "Contributing Guidelines")
        },
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
    ],
    ['plausible', { domain: 'docs.octofarm.net' }]
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
