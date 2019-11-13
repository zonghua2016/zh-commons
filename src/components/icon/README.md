# CountUp
> 个人字体图标组件（ 整合阿里图标库 [阿里图标库](https://www.iconfont.cn/manage/index?manage_type=myprojects&projectId=1507260) ）

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
import { Icon } from 'zh-commons';
```

2.在vue组件中使用
```html
<template>
  <div>
    <Icon iconClass="gengduo"/>
  </div>
</template>

<script>
import { Icon } from 'zh-commons'
export default {
  components: {
    Icon
  }
}
</script>
```

3. 参考参数

  |    参数名称                |  默认值 |    说明        |
  |-------------------------|:------:|---------------|
  |    iconClass             |   ''    |   图标类名      |

