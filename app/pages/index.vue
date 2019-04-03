<template lang='pug'>
  section.container
    div
      logo
      h1.title Nuxt Firebase SSR Auth
      template(v-if='isAuthenticated')
        div
          nuxt-link(to='private') private page
        div
          sign-out
      template(v-if='!isAuthenticated')
        auth-google
</template>

<script>
import Logo from '@/components/Logo.vue'
import AuthGoogle from '@/components/AuthGoogle.vue'
import SignOut from '@/components/SignOut.vue'
import { mapGetters } from 'vuex'
export default {
  components: {
    Logo,
    AuthGoogle,
    SignOut
  },
  computed: {
    ...mapGetters({
      isAuthenticated: 'users/isAuthenticated'
    })
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
</style>
