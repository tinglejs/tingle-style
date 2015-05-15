<link rel="stylesheet" href="../src/flexbox.css"/>
<link rel="stylesheet" href="./doc.css"/>

# Tingle Flexbox Doc

* 版本：1.0.0
* 更新时间：2015-04-18
* 负责人：拂山

## flexbox axis

flexbox系统的两个轴：**main axis / cross axis**

<img src="img/flex-direction-terms.svg" alt="" style="width:100%">

<div class="note">重点！对齐规则：main轴上的对齐使用justify关键字，cross轴上的对齐使用align关键字。</div>

所以，justify和align**都**可以实现视觉上的水平对齐，具体使用哪一个，**取决于**父容器的伸缩方向。详见下面的demo说明。

## doc

> `tingle`中，所有`flexbox`相关的`class`值，都以`tFB`为前缀。

#### 定义伸缩容器：

* tFBH: 即`flexbox horizontal`，指定目标元素成为伸缩容器，且内部子元素水平排列。
* tFBV: 即`flexbox vertical`，指定目标元素成为伸缩容器，且内部子元素垂直排列。

#### 对齐子元素(包括伸缩元素)：

* tFBAS: 即`cross axis's align start`，将子元素对齐到`cross`轴的起点上。
* tFBAC: 即`cross axis's align center`，将子元素对齐到`cross`轴的中点上。
* tFBAE: 即`cross axis's align end`，将子元素对齐到`cross`轴的终点上。
* tFBJS: 即`main axis's justify start`，将子元素对齐到`main`轴的起点上。
* tFBJC: 即`main axis's justify center`，将子元素对齐到`main`轴的起点上。
* tFBJE: 即`main axis's justify end`，将子元素对齐到`main`轴的起点上。

## demo

#### demo 1

父容器为**水平**方向伸缩容器，**且没有设置任何轴上的对齐方式**。则内部的伸缩元素，**如果没有设置高度，其高度与父容器高度相等**。

```html
<div class="container tFBH">
    <div class="red w30 h30"></div>
    <div class="pink w50 h100"></div>
    <div class="tFB1 orange">伸缩元素没有设置高度，则其高度等于容器高度</div>
    <div class="tFB1 yellowgreen h70">伸缩元素设置了固定高度</div>
</div>
```

<div class="container tFBH">
    <div class="red w30 h30"></div>
    <div class="pink w50 h100"></div>
    <div class="tFB1 orange">伸缩元素没有设置高度，则其高度等于容器高度</div>
    <div class="tFB1 yellowgreen h70">伸缩元素设置了固定高度</div>
</div>

#### demo 2

父容器为**水平**方向伸缩容器，**且设置了cross轴上的对齐**。则内部的伸缩元素的高度是**auto**的。下面的demo设置了cross轴上的对齐为**start**。

```html
<div class="container tFBH tFBAS">
    <div class="red w30 h30"></div>
    <div class="pink w50 h100">w:50 h:100</div>
    <div class="tFB1 orange">伸缩元素没有设置高度</div>
    <div class="tFB1 yellowgreen h70">伸缩元素设置了固定高度</div>
</div>
```

<div class="container tFBH tFBAS">
    <div class="red w30 h30"></div>
    <div class="pink w50 h100"></div>
    <div class="tFB1 orange">伸缩元素没有设置高度</div>
    <div class="tFB1 yellowgreen h70">伸缩元素设置了固定高度</div>
</div>

#### demo 3

父容器为**水平**方向伸缩容器，**且设置了cross轴上的对齐为center**。

```html
<div class="container tFBH tFBAC">
    <div class="red w30 h30"></div>
    <div class="pink w50 h100">w:50 h:100</div>
    <div class="tFB1 orange">伸缩元素没有设置高度</div>
    <div class="tFB1 yellowgreen h70">伸缩元素设置了固定高度</div>
</div>
```

<div class="container tFBH tFBAC">
    <div class="red w30 h30"></div>
    <div class="pink w50 h100"></div>
    <div class="tFB1 orange">伸缩元素没有设置高度</div>
    <div class="tFB1 yellowgreen h70">伸缩元素设置了固定高度</div>
</div>

#### demo 4

父容器为**水平**方向伸缩容器，**且设置了cross轴上的对齐为end**。

