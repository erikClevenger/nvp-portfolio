<template>
  <v-sheet :color="sliceBackground" :width="sliceWidth" class="pa-4">
    <v-row align="center" justify="center" class="content-section">
      <v-col
        cols="12"
        sm="4"
        :orderSm="slice.slice_label.includes('right') ? 'last' : 'first'"
        class="highlight-img"
      >
        <v-img
          :src="slice.primary.featured_image.url"
          :aspectRatio="1 / 1"
          maxHeight="350"
          contain
        ></v-img>
      </v-col>
      <v-col cols="12" sm="8" class="highlight-text">
        <h2 :class="highlightTitleSize" class="font-weight-bold primary--text">
          {{ $prismic.asText(slice.primary.title) }}
        </h2>
        <h3
          :class="highlightSubtitleSize"
          class="primary--text font-weight-light"
        >
          {{ $prismic.asText(slice.primary.headline) }}
        </h3>
        <prismic-rich-text
          :class="highlightDesc"
          :field="slice.primary.description"
          :htmlSerializer="anotherHtmlSerializer"
        />
        <h4 class="highlight-link">
          <prismic-link
            class="primary--text text-subtitle-1 text-uppercase"
            :field="slice.primary.link"
            >{{ $prismic.asText(slice.primary.link_label) }}</prismic-link
          >
        </h4>
      </v-col>
    </v-row>
  </v-sheet>
</template>

<script>
import prismicDOM from 'prismic-dom'

const Elements = prismicDOM.RichText.Elements

const anotherHtmlSerializer = function (type, element, content, children) {
  if (type === Elements.paragraph) {
    return `<p class="text-paragraph">${children.join('')}</p>`
  }
  return null
}
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ['slice'],
  data() {
    return {
      anotherHtmlSerializer,
    }
  },
  computed: {
    sliceBackground() {
      return this.slice.slice_label.includes('dark')
        ? 'grey darken-4'
        : 'grey lighten-4'
    },
    // eslint-disable-next-line vue/return-in-computed-property
    sliceWidth() {
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
    highlightTitleSize() {
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
    highlightSubtitleSize() {
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
    highlightDesc() {
      return this.slice.slice_label.includes('dark') ? 'dark-desc' : ''
    },
  },
}
</script>

<style lang="scss" scoped>
::v-deep .dark-desc .text-paragraph {
  color: #f2f8fa;
}
</style>
