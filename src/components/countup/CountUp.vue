<template>
  <div id="countup"></div>
</template>

<script>
import { CountUp } from 'countup.js'
export default {
  name: 'CountUp',
  props: {
    // 最终数值
    endVal: {
      type: Number,
      default: 0
    },
    // 更新数值
    updateNum: {
      type: Number,
      default: 0
    },
    // 更新延时
    updateDelay: {
      type: Number,
      default: 1
    },
    // 默认参数
    countUpOptions: {
      type: Object,
      default: function () {
        return {
          startVal: 0,
          // 小数点后位数
          decimalPlaces: 0,
          // 过度时长 2s
          duration: 2,
          // 是否使用千分位分隔符
          useGrouping: true,
          // 是否使用 ease 动画
          useEasing: true,
          // smooth easing for large numbers above this if useEasing (999)
          smartEasingThreshold: 999,
          // amount to be eased for numbers above threshold (333)
          smartEasingAmount: 333,
          // 千分位符号（,）
          separator: ",",
          // 小数点符号（.）
          decimal: ".",
          // 前置数字
          prefix: "",
          // 后置数字
          suffix: "",
          // easingFn: easing function for animation (easeOutExpo)
          // easingFn: {
          // },
          // numeral glyph substitution
          // 格式化后数字样式，默认阿拉伯数字
          // 波斯语 "['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹']"
          // 伊斯特恩阿拉伯语 "['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩']"
          numberals: ""
        }
      }
    }
  },
  data() {
    return {
      countUp: null,
      options: {}
    }
  },
  mounted() {
    // 合并参数
    Object.assign(this.options, this.countUpOptions)
    // 确保dom加载完毕后 countUp 可用
    this.$nextTick(() => {
      setTimeout(() => {
        this.countUp = new CountUp('countup', this.endVal, this.options);
        if (!this.countUp.error) {
          this.countUp.start(this.countUpComplete);
          // 执行更新函数
          !!this.updateNum && this.update();
        } else {
          console.error(this.countUp.error);
        }
      }, 10)
    })
  },
  methods: {
    // 完成后回调函数
    countUpComplete: function () {
      this.$emit('countUpComplete')
    },
    update() {
      setTimeout(() => {
        this.countUp.update(this.updateNum)
      }, (this.options.duration + this.updateDelay) * 1000)
    }
  }
}
</script>