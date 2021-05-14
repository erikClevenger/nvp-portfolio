<template>
  <v-container fluid>
    <v-row align="center" justify="center" class="grey darken-4 page-banner">
      <ProjectHero :page="page" />
    </v-row>
    <v-row
      id="contentWrapper"
      ref="content"
      align="center"
      justify="center"
      class="px-4 py-8"
    >
      <!-- Slices block component -->
      <slices-block :slices="slices" />
    </v-row>
  </v-container>
</template>

<script>
// Imports for Prismic Slice components
import SlicesBlock from '~/components/SlicesBlock.vue'
import ProjectHero from '~/components/ProjectHero.vue'

export default {
  name: 'Page',
  components: {
    SlicesBlock,
    ProjectHero,
  },

  async asyncData({ $prismic, params, error }) {
    try {
      // Query to get post content
      const document = (await $prismic.api.getByUID('page', params.uid)).data

      return {
        // Set slices as variable
        slices: document.page_content,
        page: document,
      }
    } catch (e) {
      // Returns error page
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
  head() {
    return {
      title: "Erik Clevenger's Design Portfolio",
    }
  },
}
</script>
<style lang="scss">
.page-banner {
  height: 70vh;
}
</style>
