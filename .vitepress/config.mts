import {withMermaid} from "vitepress-plugin-mermaid"

// https://vitepress.dev/reference/site-config
export default withMermaid({
  title: "Dux Next",
  description: "Duxlite And DuxRefine All Docs",
  mermaid: {},
  markdown:{
    lineNumbers:true
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {text: '指导', link: '/guide/'},
      {text: '后端开发', link: '/application/'},
    ],

    sidebar: {
      '/guide/': [
        {
          text: '指导',
          items: [
            {text: '什么是 Dux Next？', link: '/guide/info'},
            {text: '开始部署', link: '/guide/'},
            {text: '生命周期', link: '/guide/life'},
            {text: '目录结构', link: '/guide/directory'},
          ]
        },
        {
          text: '应用',
          items: [
            {text: '应用结构', link: '/guide/application'},
            {text: '创建一个示例应用', link: '/guide/example'},
            {text: '安装商店应用', link: '/guide/install'},
          ]
        },
        {
          text: '答疑',
          items: [
            {text: '为什么选择该系统？', link: '/guide/way'},
            {text: '该系统的优势在哪里？', link: '/guide/advantage'},
          ]
        },

      ],
      '/application/': [
        {
          text: '应用',
          items: [
            {text: '应用资源', link: '/application/resource'},
            {text: '数据模型', link: '/application/life'},
            {text: '事件调度', link: '/application/life'},
            {text: '自定义菜单', link: '/application/directory'},
          ]
        },
        {
          text: '辅助',
          items: [
            {text: '常用类库', link: '/application/'},
            {text: '常用函数', link: '/guide/'},
            {text: '中间件', link: '/guide/life'},
            {text: '命令行工具', link: '/guide/life'},
            {text: '语言包', link: '/guide/life'},
            {text: '调试工具', link: '/guide/directory'},
          ]
        }
      ],
    },


    socialLinks: [
      {icon: 'github', link: 'https://github.com/vuejs/vitepress'}
    ]
  }
})
