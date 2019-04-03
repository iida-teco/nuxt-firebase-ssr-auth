<template lang="pug">
  button.c-button(@click='signOut') サインアウト
</template>

<script>
import { removeCookie } from '@/helpers'
import { mapActions } from 'vuex'
export default {
  methods: {
    signOut: function() {
      this.$store.dispatch('auth/signOut').then(() => {
        console.log('sign out')
        removeCookie(this.$cookies, 'access_token')
        this.$router.replace({ path: '/' })
      })
    }
  }
}
</script>
