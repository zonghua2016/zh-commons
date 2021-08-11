<template>
  <div class="typing"
       ref="content">
    <slot />
  </div>
</template>
<script>
export default {
  name: 'Typing',
  props: {
    time: {
      type: Number,
      default: 300
    },
    typeContent: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      content: ''
    }
  },
  mounted() {
    let slot = this.$slots.default;
    // 获取打印文本
    this.findSlotContent(slot);
    this.typeContent && (this.content = this.typeContent);
    
    let typing = this.$refs.content;
    let typingArr = this.content.split('');
    typing.textContent = '';

    for (let i = 0; i < typingArr.length; i++) {
      setTimeout((function (i) {
        return function () {
          typing.textContent += typingArr[i];
        }
      })(i), i * this.time)
    }
  },
  methods: {
    findSlotContent: function (vnode) {
      try {
        if (vnode[0].tag !== undefined) {
          this.findSlotContent(vnode[0].children)
        } else {
          this.content = vnode[0].text;
        }
      } catch (error) {
        console.error('Typing error: 请检查是否填充打印文本！')
        console.error(error);
      }
    }
  }
}
</script>
<style lang="scss" soped>
.typing {
  display: inline-block;
  width: auto;
  height: auto;
  border-right: 0.05rem solid;
  animation: caret 1s steps(1) infinite;
  overflow: hidden;
}
@keyframes caret {
  50% {
    border-color: transparent;
  }
}
</style>