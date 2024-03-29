import Vue from 'vue'
import App from './App.vue'

import router from '../src/routes/index'

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
