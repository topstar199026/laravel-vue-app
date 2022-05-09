<template>
  <div class="auth-wrapper auth-v1">
    <div class="auth-inner">
      <v-card class="auth-card">
        <!-- logo -->
        <v-card-title class="d-flex align-center justify-center py-7">
          <router-link to="/" class="d-flex align-center">
            <v-img :src="appLogo" max-height="30px" max-width="30px" alt="logo" contain class="me-3"></v-img>

            <h2 class="text-2xl font-weight-semibold">
              {{ appName }}
            </h2>
          </router-link>
        </v-card-title>

        <!-- title -->
        <v-card-text>
          <p class="text-2xl font-weight-semibold text--primary mb-2">Welcome! 👋🏻</p>
          <p class="mb-2">Please sign-in to your account and start the adventure</p>
        </v-card-text>

        <!-- login form -->
        <v-card-text>
          <v-form ref="loginForm" @submit.prevent="handleFormSubmit">
            <v-text-field
              v-model="email"
              outlined
              label="Email"
              placeholder="Email"
              :error-messages="errorMessages.email"
              :rules="[validators.required, validators.emailValidator]"
              hide-details="auto"              
              class="mb-3"
            ></v-text-field>

            <v-text-field
              v-model="password"
              outlined
              :type="isPasswordVisible ? 'text' : 'password'"
              label="Password"
              :error-messages="errorMessages.password"
              placeholder="Password"
              :append-icon="isPasswordVisible ? icons.mdiEyeOffOutline : icons.mdiEyeOutline"
              :rules="[validators.required]"
              hide-details
              @click:append="isPasswordVisible = !isPasswordVisible"
            ></v-text-field>

            <div class="d-flex align-center justify-space-between flex-wrap">
              <v-checkbox label="Remember Me" hide-details class="me-3 mt-1"> </v-checkbox>

              <!-- forgot link -->
              <router-link :to="{ name: 'auth-forgot-password' }" class="ms-3"> Forgot Password? </router-link>
            </div>

            <v-btn block color="primary" type="submit" class="mt-6"> Login </v-btn>
          </v-form>
        </v-card-text>

        <!-- create new account  -->
        <v-card-text class="d-flex align-center justify-center flex-wrap mt-2">
          <span class="me-2"> New on our platform? </span>
          <router-link :to="{ name: 'auth-register' }"> Create an account </router-link>
        </v-card-text>

        <!-- divider -->
        <v-card-text class="d-flex align-center mt-2">
          <v-divider></v-divider>
          <span class="mx-5">or</span>
          <v-divider></v-divider>
        </v-card-text>

        <!-- social links -->
        <v-card-actions class="d-flex justify-center">
          <v-btn v-for="link in socialLink" :key="link.icon" icon class="ms-1" @click="AuthProvider(link.provider)">
            <v-icon :color="$vuetify.theme.dark ? link.colorInDark : link.color">
              {{ link.icon }}
            </v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>

    <!-- background triangle shape  -->
    <img
      class="auth-mask-bg"
      height="173"
      :src="require(`@/assets/images/misc/water-waves-${$vuetify.theme.dark ? 'dark' : 'light'}.png`).default"
    />

    <!-- tree -->
    <v-img class="auth-tree" :src="require('@/assets/images/misc/boat-2.svg').default"></v-img>

    <!-- tree  -->
    <v-img
      class="auth-tree-3"
      :src="require('@/assets/images/misc/boat-1.svg').default"
    ></v-img>
  </div>
</template>

<script>
import Vue from 'vue'
// eslint-disable-next-line object-curly-newline
import { mdiFacebook, mdiTwitter, mdiGithub, mdiGoogle, mdiEyeOutline, mdiEyeOffOutline } from '@mdi/js'
import { ref, getCurrentInstance } from '@vue/composition-api'
import { required, emailValidator } from '@core/utils/validation'
import axios from '@axios'
import { useRouter } from '@core/utils'
import themeConfig from '@themeConfig'

import VueSocialauth from 'vue-social-auth'

import * as actions from '@core/actions'

