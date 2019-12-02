import ZhLoading from './src/components/loading/ZhLoading'
import Typing from './src/components/typing/Typing'
import CountUp from './src/components/countup/CountUp'
import CountDown from './src/components/countdown/CountDown'
import _Vue from 'vue'

const components = [ZhLoading, Typing, CountUp, CountDown]

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
  Typing,
  CountUp,
  CountDown
};
