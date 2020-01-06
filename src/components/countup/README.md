# CountUp
> vue countup 数字递增组件（ [countup.js](https://github.com/inorganik/countUp.js) ）

## vue 组件库 zh-commons 地址
  [https://github.com/zonghua2016/zh-commons](https://github.com/zonghua2016/zh-commons)

## 1. Install
  ```js
  npm install zh-commons
  ```
  or
  ```js
  yarn add zh-commons
  ```

## 2. Quick Start
1.引入 `countup` 组件
```js
import { CountUp } from 'zh-commons';
```

2.在vue组件中使用
```html
<template>
  <div>
    <CountUp class="countup"
             :endVal="89757"
             @ready="ready"
             :options="{
               decimalPlaces: 3,
             }" />
             
    <button @click="pause">暂停</button>
    <button @click="reset">重置</button>
    <button @click="update">更新</button>
  </div>
</template>

<script>
import { CountUp } from 'zh-commons'
export default {
  data() {
    return {
      countUp: null
    }
  },
  methods: {
    ready(countUp) {
      this.countUp = countUp;
    },
    pause() {
      this.countUp.pauseResume()
    },
    reset() {
      this.countUp.reset()
    },
    update() {
      this.countUp.update(8899775577)
    }
  },
  components: {
    CountUp
  }
}
</script>
```

3. 参考参数

  |    参数名称                |  默认值 |    说明        |
  |-------------------------|:------:|---------------|
  |    id                     | count |     id，默认 count |
  |    endVal                 |  0    |     终止值      |
  |    delay                  |  0    |     延时，必须   |
  |    startVal               |  0    |     开始值      |
  |    decimalPlaces           |  0    |     小数点后位数 |
  |    duration               |  2s   |     过渡时间    |
  |    useGrouping            |  true |     是否使用千分位分隔符  |
  |    useEasing              |  true |     是否使用 ease 动画   |
  |    smartEasingThreshold   |  999  |     smooth easing for large numbers above this if useEasing (999)    |
  |    smartEasingAmount      |  333  |     amount to be eased for numbers above threshold (333)             |
  |    separator              |  ,    |     千分位符号（,）      |
  |    decimal                |  .    |     小数点符号（.）      |
  |    prefix                 |  ""   |     前置字符    |
  |    suffix                 |  ""   |     后置字符    |


4. 详细文档参考 countUp [官方文档](http://inorganik.github.io/countUp.js/) 和 [git 仓库](https://github.com/inorganik/countUp.js)