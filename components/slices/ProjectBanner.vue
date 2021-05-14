<template>
  <section class="highlight content-section">
    <div class="highlight-left">
      <div
        class="proj-image"
        :style="{
          backgroundImage: ' url(' + slice.primary.project_thumbnail.url + ')',
        }"
      ></div>
    </div>
    <div class="highlight-right">
      <h1 class="project-title">
        {{ $prismic.asText(slice.primary.title) }}
      </h1>
      <h2 class="project-subtitle">
        {{ $prismic.asText(slice.primary.headline) }}
      </h2>
      <div class="project-roles">
        <p>{{ roles }}</p>
      </div>
      <h3 class="project-link">
        <prismic-link :field="slice.primary.link">{{
          $prismic.asText(slice.primary.link_label)
        }}</prismic-link>
      </h3>
    </div>
  </section>
</template>

<script>
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ['slice'],
  computed: {
    roles() {
      const rolesArr = this.slice.primary.roles
      return rolesArr.map((x) => x.text).join(' | ')
      // const newArr = rolesArr.map((x) => x.text)
      // return newArr.join(' | ')
    },
  },
}
</script>

<style lang="scss" scoped>
.highlight {
  margin: 2rem auto;
  background: $white;
  display: flex;
  justify-content: center;
  align-content: center;
  height: 50vh;
  width: 70vw;
  padding: 2rem;
}
.highlight-right {
  height: 100%;
  width: 100%;
  padding: 0rem 2rem;
  display: flex;
  flex-direction: column;
}
.highlight-left {
  height: 100%;
  width: 50%;
  div {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-repeat: no-repeat;
  }
}
.project-title {
  font-family: $fira-sans;
  font-weight: $bold;
  font-size: $case-title;
  color: $text-black;
  width: 100%;
}
.project-subtitle {
  font-family: $fira-sans;
  font-weight: $regular;
  font-size: $case-subtitle;
  color: $primary;
  width: 100%;
}
.project-link {
  margin-top: auto;
  a {
    font-family: $fira-sans;
    font-weight: $regular;
    font-size: $case-link;
    color: $gray-75;
    text-decoration: none;
  }
  a:hover {
    color: $primary;
  }
}
.project-roles {
  margin: 1rem 0;
  p {
    font-family: $oxygen;
    color: $gray-50;
    text-transform: uppercase;
  }
}

@media (max-width: 767px) {
  .content-section {
    margin-bottom: 2rem;
  }

  .highlight-left .highlight-right {
    width: 100%;
  }
}

@media (max-width: 1024) {
  .highlight {
    width: 90vw;
  }
}
</style>
