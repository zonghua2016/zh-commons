<template>
  <i :class="className"></i>
</template>
<script>
export default {
  name: 'Icon',
  props: {
    iconClass: {
      type: String,
      default: ''
    }
  },
  computed:{
    className(){
      return `icon zhIcon zh-${this.iconClass}`
    }
  }
}
</script>
<style lang="scss" scope>
// @import url("https://at.alicdn.com/t/font_1507260_9e93x6sfrxv.css");
@import "../../common/fonts/iconfont.css";
i {
  color: #000;
}
</style>