const { description } = require('../../package')

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
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
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
      '/guides/': [
        {
          title: 'User Guides',
          collapsable: false,
          children: [
            '/',
          ]
        }
      ],
      '/api/': [
        {
          title: 'API Documentation',
          collapsable: false,
          children: [
            '/',
          ]
        }
      ],
      '/contributing/': [
        {
          title: 'Contributing',
          collapsable: false,
          children: [
            '/',
          ]
        }
      ],
      '/installation/': [
        {
          title: 'Installation',
          collapsable: false,
          children: [
            'docker',
            'environment',
            'service',
            'ubuntu',
            'debian'
          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
