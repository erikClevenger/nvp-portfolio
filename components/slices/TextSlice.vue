<template>
  <v-sheet class="pa-4" :class="sliceBackground" :width="sliceWidth">
    <v-row align="center" justify="center" class="px-6 py-4">
      <prismic-rich-text
        class="content-section"
        :class="'text-' + slice.slice_label"
        :field="slice.primary.rich_text"
        :htmlSerializer="anotherHtmlSerializer"
      />
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
  name: 'TextSlice',
  // eslint-disable-next-line vue/require-prop-types
  props: ['slice'],

  data() {
    return {
      anotherHtmlSerializer,
    }
  },
  computed: {
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
    sliceBackground() {
      return this.slice.slice_label.includes('dark')
        ? 'grey darken-4'
        : 'grey lighten-4'
    },
  },
}
</script>

<style lang="scss" scoped>
::v-deep .content-section .text-paragraph {
  break-after: always;
}
::v-deep .content-section h3 {
  -webkit-column-span: all;
  column-span: all;
  margin-bottom: 1.5rem;
  text-align: center;
}

::v-deep .content-section h4 {
  break-before: column;
}
::v-deep .text-1col-dark h3,
::v-deep .text-2col-dark h3,
::v-deep .text-1col-dark p,
::v-deep .text-2col-dark p,
::v-deep .text-1col-dark li,
::v-deep .text-2col-dark li {
  color: #f2f8fa;
}

.text-2col,
.text-2col-dark {
  -webkit-column-count: 2;
  -moz-column-count: 2;
  column-count: 2;
  -webkit-column-gap: 2.5rem;
  -moz-column-gap: 2.5rem;
  column-gap: 2.5rem;
}

@media (max-width: 767px) {
  .text-2col,
  .text-2col-dark {
    -webkit-column-count: 1;
    -moz-column-count: 1;
    column-count: 1;
    -webkit-column-gap: 2.5rem;
    -moz-column-gap: 2.5rem;
    column-gap: 2.5rem;
  }
}
</style>
