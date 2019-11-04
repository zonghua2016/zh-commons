import Typing from './Typing'
import _Vue from 'vue'

Typing.install = Vue => {
  if (!Vue) {
    window.Vue = Vue = _Vue;
  }
  Vue.component(Typing.name, Typing)
}
export default Typing
