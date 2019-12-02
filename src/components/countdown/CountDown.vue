<template>
  <div id="count_down"
       v-html="dateHtml"></div>
</template>
<script>
import Worker from '../../common/js/cd.worker.js';
export default {
  name: 'CountDown',
  props: {
    // 倒计时结束时间戳
    endTime: {
      type: Number,
      default: 0
    },
    // 格式化
    format: {
      type: String,
      default: 'dd:hh:mm:ss:SS'
    },
    // 是否补零
    leftPad: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      dateHtml: '',
      cdTimer: 0,
      stopCdTimer: false,
      worker: null
    }
  },
  beforeDestroy() {
    this.worker = null;
  },
  methods: {
    countTime(end) {
      let leftTime = 0;
      this.worker = new Worker();
      // 将结束时间发送给worker
      this.worker.postMessage({
        end
      })
      // 接收worker发送来的消息
      this.worker.onmessage = e => {
        let leftTime, d, h, m, s, S;
        leftTime = e.data.leftTime;
        if (leftTime >= 0) {
          d = Math.floor(leftTime / 1000 / 60 / 60 / 24)
          h = Math.floor((leftTime / 1000 / 60 / 60) % 24);
          m = Math.floor((leftTime / 1000 / 60) % 60);
          s = Math.floor((leftTime / 1000) % 60);
          S = String(Math.floor(leftTime % 1000)).substr(1, 2);
          let o = { 'd+': d, 'h+': h, 'm+': m, 's+': s, 'S+': S };
          let formatCopy = this.format;
          for (const k in o) {
            if (new RegExp(`(${k})`).test(this.format)) {
              formatCopy = formatCopy.replace(RegExp.$1, this.leftPad ? this.leftPadFunc(o[k], 2) : o[k]);
            }
          }
          this.dateHtml = formatCopy;
        }
      }
    },
    // 补零
    leftPadFunc(num, len, ch = 0) {
      return (String(num)).padStart(len, ch);
    }
  },
  watch: {
    endTime: {
      handler(newTime) {
        this.worker = null;
        newTime = !!newTime ? newTime : Date.now();
        this.countTime(newTime);
      },
      immediate: true
    }
  }
}
</script>
<style lang="scss">
#count_down {
  color: #555;
}
</style>