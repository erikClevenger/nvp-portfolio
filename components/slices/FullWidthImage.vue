<template>
  <v-sheet class="my-0 content-section" :width="imageWidth">
    <v-row align="center" justify="center">
      <picture>
        <source
          media="(max-width:
        376px)"
          :srcset="mobileSourceSet"
        />
        <source media="(max-width: 767px)" :srcset="tabletSourceSet" />
        <source media="(max-width: 1023px)" :srcset="smLaptopSourceSet" />
        <source media="(max-width: 1200px)" :srcset="laptopSourceSet" />
        <source media="(min-width: 1201px)" :srcset="desktopSourceSet" />
        <img :src="laptop" :alt="alt" />
      </picture>
    </v-row>
  </v-sheet>
</template>

<script>
export default {
  name: 'ImageCaptionSlice',
  // eslint-disable-next-line vue/require-prop-types
  props: ['slice'],
  data() {
    return {
      image: this.slice.primary,
      alt: this.slice.primary.xlarge.alt,
      mobile: this.slice.primary.xsmall.std.url,
      mobile2x: this.slice.primary.xsmall.url,
      tablet: this.slice.primary.small.std.url,
      tablet2x: this.slice.primary.small.url,
      smLaptop: this.slice.primary.medium.std.url,
      smLaptop2x: this.slice.primary.medium.url,
      laptop: this.slice.primary.large.std.url,
      laptop2x: this.slice.primary.large.url,
      desktop: this.slice.primary.xlarge.std.url,
      desktop2x: this.slice.primary.xlarge.url,
    }
  },
  computed: {
    mobileSourceSet() {
      const xsmallSources = `${this.mobile}, ${this.mobile2x} 2x`
      return xsmallSources
    },
    tabletSourceSet() {
      const tabletSources = `${this.tablet}, ${this.tablet2x} 2x`
      return tabletSources
    },
    smLaptopSourceSet() {
      const smLaptopSources = `${this.smLaptop}, ${this.smLaptop2x} 2x`
      return smLaptopSources
    },
    laptopSourceSet() {
      const laptopSources = `${this.laptop}, ${this.laptop2x} 2x`
      return laptopSources
    },
    desktopSourceSet() {
      const desktopSources = `${this.desktop}, ${this.desktop2x} 2x`
      return desktopSources
    },
    // eslint-disable-next-line vue/return-in-computed-property
    imageWidth() {
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
  },
}
</script>

<style lang="scss" scoped>
.content-section {
  overflow: hidden;
  img {
    height: auto;
    width: 100%;
  }
}
</style>
