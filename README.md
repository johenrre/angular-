# 后台管理
### 1. 环境依赖

 - npm
 - node
 - angular-cli	

### 2. 运行项目

- 克隆项目

```sh
git clone https://github.com/johenrre/angular-backstage-management.git
```

- 安装依赖

```sh
npm install
```

- 运行

```sh
npm start
```
浏览器中打开 http://localhost:4200/

- build

```
ng build -c production
```

### 3. 目录详解

- e2e                                                            ---- 测试文件
- src                                                              ----开发目录文件
- .editorconfig                                             ----编辑器配置
- .gitignore                                                   ----git忽略文件
- .npmrc                                                       ---- 通过npm set 设置环境变量，换源
- .prettierrc                                                  ---- 同意代码格式化的工具 [文档](https://juejin.im/post/5a7d70496fb9a063317c47f1)
- angular.json                                              ---- angular配置文件，语法类似webpack
- package-lock.json                                    ---- lock环境包的版本
- package.json                                             ---- 依赖
- proxy.conf.json                                         ---- proxy配置
- tsconfig.json                                              ---- ts的配置文件
- tslint.json                                                   ---- tslint配置文件

### 4. TODO

- [ x ] 登陆页面&页面布局
- [ x ] 配置路由， 路由守护
- [ x ] 表单验证页面
  - [ x ] 同步验证
  - [ x] 交叉验证
  - [ x ] 异步验证
  - [ x ] 自定义验证器
- [ x ] 表格页面
  - [ x ] 分页
  - [ x ] 表格修改操作
  - [ ] 表格过滤
- [ ] 图表页面
- [ ] Qrcode和图片在线合成
- [ x ] 自定义组件
  - [ x ] 自定义管道

  - [ x ] 自定义指令

  - [ x ] 自定义插件


