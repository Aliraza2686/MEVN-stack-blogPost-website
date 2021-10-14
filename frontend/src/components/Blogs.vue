<template>
  <div class="container1 mt-2">
    <div class="loader" v-if="loader">
      <Loader />
    </div>
   <div class="cards">
         <div class="user" v-for="blog in blogs" :key="blog.id">
                <div class="card p-2">
                     <div class="body">
                        <p>language : <span class="text-danger">{{blog.language}}</span></p>
                    </div>
                     <div class="">
                            <h3> {{blog.title}}</h3>
                      </div>
      
                      <div class="desc text-muted">
                          {{blog.description.substr(0,100)}}...
                      </div>
                  <div class="info mt-3">
                     <router-link :to="{name : 'blog', params : { id : blog._id}}" class="btn btn-info btn-block btn-sm">Read Blog</router-link>
                  </div>
               </div>
         </div>
    </div>
  </div>
</template>

<script>
import Loader from './Loader.vue'
import { mapGetters, mapActions } from 'vuex'
export default {
components : {
 Loader
},
data() {
  return {
    loader : false
  }
},
computed : mapGetters(["blogs"]),
methods : {
        ...mapActions(["getBlogs"])
 },
created() {
        this.loader = true
        this.getBlogs()
        this.loader = false
 }
}
</script>

<style>
.cards {
  display:grid;
  grid-template-columns: 1fr 1fr ;
  grid-gap: 10px;
}
@media (max-width : 600px) {
    .cards {
    display:grid;
    grid-template-columns: 1fr;
    grid-gap: 10px;
 }
}
html {
  box-sizing: border-box;
}
*, *:before, *:after {
  box-sizing: inherit;
}

body {
  font: 1em/1.4 Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif;
  background-color: #fafafa;
}

img {
  max-width: 100%;
}

.cards {
  margin: 0 auto;
  max-width: 960px;
}

.card {
  background-color: #fff;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12);
}

.card header {
  padding: 10px;
  background-color: #0084AD;
    color: #fff;
}

.card header h2 {
  font-size: 1.4rem;
  font-weight: normal;
  margin: 0;
  padding: 0;
}

.card .body {
  padding: 10px;
  font-size: .9rem;
  color: #757575;
}
</style>