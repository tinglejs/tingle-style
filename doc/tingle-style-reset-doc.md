<link rel="stylesheet" href="../src/flexbox.css"/>
<link rel="stylesheet" href="../src/util.css"/>
<link rel="stylesheet" href="./doc.css"/>

# Tingle-Style-Reset Doc

* 版本：1.0.0
* 更新时间：2015-04-21
* 负责人：拂山


## what's in it

`reset.css`文件重置了浏览的默认样式，使用时只需将该文件引入页面即可生效，与具体的`class`值无关。

#### border box：

* 默认**所有元素**的盒模型类型为**`border-box`**

#### list style：

* 列表元素`ul`和`ol`的样式默认为`none`值。

#### input, textarea

* 消除输入框和按钮的原生外观
* 去掉点击链接和文本框对象时默认的灰色半透明覆盖层(iOS)或者虚框(Android)

更多内容可以直接查看reset.css源码。