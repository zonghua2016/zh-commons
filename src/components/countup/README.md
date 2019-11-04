# CountUp
> vue countup 数字递增组件（ countup.js ）

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
    <CountUp />
  </div>
</template>
```

3. 参考参数

  |  参数名称  | 默认值 |      说明     |
  |:---------:|:-----:|---------------|
  |    time   |  300  |     动画时长    |
  |typeContent|  `''` | 1、如果传入该参数，则使用该参数；<br/>2、如果不添加该参数，使用 `slot` 内最后一个 dom 元素文本内容； |

## 3. Example


``` html
<CountUp :time="1000" />
```
