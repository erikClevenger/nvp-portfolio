<template>
  <v-sheet class="pa-4" :class="sliceBackground" :width="sliceWidth">
    <v-row align="center" justify="center" class="content-section pa-4">
      <h2 :class="[headingSize, textColor]" class="font-weight-bold">
        {{ $prismic.asText(slice.primary.section_title) }}
      </h2>
    </v-row>
  </v-sheet>
</template>

<script>
export default {
  name: 'SectionHeading',
  // eslint-disable-next-line vue/require-prop-types
  props: ['slice'],
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
    textColor() {
      if (this.slice.slice_label === 'light') {
        return 'grey--text text--darken-3'
      } else {
        return 'primary--text'
      }
    },
    // eslint-disable-next-line vue/return-in-computed-property
    headingSize() {
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
