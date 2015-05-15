<link rel="stylesheet" href="../src/flexbox.css"/>
<link rel="stylesheet" href="../src/util.css"/>
<link rel="stylesheet" href="./doc.css"/>

# Tingle-Style-Util Doc

* 版本：1.0.0
* 更新时间：2015-04-21
* 负责人：拂山

## belief

如果把**传统的(且优秀的)**UI组件库比作一份**饕餮盛宴**，各种**"美味"**可以信手拈来。那么**Tingle Style**就是一份严格甄选的食材，让你在项目中有无限的发挥空间，无惧于各种口味的需求，无忧于缝缝补补后的风险。

**Tingle Style坚信：授人以鱼不如授人以渔。**

## doc

#### float：

* tCL: 即`clear`，清除浮动
* tFL: 即`float left`
* tFR: 即`float right`

#### radius：

* tR{n}: 即`border-radius`，`n`的可选值为`3 4 5 6`
* tRT{n}: 左上角和右上角为圆角，`n`的可选值同上
* tRR{n}: 右上角和右下角为圆角，`n`的可选值同上
* tRB{n}: 左下角和右下角为圆角，`n`的可选值同上
* tRL{n}: 左上角和左下角为圆角，`n`的可选值同上
* 

    ```html
    <div class="tFBH tFAC tLH30 h30">
        <div class="tFB1 yellowgreen tR3 tMR10">tR3</div>
        <div class="tFB1 yellowgreen tR4 tMR10">tR4</div>
        <div class="tFB1 yellowgreen tR5 tMR10">tR5</div>
        <div class="tFB1 yellowgreen tR6 tMR10">tR6</div>
        <div class="tFB1 yellowgreen tRT6 tMR10">tRT6</div>
        <div class="tFB1 yellowgreen tRR6 tMR10">tRR6</div>
        <div class="tFB1 yellowgreen tRB6 tMR10">tRB6</div>
        <div class="tFB1 yellowgreen tRL6 tMR10">tRL6</div>
    </div>
    ```

    <div class="tFBH tFAC tLH30 h30">
        <div class="tFB1 yellowgreen tR3 tMR10">tR3</div>
        <div class="tFB1 yellowgreen tR4 tMR10">tR4</div>
        <div class="tFB1 yellowgreen tR5 tMR10">tR5</div>
        <div class="tFB1 yellowgreen tR6 tMR10">tR6</div>
        <div class="tFB1 yellowgreen tRT6 tMR10">tRT6</div>
        <div class="tFB1 yellowgreen tRR6 tMR10">tRR6</div>
        <div class="tFB1 yellowgreen tRB6 tMR10">tRB6</div>
        <div class="tFB1 yellowgreen tRL6 tMR10">tRL6</div>
    </div>

#### padding：

* tP{n}: 即`padding`，`n`的可选值为`2 4 6 8 10 12 14 16 18 20`
* tPT{n}: 即`padding-top`，`n`的可选值同上
* tPR{n}: 即`padding-right`，`n`的可选值同上
* tPB{n}: 即`padding-bottom`，`n`的可选值同上
* tPL{n}: 即`padding-left`，`n`的可选值同上

#### margin：

* tM{n}: 即`margin`，`n`的可选值为`2 4 6 8 10 12 14 16 18 20`
* tMT{n}: 即`margin-top`，`n`的可选值同上
* tMR{n}: 即`margin-right`，`n`的可选值同上
* tMB{n}: 即`margin-bottom`，`n`的可选值同上
* tML{n}: 即`margin-left`，`n`的可选值同上

#### position:

* tPR: 即`position relative`
* tPF: 即`position fixed`
* tPA: 即`position absolute`

#### visibility:

* tDN/tHide: 即`display none`
* tDB: 即`display block`
* tDIB: 即`display inline-block`

#### ellipsis:

* tOmit: 强制在一行内显示文字，多余部分用`...`显示
* tOmit2: 强制在两行内显示文字，多余部分用`...`显示，通常需要和**设置父容器高度**一起使用。
* tOmit3: 强制在三行内显示文字，多余部分用`...`显示，通常需要和**设置父容器高度**一起使用。
* 

    ```html
    <div class="tFBH">
        <div class="tFB1 tOmit tMR10">小强！小强你怎么了小强？小强，你不能死啊！我跟你相依为命，同甘共苦了这么多年，一直把你当亲生骨肉一样教你养你，想不到今天，白发人送黑发人！</div>
        <div class="tFB1 tOmit2 tMR10" style="height:20px;overflow:hidden;">小强！小强你怎么了小强？小强，你不能死啊！我跟你相依为命，同甘共苦了这么多年，一直把你当亲生骨肉一样教你养你，想不到今天，白发人送黑发人！</div>
        <div class="tFB1 tOmit3">小强！小强你怎么了小强？小强，你不能死啊！我跟你相依为命，同甘共苦了这么多年，一直把你当亲生骨肉一样教你养你，想不到今天，白发人送黑发人！</div>
    </div>
    ```

    <div class="tFBH">
        <div class="yellowgreen tFB1 tOmit tMR10" style="height:22px;overflow:hidden;">小强！小强你怎么了小强？小强，你不能死啊！我跟你相依为命，同甘共苦了这么多年，一直把你当亲生骨肉一样教你养你，想不到今天，白发人送黑发人！</div>
        <div class="yellowgreen tFB1 tOmit2 tMR10" style="height:44px;overflow:hidden;">小强！小强你怎么了小强？小强，你不能死啊！我跟你相依为命，同甘共苦了这么多年，一直把你当亲生骨肉一样教你养你，想不到今天，白发人送黑发人！</div>
        <div class="yellowgreen tFB1 tOmit3" style="height:66px;overflow:hidden;">小强！小强你怎么了小强？小强，你不能死啊！我跟你相依为命，同甘共苦了这么多年，一直把你当亲生骨肉一样教你养你，想不到今天，白发人送黑发人！</div>
    </div>

