<template>
<div>

<div class="text-center">
</div>

        <div class="container ">
         
        <h3 class="text-muted text-center">Blogs</h3>
       <table class="table table-striped table-dark">
  <thead>
    <tr>
  
      <th scope="col">Title</th>
      <th scope="col">Language</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody v-for="blog in blogs" :key="blog._id">
    <tr>
      <td>{{blog.title}}</td>
        <td>{{blog.language}}</td>
      <td><button class="btn btn-danger btn-sm" @click="deleteBlog(blog._id)">del</button> 
        <router-link :to="{name : 'updBlog', params : { id :blog._id}}" class="btn btn-warning btn-sm mx-2">Update</router-link>
      </td>
    </tr>
   
  </tbody>
</table>
      </div>
</div>     
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  data() {
   return {
     showModel : false,
     title : '',
     description : '',
     language : '',
     codeone : '',
     codetwo : '',
     codethree : '',
     brief : ''
   }
},  
computed : mapGetters(["blogs"]),
methods : {
      ...mapActions(["getBlogs", "delBlog"]),
      deleteBlog(id) {
          this.delBlog(id)
      }
  },
created() {
      this.getBlogs()
  }
}
</script>

<style>

</style>