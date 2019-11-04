import CountUp from './CountUp'
import _Vue from 'vue'

CountUp.install = Vue => {
  if (!Vue) {
    window.Vue = Vue = _Vue;
  }
  Vue.component(CountUp.name, CountUp)
}
export default CountUp
