import Vue from 'vue'
import App from './App.vue'
import router from './router'
import registerComponents from '../packages'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Antd).use(Element).use(registerComponents)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