#### line height:

* tLH1: 行高1em
* tLH1_3: 行高1.3em
* tLH1_5: 行高1.5em
* tLH1_8: 行高1.8em
* tLH30: 行高30px
* tLH44: 行高44px
* 

    ```html
    <div class="tFBH tFAC">
        <div class="tFB1 tMR10 yellowgreen tLH1">1</div>
        <div class="tFB1 tMR10 yellowgreen tLH1_3">1.3</div>
        <div class="tFB1 tMR10 yellowgreen tLH1_5">1.5</div>
        <div class="tFB1 tMR10 yellowgreen tLH1_8">1.8</div>
        <div class="tFB1 tMR10 yellowgreen tLH2">2</div>
        <div class="tFB1 tMR10 yellowgreen tLH30">30px</div>
        <div class="tFB1       yellowgreen tLH44">44px</div>
    </div>
    ```

    <div class="tFBH tFBAS tFAC">
        <div class="tFB1 tMR10 yellowgreen tLH1">1</div>
        <div class="tFB1 tMR10 yellowgreen tLH1_3">1.3</div>
        <div class="tFB1 tMR10 yellowgreen tLH1_5">1.5</div>
        <div class="tFB1 tMR10 yellowgreen tLH1_8">1.8</div>
        <div class="tFB1 tMR10 yellowgreen tLH2">2</div>
        <div class="tFB1 tMR10 yellowgreen tLH30">30px</div>
        <div class="tFB1       yellowgreen tLH44">44px</div>
    </div>

#### width:

* tW30: 宽度30px
* tW44: 宽度44px

#### height:

* tH30: 高度30px
* tH44: 高度44px

#### font size:

* tF{n}: 即`font-size`，n的可选值包括`12 14 16 18 20 22 24 26`
* 

    ```html
    <div class="tFBH tFBAS tFAC">
        <div class="tFB1 tMR10 yellowgreen tF12">12</div>
        <div class="tFB1 tMR10 yellowgreen tF14">14</div>
        <div class="tFB1 tMR10 yellowgreen tF16">16</div>
        <div class="tFB1 tMR10 yellowgreen tF18">18</div>
        <div class="tFB1 tMR10 yellowgreen tF20">20</div>
        <div class="tFB1 tMR10 yellowgreen tF22">22</div>
        <div class="tFB1 tMR10 yellowgreen tF24">24</div>
        <div class="tFB1 tMR10 yellowgreen tF26">26</div>
        <div class="tFB1 tMR10 yellowgreen tF28">28</div>
        <div class="tFB1       yellowgreen tF30">30</div>
    </div>
    ```

    <div class="tFBH tFBAS tFAC">
        <div class="tFB1 tMR10 yellowgreen tF12">12</div>
        <div class="tFB1 tMR10 yellowgreen tF14">14</div>
        <div class="tFB1 tMR10 yellowgreen tF16">16</div>
        <div class="tFB1 tMR10 yellowgreen tF18">18</div>
        <div class="tFB1 tMR10 yellowgreen tF20">20</div>
        <div class="tFB1 tMR10 yellowgreen tF22">22</div>
        <div class="tFB1 tMR10 yellowgreen tF24">24</div>
        <div class="tFB1 tMR10 yellowgreen tF26">26</div>
        <div class="tFB1 tMR10 yellowgreen tF28">28</div>
        <div class="tFB1       yellowgreen tF30">30</div>
    </div>

#### font color:

