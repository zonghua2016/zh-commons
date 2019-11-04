<template>
  <div>
    <!-- <ZhLoading :size="80"
               :cicleNum="4"
               :borderWidth="3" />
    <Typing>asf顺丰到付sfs</Typing> -->
    <CountUp class="countup"
             :endVal="8967"
             @countUpComplete="complete"
             :updateNum="9999.99"
             :countUpOptions="{
               useGrouping:true, 
               duration:.5, 
               decimalPlaces:3,
               separator:'*'
              }" />
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
      borderWidth: 8
    }
  },
  methods: {
    complete: function () {
      console.log('数字');
    },
    updateComplete() {
      console.log('更细');

    },
    update: function () {
      return function (num, dalay) {

      }
    },
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