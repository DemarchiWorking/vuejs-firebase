import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueRouter from 'vue-router'
import FirebaseVue from './firebase'

import {routes} from '../services/routes'

Vue.use(VueResource)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueRouter)
Vue.use(FirebaseVue)

const router = new VueRouter({routes})




////import VueRouter from 'vue-router'* {}
////import BootstrapVue from 'bootstrap-vue'
//import axios from 'axios'
//import routerList from './routes'


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  components: { App },
  router,
  template: '<App/>'
}).$mount('#app')
