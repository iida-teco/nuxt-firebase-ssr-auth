import { getCookie, getUserFromToken } from '@/helpers'

export const strict = false

export const actions = {
  async nuxtServerInit({ dispatch, commit }, { app }) {
    const user = getUserFromToken(getCookie(app.$cookies, 'access_token'))
    if (user) {
      await commit('users/setUser', user)
      await commit('users/isAuthenticated', true)
    }
  }
}
