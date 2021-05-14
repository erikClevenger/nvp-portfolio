<template>
  <v-col cols="12" class="pa-0">
    <!-- Slice section template -->
    <v-row
      v-for="(slice, index) in slices"
      :key="'slice-' + index"
      justify="center"
      class="ma-0"
    >
      <!-- Text slice component -->
      <template v-if="slice.slice_type === 'text_section'">
        <TextSlice :slice="slice" />
      </template>
      <!-- Quote slice component -->
      <template v-else-if="slice.slice_type === 'quote'">
        <QuoteSlice :slice="slice" />
      </template>
      <!-- Full Width Image slice component -->
      <template v-else-if="slice.slice_type === 'full_width_image'">
        <FullWidthImage :slice="slice" />
      </template>
      <!-- Image Gallery slice component -->
      <template v-else-if="slice.slice_type === 'image_gallery'">
        <ImageGallery :slice="slice" />
      </template>
      <!-- Image Highlight slice component -->
      <template v-else-if="slice.slice_type === 'image_highlight'">
        <ImageHighlight :slice="slice" />
      </template>
      <!-- Section Heading slice component -->
      <template v-else-if="slice.slice_type === 'section_heading'">
        <SectionHeading :slice="slice" />
      </template>
    </v-row>
  </v-col>
</template>

<script>
// Imports for all slices
const TextSlice = () => import('./slices/TextSlice.vue')
const QuoteSlice = () => import('./slices/QuoteSlice.vue')
const FullWidthImage = () => import('./slices/FullWidthImage.vue')
const ImageGallery = () => import('./slices/ImageGallery.vue')
const ImageHighlight = () => import('./slices/ImageHighlight.vue')
const SectionHeading = () => import('./slices/SectionHeading.vue')

export default {
  name: 'SlicesBlock',
  components: {
    TextSlice,
    QuoteSlice,
    FullWidthImage,
    ImageGallery,
    ImageHighlight,
    SectionHeading,
  },
  // eslint-disable-next-line vue/require-prop-types
  props: ['slices'],
}
</script>
