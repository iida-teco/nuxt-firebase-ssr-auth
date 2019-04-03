import firebase from '@/plugins/firebase'
import 'firebase/auth'

// setting provider
const googleProvider = new firebase.auth.GoogleAuthProvider()

export const actions = {
  // common
  isSignIn: ({ commit }) => {
    return new Promise((resolve, reject) => {
      firebase.auth().onAuthStateChanged(async user => {
        if (user) {
          await commit('users/setUser', user, { root: true })
          await commit('users/isAuthenticated', true, { root: true })
        }
        resolve(user || false)
      })
    })
  },
  signOut: ({ commit }) => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        commit('users/unsetUser', '', { root: true })
        commit('users/isAuthenticated', false, { root: true })
      })
      .catch(error => {
        console.log(error)
      })
  },

  // Google
  signInGoogle: async () => {
    await firebase
      .auth()
      .signInWithPopup(googleProvider)
      .catch(error => {
        console.log(error)
      })
  }
}
