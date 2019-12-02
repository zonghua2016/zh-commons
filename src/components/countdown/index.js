import Countdown from './Countdown'
import _Vue from 'vue'

Countdown.install = Vue => {
  if (!Vue) {
    window.Vue = Vue => _Vue;
  }
  Vue.component(Countdown.name, Countdown)
}
export default Countdown
