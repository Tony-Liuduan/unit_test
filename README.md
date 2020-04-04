# 单元测试

## Karma
1. 单元测试框架
```sh
npm i -D karma
```

2. 初始化karma，安装断言库 && 运行环形-无头浏览器
```sh
# 初始化配置→karma.conf.js
karma init
# 选择适配器：PhantomJS 无头浏览器

# 执行测试
karma start
```

3. 生成报告：`karma-coverage`
> https://www.npmjs.com/package/karma-coverage
```sh
npm install karma-coverage --save-dev
```
参见文档修改karma.conf.js配置文件即可

---

# UI测试
phantomcss
backstopjs

## backstopjs
```sh
## 内部依赖puppeteer， npm 装不上
cnpm i -D backstopjs

## init 生成backstop.json && backstop_data
backstop init

## 配置好backstop.json后执行测试
backstop test
```

#### backstop.json 说明
* scenarios.url: 让浏览器打开的url
* paths.bitmaps_reference: 文件夹存放ui给的图


## 无头浏览器
1. puppeteer
2. PhantomJs

---

# 功能测试 e2e
> 黑盒测试
* selenium-webdriver(最早)
* nightwatch(配置复杂)
* cypress(配置简单，最为推荐，生态好，官网有视频教学)
* [rize.js](https://rize.js.org/#features)(上手快，是对puppeteer的封装)
* uirecorder(阿里巴巴，配置复杂，[f2etest](https://github.com/alibaba/f2etest))

## selenium-webdriver
```sh
npm i -D selenium-webdriver
node ./tests/e2e/index.spec.js
```
ps: 需要下载ChromeDriver，且ChromeDriver与本地chrome浏览器的版本要保持一致
ChromeDriver下载地址：http://npm.taobao.org/mirrors/chromedriver/


---

# service接口测试
> 测试node api, mocha 测试异步接口测试

1. 依赖测试请求requset→supertest，用于测试requset
```sh
npm i -D supertest
npm i -D mocha
# 导出报表
npm i -D mochawesome
```
2. 写mocha启动文件：mochaRunner.js
```sh
node mochaRunner.js
```
```js
// mochaRunner.js
const Mocha = require('mocha');


const mocha = new Mocha({
    reporter: 'mochawesome',
    reporterOptions: {
        reportDir: "./docs/mochawesome-report",
    },
});


mocha.addFile('./tests/service/router.spec.js');


mocha.run(function () {
    console.log('all done');
    process.exit();
})
```


### demo
```js
const superagent = require('supertest');
const app = require('./app');

function requset() {
    return superagent(app.listen());
}

describe("Node的容错机制", function () {
    it("404脚本错误", function (done) { // done 是mocha提供的
        requset()
            .get('/message/notfount')
            .expect("404", done)
    })
})
```