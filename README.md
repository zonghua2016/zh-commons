# zh-commons

> 个人公共vue组件库

#
  组件库中所有包含的组件都在 [src/components](https://github.com/zonghua2016/zh-commons/tree/master/src/components) 中 <br/>
  在第4节中也有说明
#

## 1. Install
  ```js
  npm install zh-commons
  ```
  or
  ```js
  yarn add zh-commons
  ```

## 2. Quick Start
1.引入 `zh-commons` 组件
```js
import { ZhLoading, Typing } from 'zh-commons';
```

2.在vue组件中使用
```html
<template>
  <div>
    <ZhLoading />
  </div>
</template>
```
## 3. Example

``` html
<ZhLoading :size="80" :cicleNum="4" :borderWidth="3" :colors="['#fb2', '#8c4', '#0a9', '#17b']" />
```
## 4. Components

- loading
- typing
- countUp
- Icon

## 5. 具体参数参考 [src/components](https://github.com/zonghua2016/zh-commons/tree/master/src/components) 下对应组件 README 文档
  前往 [git 仓库](https://github.com/zonghua2016/zh-commons.git)
