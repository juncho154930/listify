import Vue from 'vue'
import Router from 'vue-router'
import Amplify, * as AmplifyModules from 'aws-amplify'
import { AmplifyPlugin } from 'aws-amplify-vue'

import App from './App'
import router from './router'
import config from './aws-exports'

Amplify.configure(config)
Vue.use(Router)
Vue.use(AmplifyPlugin, AmplifyModules)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')