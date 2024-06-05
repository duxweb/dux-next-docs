import { withMermaid } from "vitepress-plugin-mermaid"

// https://vitepress.dev/reference/site-config
export default withMermaid({
  title: "Dux Next",
  description: "Duxlite And DuxRefine All Docs",
  mermaid:{
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '指导', link: '/guide/' }
    ],

    sidebar: {
      '/guide/': [
        {
          text: '指导',
          items: [
            { text: '什么是 Dux Next？', link: '/guide/info' },
            { text: '快速开始', link: '/guide/' },
            { text: '生命周期', link: '/guide/life' },
            { text: '目录结构', link: '/guide/directory' },
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
