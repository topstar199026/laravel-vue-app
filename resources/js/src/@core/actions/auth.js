import * as apis from '@core/apis'

const setAuthData = async (res) => {
  console.log('auth res', res)
  const _v = {
    id: 24,
    fullName: 'Cleavland Hatherleigh',
    company: 'Flipopia PVT LTD',
    role: 'admin',
    username: 'chatherleighn',
    country: 'Brazil',
    contact: '(700) 783-7498',
    email: 'chatherleighn@washington.edu',
    currentPlan: 'standard',
    status: 'pending',
    avatar: 'avatar-2.png',
  }
  
  try {
    if(res.data.status) {
      localStorage.setItem('accessToken', res.data.data.token)
      localStorage.setItem('userData', JSON.stringify(_v))
      localStorage.setItem('userAbility', JSON.stringify([{action: "manage", subject: "all"}]))
    }else{
      localStorage.setItem('accessToken', null)
      localStorage.setItem('userData', null)
    }
  } catch (error) {
    
  }
}

export const loginBySocialAction = async (provider, values) => {
  try {
    const res = await apis.loginBySocialApi(provider, values)
    return res.data
  } catch (error) {
    return {
      status: false,
      msg: error,
    }
  }  
}

export const loginByEmailAction = async (values) => {
  try {
    const res = await apis.loginByEmailApi(values)
    await setAuthData(res)
    return res.data
  } catch (error) {
    return {
      status: false,
      msg: error,
    }
  }  
}

export const registerByEmailAction = async (values) => {
  try {
    const res = await apis.registerByEmailApi(values)
    return res.data
  } catch (error) {
    return {
      status: false,
      msg: error,
    }
  }  
}

export const registerBySocialAction = async (provider, values) => {
  try {
    const res = await apis.registerBySocialApi(provider, values)
    return res.data
  } catch (error) {
    return {
      status: false,
      msg: error,
    }
  }  
}


