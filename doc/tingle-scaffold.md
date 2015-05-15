<link rel="stylesheet" href="../src/flexbox.css"/>
<link rel="stylesheet" href="../src/util.css"/>
<link rel="stylesheet" href="./doc.css"/>

## Tingle Developers 和 Tingle User 的协作方式

* 版本：1.0.0
* 更新时间：2015-04-21
* 负责人：拂山

### 1. Developing Component Used in Project

提高开发者和使用者的工作效率，也让版本号升的有意义。

#### 1.1 部分现状(当时倡导者眼中的最佳实践)

以**发布新版本的方式**迭代在项目使用过程中**发现bug**或**有新增需求**的模块，大致流程如下：

1. 开发者：修复`bug`或新增功能
2. 开发者：升级版本号，重新打包
3. 开发者：提交最新代码到版本库(自动触发重新发布`cdn`)
4. 使用者：
   * 如果是使用线上`cdn`的代码，则在项目中配置新的版本号并验证
   * 如果是本地使用该模块(即`spm install xxx`)，则要重新`install`，并更新配置中的版本号。


**缺点：**

1. 经常遇到的情况是，为了修复一个`bug`，上面的步骤循环了多次(如：版本号从`1.0.0`升级到`1.0.3`)，这种版本的升级实际上是没意义的。(如果以这种方式将模块发布到`npm`上或以其他方式开源，没人敢用！)
2. 如果项目需要同时有多个模块进行如此地麻烦地修复`bug`或升级，使用者一定会被折腾到吐槽。
3. 如果想调试模块的源码，还要再学学`debug`模式如何开启。

#### 1.2 `Tingle生态`：要改变这种所谓的最佳实践

以**直接使用源码的方式(注：不是打包后未压缩的那份源码，是未打包之前的`src`中的源码)**迭代在项目使用过程中**发现bug**或**有新增需求**的模块，大致流程如下：

1. 开发者：修复bug或新增功能
2. 开发者：提交最新代码到版本库(比上面的步骤`2 + 3`，效率上有明显提升)
3. 使用者：拉取最新代码并验证(干净利索)

**缺点：**

1. 学习成本：`git submodule`的相关知识，真正有价值的成本！

**优点：**

1. 模块的源码更容易调试，使用者也可以帮助开发者定位问题，甚至提交新功能。


#### 1.3 使用`Tingle`模块

这种情况适用于当一个`tingle`模块还不成熟，处于随着项目一同开发和改进的一种状态。

> tingle模块的目录规范和发布规范等，在独立的文档中另行说明。这里要明确的一点是，即`tingle_modules`目录下的所有模块的内部目录结构将原样发布到`npm`源上。保证内部项目和外部项目最小的差异。

对于团队**内部项目(注：内部项目都看作是`tingle`模块成长的沃土)**，将所有**非稳定**的`tingle`模块都以**子模块(git submodule)**的形式添加到根目录下的`tingle_modules`文件夹下，使用场景如下：

##### css

样式文件引用路径规范：**`"./tingle_modules/tingle-foobar/dist/FooBar.css"`**，如`DatePicker`的样式路径如下：

```html
<link rel="stylesheet" href="./tingle_modules/tingle-datepicker/dist/DatePicker.css">
```

##### javascript

`js`模块文件引用路径规范：**`"tingle-foobar"`**，即直接通过模块名称引用。如`DatePicker`的模块路径如下：

```js
import DatePicker from 'tingle-datepicker';
```

然后通过`webpack`的配置和`packjson`中`main`键的值的共同作用，将`tingle`模块指定到`tingle_modules`目录。

```js
resolve: {
    alias: {
        'tingle-datepicker': __dirname + '/tingle_modules/tingle-datepicker/src'
    }
},
```
上面`DatePicker`的路径，在`webpack`打包时，实际查找的文件是`./tingle_modules/tingle-datepicker/src/DatePicker.js`

