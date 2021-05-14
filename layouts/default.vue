<template>
  <v-app>
    <v-main>
      <Header />
      <Nuxt />
    </v-main>
  </v-app>
</template>
<script>
import Header from '~/components/Header'
export default {
  components: {
    Header,
  },

  // Called before rendering the layout (even for error page)
  async middleware({ store, $prismic }) {
    await store.dispatch('fetchMenu', $prismic)
  },
}
</script>
<style>
div[data-app='true'] {
  background: #fafafa url('~assets/logo.svg') !important;
}
</style>