export default {
  setup() {
    const loginForm = ref(null)

    const vm = getCurrentInstance().proxy
    const { router } = useRouter()

    const isPasswordVisible = ref(false)
    const email = ref('john@example.com')
    const password = ref('john@MATERIO#123')
    const errorMessages = ref([])
    const socialLink = [
      {
        icon: mdiFacebook,
        color: '#4267b2',
        colorInDark: '#4267b2',
        provider: 'facebook',
      },
      {
        icon: mdiTwitter,
        color: '#1da1f2',
        colorInDark: '#1da1f2',
        provider: 'twitter',
      },
      {
        icon: mdiGithub,
        color: '#272727',
        colorInDark: '#fff',
        provider: 'github',
      },
      {
        icon: mdiGoogle,
        color: '#db4437',
        colorInDark: '#db4437',
        provider: 'google',
      },
    ]

    const handleFormSubmit = async () => {
      const isFormValid = loginForm.value.validate()

      if (!isFormValid) return

      const values = {
        email: email.value, 
        password: password.value
      }

      const res = await actions.loginByEmailAction(values)

      console.log('res', res)
      Vue.$toast(res.msg)
      if(res.status)
        setTimeout(() => {
          router.push('/')
        }, 3000)
      /*
        1. Make HTTP request to get accessToken
        2. Store received token in localStorage for future use
        3. Make another HTTP request for getting user information
        4. On successful response of user information redirect to home page

        ? We have use promise chaining to get user data from access token
        ? Promise Chaining: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises#chaining
      */

      // axios
      //   .post('/auth/login', { email: email.value, password: password.value })
      //   .then(response => {
      //     const { accessToken } = response.data

      //     // ? Set access token in localStorage so axios interceptor can use it
      //     // Axios Interceptors: https://github.com/axios/axios#interceptors
      //     localStorage.setItem('accessToken', accessToken)

      //     return response
      //   })
      //   .then(() => {
      //     axios.get('/auth/me').then(response => {
      //       const { user } = response.data
      //       const { ability: userAbility } = user

      //       // Set user ability
      //       // ? https://casl.js.org/v5/en/guide/intro#update-rules
      //       vm.$ability.update(userAbility)

      //       // Set user's ability in localStorage for Access Control
      //       localStorage.setItem('userAbility', JSON.stringify(userAbility))

      //       // We will store `userAbility` in localStorage separate from userData
      //       // Hence, we are just removing it from user object
      //       delete user.ability

      //       // Set user's data in localStorage for UI/Other purpose
      //       localStorage.setItem('userData', JSON.stringify(user))

      //       // On success redirect to home
      //       router.push('/')
      //     })
      //   })
      //   .catch(error => {
      //     // TODO: Next Update - Show notification
      //     console.error('Oops, Unable to login!')
      //     console.log('error :>> ', error.response)
      //     errorMessages.value = error.response.data.error
      //   })
    }

    return {
      handleFormSubmit,

      isPasswordVisible,
      email,
      password,
      socialLink,
      errorMessages,
      socialLink,

      validators: {
        required,
        emailValidator,
      },

      // themeConfig
      appName: themeConfig.app.name,
      appLogo: themeConfig.app.logo,

      icons: {
        mdiEyeOutline,
        mdiEyeOffOutline,
      },

      // Template Refs
      loginForm,
    }
  },
  methods: {
    async AuthProvider(provider) {
      var self = this
      this.$auth.authenticate(provider).then(response =>{
          console.log('response', response);
          self.SocialLogin(provider,response)
      }).catch(err => {
          console.log({err:err})
      })

    },

    async SocialLogin(provider,response){
      const res = await actions.loginBySocialAction(provider, response)
      Vue.$toast(res.msg)
      if(res.status)
        setTimeout(() => {
          router.push('/ui/typography')
        }, 3000)
        
      // this.$http.post('/api/social/'+provider,response).then(response => {

      //     console.log(response.data)

      // }).catch(err => {
      //     console.log({err:err})
      // })
    },
  },
}
</script>

<style lang="scss">
@import '@resources/sass/preset/pages/auth.scss';
</style>
