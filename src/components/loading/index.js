import ZhLoading from './src/components/ZhLoading'
import _Vue from 'vue'

ZhLoading.install = Vue => {
  if (!Vue) {
    window.Vue = Vue = _Vue
  }
  Vue.component(ZhLoading.name, ZhLoading)
}
export default ZhLoading;
