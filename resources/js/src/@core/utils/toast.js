import Vue from 'vue'
import Toast from 'vue-toastification'

// Toast Notification Component Styles
import 'vue-toastification/dist/index.css'

Vue.use(Toast, {
  hideProgressBar: true,
  closeOnClick: false,
  closeButton: false,
  icon: false,
  timeout: 3000,
  transition: 'Vue-Toastification__fade',
})