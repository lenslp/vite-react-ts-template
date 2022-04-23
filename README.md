## 简介

使用 [vite@2.x](https://cn.vitejs.dev) + [react@18.x](https://reactjs.org/) + hooks + [typescript@4.x](https://www.tslang.cn/) + [antd@4.x](https://ant-design.gitee.io/index-cn) 最新技术栈搭建的 react 模版

## 项目启动

```
git clone https://github.com/lenslp/vite-react-ts-template.git
yarn install
yarn dev
```

## 更新计划（持续更新中）

- [x] 支持 Typescript
- [x] 热更新
- [x] eslint + prettier 校验代码风格、保存文件自动修复
- [x] commit 时校验代码是否符合 eslint 规范，不通过则无法提交
- [x] antd 按需引入
- [x] less
- [x] css Modules
- [x] 自定义主题色覆盖
- [x] 使用 dayjs 替换 moment 减少包大小
- [x] alias 别名设置
- [x] 引入 axios 请求库
- [x] proxy 代理配置
- [x] 引入 [yapi-to-ts](https://www.npmjs.com/package/yapi-to-ts)，根据 YApi 或 Swagger 的接口定义生成 TypeScript/JavaScript 的接口类型及其请求函数代码
- [x] 路由及 Layout 配置
- [ ] 微前端

## 项目目录

```
├── .vscode // 编辑器 eslint 规则配置文件
├── src // 项目开发主目录
│ ├── assets // 静态资源
│ │ ├── data
│ │ │ ├── constants.ts // 定义常量
│ │ │ └── enums.ts // 定义枚举
│ │ └── images // 图片资源，也可上传oss
│ ├── components // 公共组件
│ ├── layouts // 布局组件
│ │ ├── BasicLayout // 基础布局组件，带顶部栏和导航，适用于中后台项目
│ │ ├── BlankLayout // 空白布局组件
│ ├── pages // 页面组件
│ ├── routes // 路由配置
│ ├── api // 定义接口，使用 [yapi-to-ts](https://www.npmjs.com/package/yapi-to-ts) 生成接口在此目录下
│ ├── styles // 全局样式目录
│ ├── utils // 公共工具目录
│ ├── vite-env.d.ts // 为以 VITE_ 为前缀的用户自定义环境变量的 TypeScript 智能提示
├── .eslintrc.js // eslint 配置文件
├── .gitignore
├── ytt.config.ts // [yapi-to-ts](https://www.npmjs.com/package/yapi-to-ts) 工具配置文件
├── tsconfig.json
└── typings.d.ts

```
