export const state = () => ({
  user: null,
  isAuthenticated: false
})

export const mutations = {
  setUser: (state, user) => {
    state.user = user
  },
  unsetUser: state => {
    state.user = null
  },
  isAuthenticated: (state, value) => {
    state.isAuthenticated = value
  }
}

export const getters = {
  getUser: state => {
    return state.user
  },
  isAuthenticated: state => {
    return state.isAuthenticated
  }
}
