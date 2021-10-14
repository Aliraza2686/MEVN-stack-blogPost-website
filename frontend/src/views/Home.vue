<template>
  <div class="main">
    <div class="header">
      <Header />
    </div>
    <div class="filter">
      <FilterBlogs />
    </div>
    <div class="container">
     <Blogs />
    </div>
  </div>
 
</template>

<script>
import Header from '../components/Header.vue'
import Blogs from '../components/Blogs.vue'
import FilterBlogs from '../components/FilterBlogs.vue'
export default {
 components : {
   Header,
   Blogs,
   FilterBlogs
 }
}
</script>
<style scoped>
</style>