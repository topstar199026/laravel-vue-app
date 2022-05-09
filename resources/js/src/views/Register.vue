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
          <p class="text-2xl font-weight-semibold text--primary mb-2">Adventure starts here 🚀</p>
          <p class="mb-2">Make your app management easy and fun!</p>
        </v-card-text>

        <!-- login form -->
        <v-card-text>
          <v-form ref="registerForm" @submit.prevent="handleFormSubmit">
            <v-text-field
              v-model="username"
              outlined
              label="Username"
              :error-messages="errorMessages.username"
              :rules="[validators.required, validators.alphaValidator]"
              placeholder="Username"
              hide-details
              class="mb-3"
            ></v-text-field>

            <v-text-field
              v-model="email"
              outlined
              :error-messages="errorMessages.email"
              :rules="[validators.required, validators.emailValidator]"
              label="Email"
              placeholder="john@example.com"
              hide-details
              class="mb-3"
            ></v-text-field>

            <v-text-field
              v-model="password"
              outlined
              :type="isPasswordVisible ? 'text' : 'password'"
              label="Password"
              :error-messages="errorMessages.password"                      
              placeholder="Password"
              :rules="[validators.required, validators.passwordValidator]"                      
              :append-icon="isPasswordVisible ? icons.mdiEyeOffOutline : icons.mdiEyeOutline"
              hide-details
              @click:append="isPasswordVisible = !isPasswordVisible"
            ></v-text-field>

            <v-checkbox hide-details class="mt-1">
              <template #label>
                <div class="d-flex align-center flex-wrap">
                  <span class="me-2">I agree to</span><a href="javascript:void(0)">privacy policy &amp; terms</a>
                </div>
              </template>
            </v-checkbox>

            <v-btn block color="primary" type="submit" class="mt-6"> Sign Up </v-btn>
          </v-form>
        </v-card-text>

        <!-- create new account  -->
        <v-card-text class="d-flex align-center justify-center flex-wrap mt-2">
          <span class="me-2"> Already have an account? </span>
          <router-link :to="{ name: 'auth-login' }"> Sign in instead </router-link>
        </v-card-text>

        <!-- divider -->
        <v-card-text class="d-flex align-center mt-2">
          <v-divider></v-divider>
          <span class="mx-5">or</span>
          <v-divider></v-divider>
        </v-card-text>

        <!-- social link -->
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
      height="190"
      :src="require(`@/assets/images/misc/mask-${$vuetify.theme.dark ? 'dark' : 'light'}.png`).default"
    />

    <!-- tree -->
    <v-img class="auth-tree" width="247" height="185" :src="require('@/assets/images/misc/tree.png').default"></v-img>

    <!-- tree  -->
    <v-img
      class="auth-tree-3"
      width="377"
      height="289"
      :src="require('@/assets/images/misc/tree-3.png').default"
    ></v-img>
  </div>
</template>

<script>
import Vue from 'vue'
// eslint-disable-next-line object-curly-newline
import { mdiFacebook, mdiTwitter, mdiGithub, mdiGoogle, mdiEyeOutline, mdiEyeOffOutline } from '@mdi/js'
// eslint-disable-next-line object-curly-newline
import { required, emailValidator, passwordValidator, alphaValidator } from '@core/utils/validation'
import { ref, getCurrentInstance } from '@vue/composition-api'
import axios from '@axios'
import { useRouter } from '@core/utils'
import themeConfig from '@themeConfig'

import VueSocialauth from 'vue-social-auth'

import * as actions from '@core/actions'

export default {
  setup() {
    // Template Refs
    const registerForm = ref(null)

    const vm = getCurrentInstance().proxy
    const { router } = useRouter()

    const isPasswordVisible = ref(false)
    const username = ref('johnDoe')
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
      const isFormValid = registerForm.value.validate()
      if (!isFormValid) return

      const values = {
        username: username.value, 
        email: email.value, 
        password: password.value
      }

      const res = await actions.registerByEmailAction(values)

      console.log('res', res)
      Vue.$toast(res.msg)
      if(res.status) {
        router.push('/login')
      }else{
      }

      /*
        1. Make HTTP request to get accessToken (Register the user & login) (User will be added to the database and new generated access token will be sent for loggin in)
        2. Store received token in localStorage for future use
        3. Make another HTTP request for getting user information
        4. On successful response of user information redirect to home page

        ? We have use promise chaining to get user data from access token
        ? Promise Chaining: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises#chaining
      */

      // axios
      //   .post('/auth/register', { username: username.value, email: email.value, password: password.value })
      //   .then(response => {
      //     const { accessToken } = response.data
      //     console.log('response', response)
      //     // ? Set access token in localStorage so axios interceptor can use it
      //     // Axios Interceptors: https://github.com/axios/axios#interceptors
      //     // localStorage.setItem('accessToken', accessToken)

      //     // return response
      //   })
      //   .then(() => {
      //     axios.get('/auth/me').then(response => {
      //       const { user } = response.data
      //       const { ability: userAbility } = user

      //       // Set user ability
      //       // ? https://casl.js.org/v5/en/guide/intro#update-rules
      //       vm.$ability.update(userAbility)

      //       // ? Set user's ability in localStorage for Access Control
      //       localStorage.setItem('userAbility', JSON.stringify(userAbility))

      //       // ? We will store `userAbility` in localStorage separate from userData
      //       // ? Hence, we are just removing it from user object
      //       delete user.ability

      //       // ? Set user's data in localStorage for UI/Other purpose
      //       localStorage.setItem('userData', JSON.stringify(user))

      //       // ? On success redirect to home
      //       router.push('/')
      //     })
      //   })
      //   .catch(error => {
      //     // TODO: Next Update - Show notification
      //     console.error('Oops, Unable to Register!')
      //     console.log('error :>> ', error.response)
      //     errorMessages.value = error.response.data.error
      //   })
    }

    return {
      isPasswordVisible,
      username,
      email,
      password,
      errorMessages,
      handleFormSubmit,
      socialLink,
      icons: {
        mdiEyeOutline,
        mdiEyeOffOutline,
      },
      validators: {
        required,
        emailValidator,
        passwordValidator,
        alphaValidator,
      },

      // themeConfig
      appName: themeConfig.app.name,
      appLogo: themeConfig.app.logo,

      // Template Refs
      registerForm,
    }
  },

  methods: {
    async AuthProvider(provider) {
      var self = this
      this.$auth.authenticate(provider).then(response =>{
          console.log('response', response);
          self.SocialRegister(provider,response)
      }).catch(err => {
          console.log({err:err})
      })

    },

    async SocialRegister(provider,response){
      const res = await actions.registerBySocialAction(provider, response)
      console.log('res', res)
      Vue.$toast(res.msg)
      if(res.status) {
        router.push('/login')
      }else{
      }
      
      // this.$http.post('/api/social/'+provider,response).then(response => {

      //     console.log(response.data)

      // }).catch(err => {
      //     console.log({err:err})
      // })
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@resources/sass/preset/pages/auth.scss';
</style>
