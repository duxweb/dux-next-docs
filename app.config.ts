export default defineAppConfig({
  shadcnDocs: {
    site: {
      name: 'Dux Next 中后台管理系统 - 开发文档',
      description: '基于php8 + typescript + react + vite 的开源后台管理系统',
    },
    theme: {
      customizable: true,
      color: 'blue',
      radius: 0.5,
    },
    header: {
      title: 'Dux Next',
      showTitle: true,
      darkModeToggle: true,
      logo: {
        light: '/logo.svg',
        dark: '/logo-dark.svg',
      },
      nav: [
        {
          title: "开发文档",
          links: [
            {
              title: '基础开发',
              description: 'Dux Next 开发必要指引',
              icon: 'lucide:github',
              to: '/guide/start',
            },
            {
              title: '后端开发',
              description: 'Dux Next 后端 PHP 开发文档',
              icon: 'lucide:github',
              to: '/php/info',
            },
            {
              title: '前端开发',
              description: 'Dux Refine 前端 React 开发文档',
              icon: 'tabler:brand-react',
              to: '/react/info',
            }
          ]
        },
        {
          title: "学习资源",
          links: [
            {
              title: 'Slim',
              description: 'Slim PHP 开发文档',
              to: 'https://www.slimframework.com/',
              target: '_blank'
            },
            {
              title: 'Eloquent ORM',
              description: 'Eloquent ORM 开发文档',
              to: 'https://learnku.com/docs/laravel/10.x/eloquent/14888#d66211',
              target: '_blank'
            },
            {
              title: 'refine',
              description: 'Dux Refine 开发文档',
              to: 'https://refine.dev/',
              target: '_blank'
            },
            {
              title: 'TDesign',
              description: 'TDesign React 开发文档',
              to: 'tdesign.tencent.com/react',
              target: '_blank'
            },
          ]
        },
        {
          title: "官方网站",
          to: 'https://www.dux.cn',
          target: '_blank'
        }
      ],
      links: [{
        icon: 'lucide:github',
        to: 'https://github.com/duxweb/duxcms',
        target: '_blank',
      }],
    },
    aside: {
      useLevel: true,
      collapse: false,
    },
    main: {
      breadCrumb: true,
      showTitle: true,
    },
    footer: {
      credits: 'Copyright © 2024',
      links: [{
        icon: 'lucide:github',
        to: 'https://github.com/duxweb/duxcms',
        target: '_blank',
      }],
    },
    toc: {
      enable: true,
      title: 'On This Page',
      links: [{
        title: 'Star on GitHub',
        icon: 'lucide:star',
        to: 'https://github.com/duxweb/duxcms',
        target: '_blank',
      }, {
        title: 'Create Issues',
        icon: 'lucide:circle-dot',
        to: 'https://github.com/duxweb/duxcms/issues',
        target: '_blank',
      }],
    },
    search: {
      enable: true,
      inAside: false,
    }
  }
});