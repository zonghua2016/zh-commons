<template>
  <div>
    <!-- <ZhLoading :size="80"
               :cicleNum="4"
               :borderWidth="3" />
    <Typing>asf顺丰到付sfs</Typing> -->
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
import ZhLoading from './components/loading/ZhLoading'
import Typing from './components/typing/Typing'
import CountUp from './components/countup/CountUp'
export default {
  data() {
    return {
      size: 260,
      borderWidth: 8,
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
      this.countUp.update(889988)
    }
  },
  components: {
    ZhLoading,
    Typing,
    CountUp
  }
}
</script>
<style lang="scss">
html,
body {
  // background: #fff !important;
}
.countup {
  margin: 100px auto;
  text-align: center;
  font-size: 30px;
  font-weight: bold;
}
</style>