```html
<div class="container tFBH tFBAE">
    <div class="red w30 h30"></div>
    <div class="pink w50 h100">w:50 h:100</div>
    <div class="tFB1 orange">伸缩元素没有设置高度</div>
    <div class="tFB1 yellowgreen h70">伸缩元素设置了固定高度</div>
</div>
```

<div class="container tFBH tFBAE">
    <div class="red w30 h30"></div>
    <div class="pink w50 h100"></div>
    <div class="tFB1 orange">伸缩元素没有设置高度</div>
    <div class="tFB1 yellowgreen h70">伸缩元素设置了固定高度</div>
</div>

#### demo 5

父容器为**垂直**方向伸缩容器，**且没有设置任何轴上的对齐方式**。则内部的伸缩元素，**如果没有设置宽度，其宽度与父容器宽度相等**。

```html
<div class="container tFBV h200">
    <div class="red w30 h30"></div>
    <div class="green w100 h30"></div>
    <div class="tFB1 orange">tFB1</div>
    <div class="tFB1 yellowgreen w70">tFB1 w:70</div>
</div>
```

<div class="container tFBV h200">
    <div class="red w30 h30"></div>
    <div class="green w100 h30"></div>
    <div class="tFB1 orange">tFB1</div>
    <div class="tFB1 yellowgreen w70">tFB1 w:70</div>
</div>

#### demo 6

父容器为**垂直**方向伸缩容器，**且设置了cross轴上的对齐**。则内部的伸缩元素的宽度是auto的。下面的demo设置了cross轴上的对齐为**start**。

```html
<div class="container tFBV tFBAS h200">
    <div class="red w30 h30"></div>
    <div class="green w100 h30"></div>
    <div class="tFB1 orange">tFB1</div>
    <div class="tFB1 yellowgreen w70">tFB1 w:70</div>
</div>
```

<div class="container tFBV tFBAS h200">
    <div class="red w30 h30"></div>
    <div class="green w100 h30"></div>
    <div class="tFB1 orange">tFB1</div>
    <div class="tFB1 yellowgreen w70">tFB1 w:70</div>
</div>

#### demo 7

父容器为**垂直**方向伸缩容器，**且设置了cross轴上的对齐为center**。

```html
<div class="container tFBV tFBAC h200">
    <div class="red w30 h30"></div>
    <div class="green w100 h30"></div>
    <div class="tFB1 orange">tFB1</div>
    <div class="tFB1 yellowgreen w70">tFB1 w:70</div>
</div>
```

<div class="container tFBV tFBAC h200">
    <div class="red w30 h30"></div>
    <div class="green w100 h30"></div>
    <div class="tFB1 orange">tFB1</div>
    <div class="tFB1 yellowgreen w70">tFB1 w:70</div>
</div>

#### demo 8

父容器为**垂直**方向伸缩容器，**且设置了cross轴上的对齐为end**。

```html
<div class="container tFBV tFBAE h200">
    <div class="red w30 h30"></div>
    <div class="green w100 h30"></div>
    <div class="tFB1 orange">tFB1</div>
    <div class="tFB1 yellowgreen w70">tFB1 w:70</div>
</div>
```

<div class="container tFBV tFBAE h200">
    <div class="red w30 h30"></div>
    <div class="green w100 h30"></div>
    <div class="tFB1 orange">tFB1</div>
    <div class="tFB1 yellowgreen w70">tFB1 w:70</div>
</div>

#### demo 9

父容器为**水平**方向伸缩容器，**同时设置两个轴上的对齐为center**。

```html
<div class="container tFBH tFBAC tFBJC h200">
    <div class="red w30 h30"></div>
    <div class="pink w100 h50"></div>
    <div class="green w100 h30"></div>
</div>
```

<div class="container tFBH tFBAC tFBJC h200">
    <div class="red w30 h30"></div>
    <div class="pink w100 h50"></div>
    <div class="green w100 h30"></div>
</div>

#### demo 10

父容器为**垂直**方向伸缩容器，**同时设置两个轴上的对齐为center**。

```html
<div class="container tFBV tFBAC tFBJC h200">
    <div class="red w30 h30"></div>
    <div class="pink w100 h50"></div>
    <div class="green w100 h30"></div>
</div>
```

<div class="container tFBV tFBAC tFBJC h200">
    <div class="red w30 h30"></div>
    <div class="pink w100 h50"></div>
    <div class="green w100 h30"></div>
</div>