# 快速开始

按照如下步骤即可快速开始体验 Dux Next 系统。

## 依赖环境

- Nginx / Apache
- PHP 8.2+
- Mysql 5.7+

请自行根据当前使用的操作系统进行环境搭建，Windows 推荐使用 PhpEnv，MacOS 推荐使用 valet 或 PhpWebStudy，Linux 推荐使用宝塔面板作为生产环境。

## 安装步骤

1. 创建并进入一个新目录，下面以类 Unix 系统为例，Windows 系统请手动创建站点目录。

```bash
mkdir duxlite
cd duxlite
```

2. 下载源代码并解压到创建的目录中，下面的下载地址选择任意一种。

- [Gitee](https://gitee.com/duxphp/duxcms-next/tags)
- [Github](https://github.com/duxweb/duxcms/releases)

- 通过 composer 命令下载源码
  ```bash
  // 正式版 - 未发布时不可用
  composer create-project duxweb/duxcms
  
  // 开发版 - 开发内部使用
  composer create-project duxweb/duxcms:dev-main
  ```

3. 设置站点目录

添加新的站点并且设置程序运行目录为项目中 `/public` 目录。

4. 配置伪静态规则

默认使用伪静态，请根据环境选择设置规则：

- nginx
```bash
location / {
    try_files $uri /index.php$is_args$args;
}
```

- apache
```bash
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^ index.php [QSA,L]
```

5、安装 composer 依赖

在项目目录中执行下面命令进行安装依赖，如安装失败请自行检查网络或更换网络环境。

```bash
composer install
```

## 安装向导

现在您已经将该系统环境配置完成，请访问站点域名将自动进入安装引导：

![](https://cdn.dux.plus/2024-03-22/3e9985b9befa7086df2a.png)

请根据指引进行设置，数据库需要手动使用数据库工具进行创建数据库，数据库编码为 `utf8mb4`

## 访问后台

安装成功后可点击按钮进入后台管理或者访问以下地址进入：

```bash
http://域名/manage
```

初始账户密码均为 `admin`
