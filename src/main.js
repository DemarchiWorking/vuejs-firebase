import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
//import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

Vue.use(VueResource)
//Vue.use(BootstrapVue)
//Vue.use(IconsPlugin)



////import VueRouter from 'vue-router'
////import BootstrapVue from 'bootstrap-vue'
//import axios from 'axios'
//import routerList from './routes'


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  components: { App },
  template: '<App/>'
}).$mount('#app')
