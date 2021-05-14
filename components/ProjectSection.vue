<template>
  <v-sheet
    ref="project"
    color="grey lighten-4"
    class="my-4 pa-4"
    elevation="3"
    rounded
    :width="projectWidth"
  >
    <v-row justify="center" align="center" class="px-2 py-8 project-content">
      <v-col cols="12" sm="4">
        <v-img
          :src="page.data.project_thumbnail.url"
          :aspectRatio="1 / 1"
          maxHeight="350"
          contain
        ></v-img>
      </v-col>
      <v-col cols="12" sm="8">
        <h1 :class="projectTitle" class="primary--text font-weight-bold">
          {{ $prismic.asText(page.data.project_title) }}
        </h1>
        <h2 :class="projectSubtitle" class="grey--text text--darken-2">
          {{ $prismic.asText(page.data.project_headline) }}
        </h2>
        <div>
          <p>{{ roles }}</p>
        </div>
        <prismic-link
          class="primary--text text-subtitle-1 text-uppercase"
          :field="page.data.project_link"
          >{{ $prismic.asText(page.data.link_label) }}</prismic-link
        >
      </v-col>
    </v-row>
  </v-sheet>
</template>

<script>
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ['page'],
  data() {
    return {
      observer: null,
    }
  },
  computed: {
    roles() {
      const rolesArr = this.page.data.roles
      return rolesArr.map((x) => x.text).join(' | ')
    },
    // eslint-disable-next-line vue/return-in-computed-property
    projectWidth() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return '100%'
        case 'sm':
          return '100%'
        case 'md':
          return '80%'
        case 'lg':
          return '80%'
        case 'xl':
          return '60%'
      }
    },
    // eslint-disable-next-line vue/return-in-computed-property
    projectTitle() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 'text-h4'
        case 'sm':
          return 'text-h4'
        case 'md':
          return 'text-h3'
        case 'lg':
          return 'text-h3'
        case 'xl':
          return 'text-h3'
      }
    },
    // eslint-disable-next-line vue/return-in-computed-property
    projectSubtitle() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 'text-h5'
        case 'sm':
          return 'text-h5'
        case 'md':
          return 'text-h4'
        case 'lg':
          return 'text-h4'
        case 'xl':
          return 'text-h4'
      }
    },
  },
  // beforeDestroy() {
  //   this.observer.disconnect()
  // },
  // mounted() {
  //   const project = this.$refs.project

  //   const observeOptions = {
  //     threshold: 1,
  //   }

  //   this.observer = new IntersectionObserver((entries, observer) => {
  //     entries.forEach((entry) => {
  //       if (!entry.isIntersecting) {
  //       } else {
  //         entry.target.classList.add('appear')
  //         observer.unobserve(entry.target)
  //       }
  //     })
  //   }, observeOptions)
  //   this.observer.observe(project)
  // },
}
</script>

<style lang="scss" scoped>
/* Observer transition styles */
.fade-in {
  opacity: 0;
  transition: opacity 250ms ease-in;
}
.fade-in.appear {
  opacity: 1;
}
</style>
