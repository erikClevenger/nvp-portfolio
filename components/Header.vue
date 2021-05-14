TODO: get intersection observer set up to change color on scroll //
https://vuetifyjs.com/en/directives/intersect/#usage
<template>
  <v-app-bar ref="header" fixed elevateOnScroll color="grey darken-4">
    <nuxt-link to="/" class="logo">
      <v-img
        :src="require('~/assets/logo-fill.svg')"
        alt="Personal logo"
        :width="$vuetify.breakpoint.smAndDown ? '60' : '100'"
        height="64"
        contain
      />
    </nuxt-link>
    <v-spacer></v-spacer>
    <v-toolbar-title
      :class="$vuetify.breakpoint.smAndDown ? 'text-h5' : 'text-h4'"
      class="font-weight-bold"
    >
      <nuxt-link to="/">Erik Clevenger</nuxt-link>
    </v-toolbar-title>
  </v-app-bar>
</template>

<script>
export default {
  name: 'Header',
  computed: {
    // eslint-disable-next-line vue/return-in-computed-property
  },
}
</script>

<style lang="scss"></style>
