// import '@/@fake-db/db'
import { i18n } from '@/plugins/i18n'
import '@/plugins/vue-composition-api'
import '@resources/sass/styles/styles.scss'
import Vue from 'vue'
import App from './App.vue'
// import './plugins/acl'
import vuetify from './plugins/vuetify'
import router from './router'
import store from './store'

import VueSocialauth from 'vue-social-auth'

import Toast from 'vue-toastification'

// Toast Notification Component Styles
import 'vue-toastification/dist/index.css'

Vue.use(VueSocialauth, {
  providers: {
    facebook: {
        clientId: '474423187675149',
        client_secret: 'b1610a9798b0d6af14a2c3a0ba495836',
        redirectUri: 'http://localhost:8000/facebook/callback'
    }
  }
})

Vue.use(Toast, {
  // hideProgressBar: true,
  // closeOnClick: false,
  // closeButton: false,
  // icon: false,
  // timeout: 3000,
  // transition: 'Vue-Toastification__fade',
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  vuetify,
  render: h => h(App),
}).$mount('#app')
