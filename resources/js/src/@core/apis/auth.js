import axios from '@axios'
import apiConfig from './apiConfig'

export const loginByEmailApi = async (values) => {  
  const res = await axios
    .post(apiConfig.loginByEmail, values)
  return res
}

export const loginBySocialApi = async (provider, values) => {  
  const res = await axios
    .post(apiConfig.loginBySocial + provider, values)
  return res
}

export const registerByEmailApi = async (values) => {  
  const res = await axios
    .post(apiConfig.registerByEmail, values)
  return res
}

export const registerBySocialApi = async (provider, values) => {  
  const res = await axios
    .post(apiConfig.registerBySocial + provider, values)
  return res
}
