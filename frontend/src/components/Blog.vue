<template>
  <div class="container  p-5">
      <div class="back p-3">
        <router-link to="/" class="btn btn-danger">Go Back</router-link>
      </div>
      <div class="title p-3">
        {{blog.title}}
        <i class="time bg-warning p-1">{{blog.createdAt}}</i>
      </div>
      <div class="description p-3">
          <p>{{blog.description}}</p>
      </div>
      <pre>
          <code>
            {{blog.codeone}}
          </code>
      </pre>
      <div class="brief p-3">
         <p>{{blog.brief}}</p>
      </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
 data() {
     return {
         id : this.$route.params.id
     }
 },
 computed : mapGetters(["blog"]),
 methods : {
   ...mapActions(["getBlog"])
 },
 created() {
   this.getBlog(this.id)
 }
}
</script>

<style scoped>
 .title {
     background-color: #f2f2f2;
 }
 .code {
   background-color: #f2f2f2;
   padding: 10px;
}
.time {
  position : absolute;
  right: 20%;
}
@media(max-width: 600px){
  .time {
    position: absolute;
    top : 20%;
    right: 10%;
  }
}
</style>
