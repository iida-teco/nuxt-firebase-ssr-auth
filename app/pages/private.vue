<template lang='pug'>
  div private page
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  middleware: ['auth-user']
}
</script>
