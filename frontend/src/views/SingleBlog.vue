<template>
  <div class="mainn">
    <Header />
      <Blog />
  </div>
</template>

<script>
import Blog from '../components/Blog.vue'
import Header from '../components/Header.vue'
export default {
components : {
    Blog,
    Header
}
}
</script>

<style>

</style>