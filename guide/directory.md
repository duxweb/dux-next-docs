# 目录结构

以下是项目的目录结构概况

## 根目录

根目录中包含系统的前后端所有文件。

```bash
└─ root
   ├─ app                # <- 后台应用目录
   ├─ web                # <- 后台前端目录
   ├─ config              # <- 配置文件
   ├─ console            # <- 公共命令类目录
   ├─ data               # <- 数据目录，存储缓存、日志等运行数据
   ├─ public             # <- 公开目录，系统运行对外目录
   ├─ theme              # <- CMS 模块开发模板
   ├─ composer.json      # <- php依赖配置文件
   └─ dux                # <- 命令工具
```


## 前端目录

前端目录为系统的前端目录，该目录包含以下文件:

```bash
└─ web  # 前端目录，包含前端所有文件和子目录。
   ├─ public               # <- 前端资源目录，包含图片等静态资源
   ├─ src                  # <- 前端源码目录
   |  ├─ config            # <- 公共组件
   |  |  ├─ app.ts         # <- 前端模块入口索引(自动生成)
   |  |  └─ index.ts       # <- 前端主配置文件
   |  ├─ pages             # <- 前端页面目录
   |  ├─ static            # <- 页面静态文件
   |  ├─ index.tsx         # <- 管理端入口
   |  └─ install.tsx       # <- 安装向导入口
   ├─ index.html           # <- 前端入口页面
   ├─ install.html         # <- 安装入口页面
   ├─ package.json         # <- 前端依赖配置文件
   ├─ uno.config.js        # <- unocss 配置文件
   └─ vite.config.mts      # <- vite 配置文件
```

## public 目录

开发者可以把客户端可访问到的文件放置在该目录，同时该目录包含了 `index.php` 入口文件，请将该目录作为公开目录对外访问。
