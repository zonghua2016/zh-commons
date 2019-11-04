# zh-loading
> vue typing 打字组件

## 1. Install
  ```js
  npm install zh-commons
  ```
  or
  ```js
  yarn add zh-commons
  ```

## 2. Quick Start
1.引入 `typing` 组件
```js
import { Typing } from 'typing';
```

2.在vue组件中使用
```html
<template>
  <div>
    <Typing />
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
<Typing :time="1000">文本测试content text！</Typing>
```

or

``` html
<Typing>
  文本测试content test
</Typing>
```

or

``` html
<Typing>
  <div>
    <h2>
      <p>
        <span>文本测试content test</span>
      </p>
    </h2>
  </div>
</Typing>
```