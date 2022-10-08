import cookies from 'vue-cookies'
import * as RootActionTypes from './action-types'
import * as RootMutationTypes from './mutation-types'
import AuthService from '@/services/AuthService'
export default {
  [RootActionTypes.REQUEST_AUTH]: async ({ commit }, user) => {
    try {
      const responseAuth = await new AuthService().auth(user)
      const { data } = responseAuth
      if (data.access_token) {
        window.localStorage.setItem('access_token', data.access_token)
        cookies.set('refresh_token', data.refresh_token)
        commit(RootMutationTypes.SET_USER_TOKEN, data.access_token)
        window.localStorage.setItem('userExist', true)
        commit(RootMutationTypes.SET_LOGIN_USER, true)


        return data
      } else {
        return data
      }
    } catch (e) {
      window.localStorage.removeItem('access_token')

      return { error: 'Connection error' }
    }
  },

  [RootActionTypes.REQUEST_LOGOUT]: async ({ rootGetters, commit }) => {
    const access = rootGetters.GET_TOKEN
    if (access) {
      await new AuthService(access).logout({})
      cookies.remove('refresh_token')
      window.localStorage.clear()
      commit(RootMutationTypes.LOGOUT)
      window.location.reload()
    }
  },

  async [RootActionTypes.REQUEST_REFRESH_TOKEN]({ commit }) {
    const refreshToken = () => cookies.get('refresh_token')
    const response = await new AuthService(refreshToken()).refresh()
    const { data } = response
    cookies.set('refresh_token', data.refresh_token)
    window.localStorage.setItem('access_token', data.access_token)
    commit(RootMutationTypes.SET_USER_TOKEN, data.access_token)
  },

}
