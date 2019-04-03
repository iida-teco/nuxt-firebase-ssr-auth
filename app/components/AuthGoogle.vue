<template lang='pug'>
  button(@click='signInGoogle') Google でログイン
</template>

<script>
import firebase from '@/plugins/firebase'
import 'firebase/auth'
import { setCookie } from '@/helpers'
import { mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions({
      isSignIn: 'auth/isSignIn'
    }),
    signInGoogle: async function() {
      await this.$store.dispatch('auth/signInGoogle').then(async () => {
        await firebase
          .auth()
          .currentUser.getIdToken(true)
          .then(token => {
            setCookie(this.$cookies, 'access_token', token)
          })
        await this.isSignIn().then(() => {
          console.log('sign in Google')
        })
      })
    }
  }
}
</script>
