<template>
  <!-- Template for page title. -->
  <div id="banner" ref="banner" class="px-4 px-md-16">
    <h1 :class="titleSize" class="white--text font-weight-bold">
      {{ $prismic.asText(page.project_title) }}
    </h1>
    <!-- Template for page tagline. -->
    <h2 :class="subtitleSize" class="primary--text">
      {{ $prismic.asText(page.project_headline) }}
    </h2>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ['page'],
  computed: {
    // eslint-disable-next-line vue/return-in-computed-property
    titleSize() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 'text-h3'
        case 'sm':
          return 'text-h3'
        case 'md':
          return 'text-h1'
        case 'lg':
          return 'text-h1'
        case 'xl':
          return 'text-h1'
      }
    },
    // eslint-disable-next-line vue/return-in-computed-property
    subtitleSize() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 'text-h4'
        case 'sm':
          return 'text-h4'
        case 'md':
          return 'text-h2'
        case 'lg':
          return 'text-h2'
        case 'xl':
          return 'text-h2'
      }
    },
  },
}
</script>

<style lang="scss" scoped></style>
