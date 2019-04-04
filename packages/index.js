/**
 * @author monkeywang
 * Date: 17/11/9
 */
import SButton from './components/button/index.js';

const components = [
  SButton,
]

const install = function(Vue) {
  if (install.installed) return
  components.map(component => Vue.component(component.name, component))
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  SButton
}
