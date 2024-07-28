# 安装应用

应用商店提供了大量免费的基础应用，您可以按照下面步骤进行安装使用，安装应用需要先搭建前后端开发环境。

## 前端环境
前端环境依赖 nodejs 与 yarn 工具。

1、安装 nodejs

访问官网下载安装最新 LTS 版本：

https://nodejs.org/en/download

2、启用 yarn

命令行工具中执行下面命令：

```bash
corepack enable
```

3、验证安装

输入下面命令验证安装是否成功，如果未成功请自行检查：

```bash
yarn help
```

## 后端环境
后端环境依赖 php 8.2 + Mysql 组合环境，请自行搜索安装环境。

还需要 composer 作为依赖管理工具：

::: code-group
```bash [Windows] 
# 下载安装包进行安装
https://getcomposer.org/Composer-Setup.exe
```

```bash [MacOS] 
# 使用 brew 工具安装
brew install composer
```
:::


composer 默认依赖的 php 版本为全局版本，请先设置 php 全局版本为项目一致的版本，输入下面命令验证版本：

```bash
php -v
```

安装后重新打开命令行工具输入 `composer -vvv` 来验证是否安装成功。


## 应用安装
请通过应用市场挑选应用，可通过命令行工具进行安装：

::: code-group

```bash [windows]
php dux install 应用名
```


```bash [Linux + Macos]
./dux install 应用名
```
:::

`安装时`可通过编译参数来安装并且编译前端：

::: code-group

```bash [windows]
php dux install 应用名 --build
```


```bash [Linux + Macos]
./dux install 应用名 --build
```
:::

或者`安装后`手动进行前端编译，在项目目录中执行下面命令：

```bash
# 指向到 web 目录
cd web
# yarn 编译前端
yarn & yarn build
```


## 安装完成

请刷新后台页面查看应用功能是否安装完成，如果出现类不存在等异常报错，则因为网络等问题导致依赖安装不成功，请自行使用镜像或者科学上网重新安装 composer 依赖和 npm 依赖。

