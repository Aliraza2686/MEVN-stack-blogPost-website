<template>
  <div class="main">
    <div class="display">
      
        <!-- small modal -->

   <div class="container">
   <router-link to="/" class="mx-2"><span class="text-warning"> back </span></router-link>
  <button type="button" class="btn btn-info btn-sm mt-3" data-toggle="modal" data-target="#form">
   Add Blog +
  </button>  
</div>

<div class="modal fade" id="form" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header border-bottom-0">
        <h5 class="modal-title" id="exampleModalLabel">Add Blog</h5>
        <font-awesome-icon :icon="['fas', 'phone']" />
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <form @submit="addBlog">
        <div class="modal-body">
          <div class="form-group">
            <label >Title</label>
            <input type="text" class="form-control"  aria-describedby="emailHelp" placeholder="Enter title" v-model="title">
            <small id="emailHelp" class="form-text text-muted">Your information is safe with us.</small>
          </div>
          <div class="form-group">
            <label>language</label>
            <select class="form-control" v-model="language">
              <option value="javaScript">JavaScript</option>
              <option value="vue js">vue js</option>
              <option value="node js">Node jS</option>
              <option value="react js">React JS</option>
              <option value="mongodb">MongoDB</option>
              <option value="html">HTML</option>
              <option value="css">CSS</option>
            </select>
          </div>
          <div class="form-group">
            <label >Description</label>
            <textarea  cols="30" rows="1" class="form-control" v-model="description"></textarea>
          </div>
           <div class="form-group">
            <label >Code One</label>
            <textarea  cols="30" rows="1" class="form-control" v-model="codeone"></textarea>
          </div>
          <div class="form-group">
            <label >Code Two</label>
            <textarea  cols="30" rows="1" class="form-control" v-model="codetwo"></textarea>
          </div><div class="form-group">
            <label >Code Three</label>
            <textarea  cols="30" rows="1" class="form-control" v-model="codethree"></textarea>
          </div>
          <div class="form-group">
            <label >Brief</label>
            <textarea  cols="30" rows="1" class="form-control" v-model="brief"></textarea>
          </div>
        </div>
        <div class="modal-footer border-top-0 d-flex justify-content-center">
          <button class="btn btn-info btn-block" type="submit">Submit</button>
        </div>
      </form>
    </div>
  </div>
</div>   
    </div>
   <ManageBlogs />
  </div>
</template>

<script>
import ManageBlogs from './ManageBlogs.vue'
import { mapActions, mapGetters } from 'vuex'
export default {
 components : {
  ManageBlogs
 },
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
computed : mapGetters(["javaScriptBlogs", "vueBlogs"]),
methods : {
   ...mapActions(["getBlogs", "submitBlog"]),
   changeModel() {
         this.showModel = !this.showModel
    },
   addBlog() {
     const {
        title,
        language,
        codeone,
        codetwo,
        codethree,
        description,
        brief
     } = this

     this.submitBlog({ title, language, codeone, codetwo, codethree, description, brief})  
     }
},
created() {
   this.getBlogs()

 } 
}
</script>

<style scoped>
.blogs {
  background-color: #f2f2f2;
  padding: 10px;
}
.addblog {
    width: 50%;
    margin-left: 25%;
 
}
@media(max-width: 600px){
    .addblog {
        width: 100%;
        margin-left: 0;
    }
}
</style>