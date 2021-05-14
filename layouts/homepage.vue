<template>
  <v-app class="homepage">
    <!-- <Header /> -->
    <v-main>
      <Nuxt />
    </v-main>
  </v-app>
</template>
<script>
// import Header from '~/components/Header'
export default {
  name: 'Homepage',
  // components: {
  //   Header,
  // },

  // Called before rendering the layout (even for error page)
  async middleware({ store, $prismic }) {
    await store.dispatch('fetchMenu', $prismic)
  },
}
</script>

<style></style>
