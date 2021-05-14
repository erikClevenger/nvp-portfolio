<template>
  <v-container fluid>
    <!-- Banner component -->
    <v-row
      align="center"
      justify="center"
      class="grey darken-4 homepage-banner"
    >
      <HomepageBanner :banner="banner" />
    </v-row>
    <v-row
      id="contentWrapper"
      ref="content"
      align="center"
      justify="center"
      class="px-4 py-2"
    >
      <ProjectSection v-for="page in pages" :key="page.id" :page="page" />
      <!-- Slices block component -->
      <!-- <SlicesBlock :slices="slices" /> -->
    </v-row>
  </v-container>
</template>

<script>
// Imports for all components
import HomepageBanner from '~/components/HomepageBanner.vue'
// import SlicesBlock from '~/components/SlicesBlock.vue'
import ProjectSection from '~/components/ProjectSection'

export default {
  name: 'Home',
  // layout: 'homepage',
  components: {
    HomepageBanner,
    // SlicesBlock,
    ProjectSection,
  },
  async asyncData({ $prismic, error, params }) {
    try {
      // Query to get the home page content
      const homepage = (await $prismic.api.getSingle('homepage')).data

      const document = await $prismic.api.query(
        $prismic.predicates.at('document.type', 'page')
      )

      return {
        // Page content
        banner: homepage.homepage_banner[0],
        // Set slices as variable
        slices: homepage.page_content,
        pages: document.results,
      }
    } catch (e) {
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
.homepage-banner {
  height: 70vh;
}
</style>
