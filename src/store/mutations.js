import * as RootMutationTypes from './mutation-types'
export default {
  [RootMutationTypes.SET_USER_TOKEN]: (state, payload) => {
    state.user = {
      ...state.user,
      token: payload
    }
  },
  [RootMutationTypes.SET_LOGIN_USER]: (state, payload) => {
    state.user.loggedIn = payload
  },
}
