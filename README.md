# ESModule-learning

## 介绍
ECMAScript 模块化练习

## 运行环境

- Chrome 71+
- NodeJS 9.11.1+

## 课程说明
由于`ESModule`在`NodeJS`中目前还属于试验性功能，需要用参数命令来打开，具体如下：
```bash
node --experimental-modules xxx.mjs
```
课程里为了演示的方便，都配置了`npm scripts`命令了，你只需用以下命令即可在控制台中看到效果
```bash
npm run test
```
有些课程里面可能还会运行在浏览器中，此时你需要安装好相关的依赖，然后运行，具体命令如下：
```bash
npm install
npm run open
```

------------------------------------------

## Lesson01

> ESModule 模块重定向演示

### 文件说明
`lib.mjs`: 为目标导入库，提供各种函数和类、数据；

`redirect-module.mjs`: 为重定向模块，任何对于`redirect-module.mjs`的导入操作，都会被转化为对`lib.mjs`的导入，达到模块重定向的功能；

`main.mjs`: 程序演示入口；

### 启动命令

```bash
npm run test
```

---------------------------------------

## Lesson02
> ESModule 导入整个模块的内容时的一些禁忌

## 文件说明
*cmd目录*
> 存放着 nodejs commonjs模块化方案下，对于导入模块对象属性修改的演示代码

`lib.js`: 为目标导入库，提供各种函数和类、数据；
`main.js`: 程序演示入口；

*esmodule目录*
> 存放着 ESModule模块化方案下，对于导入模块对象属性修改的演示代码

`lib.mjs`: 为目标导入库，提供各种函数和类、数据；
`main.mjs`: 程序演示入口；

### 启动命令
#### cmd目录
```bash
npm run test
```

#### esmodule目录
##### nodejs环境
```bash
npm run test
```

##### 浏览器环境
```bash
npm run open
```

---------------------------------------------