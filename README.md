# f-webpack-template

## Description

[webpack](https://doc.webpack-china.org/) 是一个现代 JavaScript 应用程序的模块打包器(module bundler)。当 webpack 处理应用程序时，它会递归地构建一个依赖关系图(dependency graph)，其中包含应用程序需要的每个模块，然后将所有这些模块打包成少量的 bundle - 通常只有一个，由浏览器加载。

它是高度可配置的，但是，在开始前你需要先理解四个核心概念：入口(entry)、输出(output)、loader、插件(plugins)。


## NPM script

``` bash
# run web-dev-server for development
npm start

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

## Documentations

### config.js

配置文件

```
module.exports = {
  active: 'demo1',
  list: ['demo1', 'demo2'],
};
```

### package.json

```
{
  "name": "template-webpack",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "dependencies": {},
  "devDependencies": {
    "autoprefixer": "^7.1.3",
    "babel-core": "^6.26.0",
    "babel-loader": "^7.1.2",
    "babel-preset-es2015": "^6.24.1",
    "babel-preset-react": "^6.24.1",
    "clean-webpack-plugin": "^0.1.16",
    "cross-env": "^5.0.5",
    "css-loader": "^0.28.7",
    "csv-loader": "^2.1.1",
    "extract-text-webpack-plugin": "^3.0.0",
    "file-loader": "^0.11.2",
    "html-webpack-plugin": "^2.30.1",
    "node-sass": "^4.5.3",
    "postcss-loader": "^2.0.6",
    "sass-loader": "^6.0.6",
    "style-loader": "^0.18.2",
    "uglifyjs-webpack-plugin": "^0.4.6",
    "url-loader": "^0.5.9",
    "webpack": "^3.5.5",
    "webpack-dev-server": "^2.7.1",
    "webpack-merge": "^4.1.0",
    "xml-loader": "^1.2.1"
  },
  "scripts": {
    "start": "cross-env NODE_ENV=local webpack-dev-server --open --config build/webpack.dev.js",
    "dev": "cross-env NODE_ENV=dev webpack-dev-server --open --config build/webpack.dev.js",
    "build": "cross-env NODE_ENV=production webpack --config build/webpack.prod.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}

```

### postcss.config.js

```
module.exports = {
  plugins: [
    require("autoprefixer")({
      remove: false, //对旧代码不删除prefixer（加快编译速度）
      browsers: ["> 5%", "ie>=9", "Firefox >= 20", "Chrome >= 45"]
    })
  ]
};
```

