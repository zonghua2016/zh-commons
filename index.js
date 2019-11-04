import ZhLoading from './src/components/loading/ZhLoading'
import Typing from './src/components/typing/Typing'
import _Vue from 'vue'

const components = [ZhLoading, Typing]

const install = Vue => {
  if (install.installed) {
    return components.map(component => Vue.component(component.name, component))
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export {
  ZhLoading,
  Typing
};
