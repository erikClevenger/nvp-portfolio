<template>
  <v-sheet :color="sliceBackground" :width="quoteWidth">
    <v-row
      align="center"
      justify="center"
      class="content-section quote ma-4"
      :class="[slice.slice_label]"
    >
      <blockquote :class="[quoteSize, textColor]" class="font-family-body">
        {{ $prismic.asText(slice.primary.quote_text) }}
      </blockquote>
    </v-row>
  </v-sheet>
</template>

<script>
export default {
  name: 'QuoteSlice',
  // eslint-disable-next-line vue/require-prop-types
  props: ['slice'],
  computed: {
    // eslint-disable-next-line vue/return-in-computed-property
    quoteWidth() {
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
    quoteSize() {
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
    textColor() {
      return this.slice.slice_label.includes('dark')
        ? 'primary--text'
        : 'grey--text text--darken-3'
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
.light_quote {
  blockquote {
    &:before {
      color: #b2ebf2;
    }
    &:after {
      color: #b2ebf2;
    }
  }
}
.dark_quote {
  blockquote {
    &:before {
      color: #424242;
    }
    &:after {
      color: #424242;
    }
  }
}
.quote blockquote {
  position: relative;
  font-size: 2.25rem;
  font-style: italic;
  font-weight: normal;
  letter-spacing: 1.14;
  line-height: 1.5em;
  quotes: '“' '”' '‘' '’';
  text-align: center;
  z-index: 1;
  &:before {
    content: open-quote;
    font-family: 'Fira Sans', sans-serif;
    font-size: 8rem;
    font-weight: 700;
    font-style: normal;
    line-height: 0.1rem;
    display: inline-block;
    position: relative;
    transform: translate3d(1.75rem, 4.125rem, 0);
    z-index: -1;
  }
  &:after {
    content: open-quote;
    font-family: 'Fira Sans', sans-serif;
    font-size: 8rem;
    font-weight: 700;
    font-style: normal;
    line-height: 0.1rem;
    content: close-quote;
    display: inline-block;
    position: relative;
    transform: translate3d(-1.5rem, 4.125rem, 0);
    z-index: -1;
  }
}
</style>
