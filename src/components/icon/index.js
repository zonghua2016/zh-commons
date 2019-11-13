import Icon from './Icon'
import _Vue from 'vue'

Icon.install = Vue => {
  if (!Vue) {
    window.Vue = Vue = _Vue;
  }
  Vue.component(Icon.name, Icon)
}
export default Icon
