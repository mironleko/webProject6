<template>
  <div class="about-page">
    <h1>O nama</h1>
    <p>{{ aboutContent }}</p>
  </div>
</template>

<script>
export default {
  name: 'AboutPage',
  computed: {
    aboutContent() {
      return this.$route.query.content;
    }
  }
};
</script>

<style scoped>
</style>