* tF{x}: 即`color`，`x`的可选值包括`0 3 4 5 6 7 8 9 a b c d e f`
* 

    ```html
    <div class="tFBH tFBAS tFAC">
        <div class="tFB1 tMR10 tF0">tF0</div>
        <div class="tFB1 tMR10 tF3">tF3</div>
        <div class="tFB1 tMR10 tF4">tF4</div>
        <div class="tFB1 tMR10 tF5">tF5</div>
        <div class="tFB1 tMR10 tF6">tF6</div>
        <div class="tFB1 tMR10 tF7">tF7</div>
        <div class="tFB1 tMR10 tF8">tF8</div>
        <div class="tFB1 tMR10 tF9">tF9</div>
        <div class="tFB1 tMR10 tFa">tFa</div>
        <div class="tFB1 tMR10 tFb">tFb</div>
        <div class="tFB1 tMR10 tFc">tFc</div>
        <div class="tFB1 tMR10 tFd">tFd</div>
        <div class="tFB1 tMR10 yellowgreen tFe">tFe</div>
        <div class="tFB1       yellowgreen tFf">tFf</div>
    </div>
    ```

    <div class="tFBH tFBAS tFAC">
        <div class="tFB1 tMR10 tF0">tF0</div>
        <div class="tFB1 tMR10 tF3">tF3</div>
        <div class="tFB1 tMR10 tF4">tF4</div>
        <div class="tFB1 tMR10 tF5">tF5</div>
        <div class="tFB1 tMR10 tF6">tF6</div>
        <div class="tFB1 tMR10 tF7">tF7</div>
        <div class="tFB1 tMR10 tF8">tF8</div>
        <div class="tFB1 tMR10 tF9">tF9</div>
        <div class="tFB1 tMR10 tFa">tFa</div>
        <div class="tFB1 tMR10 tFb">tFb</div>
        <div class="tFB1 tMR10 tFc">tFc</div>
        <div class="tFB1 tMR10 tFd">tFd</div>
        <div class="tFB1 tMR10 yellowgreen tFe">tFe</div>
        <div class="tFB1       yellowgreen tFf">tFf</div>
    </div>

#### font align:

* tFAL: 即`text-align left`
* tFAC: 即`text-align center`
* tFAR: 即`text-align right`

#### backgrond color:

* tBC{x}: 即`background-color: #xxx`，`x`的可选值包括`0 3 4 5 6 7 8 9 a b c d e f`，`tBC0`相当于`background-color: #000;`，其他同理
* 

    ```html
    <div class="tFBH tFBAS tFAC">
        <div class="tFB1 tMR10 tBC0">tBC0</div>
        <div class="tFB1 tMR10 tBC3">tBC3</div>
        <div class="tFB1 tMR10 tBC4">tBC4</div>
        <div class="tFB1 tMR10 tBC5">tBC5</div>
        <div class="tFB1 tMR10 tBC6">tBC6</div>
        <div class="tFB1 tMR10 tBC7">tBC7</div>
        <div class="tFB1 tMR10 tBC8">tBC8</div>
        <div class="tFB1 tMR10 tBC9">tBC9</div>
        <div class="tFB1 tMR10 tBCa">tBCa</div>
        <div class="tFB1 tMR10 tBCb">tBCb</div>
        <div class="tFB1 tMR10 tBCc">tBCc</div>
        <div class="tFB1 tMR10 tBCd">tBCd</div>
        <div class="tFB1 tMR10 tBCe">tBCe</div>
        <div class="tFB1       tBCf">tBCf</div>
    </div>
    ```

    <div class="tFBH tFBAS tFAC">
        <div class="tFB1 tMR10 tBC0 tFf">tBC0</div>
        <div class="tFB1 tMR10 tBC3 tFf">tBC3</div>
        <div class="tFB1 tMR10 tBC4 tFf">tBC4</div>
        <div class="tFB1 tMR10 tBC5">tBC5</div>
        <div class="tFB1 tMR10 tBC6">tBC6</div>
        <div class="tFB1 tMR10 tBC7">tBC7</div>
        <div class="tFB1 tMR10 tBC8">tBC8</div>
        <div class="tFB1 tMR10 tBC9">tBC9</div>
        <div class="tFB1 tMR10 tBCa">tBCa</div>
        <div class="tFB1 tMR10 tBCb">tBCb</div>
        <div class="tFB1 tMR10 tBCc">tBCc</div>
        <div class="tFB1 tMR10 tBCd">tBCd</div>
        <div class="tFB1 tMR10 tBCe">tBCe</div>
        <div class="tFB1       tBCf">tBCf</div>
    </div>

#### opacity:

* tOP{n}: 即`opacity`，设置透明度，`n`的可选值包括`0 10 30 50 80`，`tOP30`相当于`opacity:0.3`
*

    ```html
    <div class="tFBH tFBAS tFAC tFf">
        <div class="tFB1 tMR10 tBC0 tOP0 ">tBC0</div>
        <div class="tFB1 tMR10 tBC0 tOP10">tBC3</div>
        <div class="tFB1 tMR10 tBC0 tOP30">tBC4</div>
        <div class="tFB1 tMR10 tBC0 tOP50">tBC5</div>
        <div class="tFB1       tBC0 tOP80">tBC6</div>
    </div>
    ```

    <div class="tFBH tFBAS tFAC tFf">
        <div class="tFB1 tMR10 tBC0 tOP0 ">tBC0</div>
        <div class="tFB1 tMR10 tBC0 tOP10">tBC3</div>
        <div class="tFB1 tMR10 tBC0 tOP30">tBC4</div>
        <div class="tFB1 tMR10 tBC0 tOP50">tBC5</div>
        <div class="tFB1       tBC0 tOP80">tBC6</div>
    </div>

#### 3d speed up:

* t3D: 即`transform translateZ(0)`，开启3D加速，谨慎使用。

## TODO

* 针对`iPhone 6plus`的`font-size`优化