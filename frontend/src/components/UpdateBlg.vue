<template>
   <div>
       <Header />
       <form @submit="updBlog" class="upd">
        <div class="links mt-3">
            <router-link to="/dashboard" class="text-danger">Back</router-link>
            <h3 class="text-center">Update Blog</h3>
        </div>
        <div class="modal-body">
          <div class="form-group">
            <label >Title</label>
            <input type="text" class="form-control" @input="valueOfBlog.title" aria-describedby="emailHelp"  v-model="title" placeholder="Enter title" >
            
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
</template>

<script>
import Header from './Header.vue'
import { mapActions, mapGetters } from 'vuex'
export default {
components :{
    Header
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
     brief : '',
     id : this.$route.params.id
   }
  },
  computed : mapGetters(["valueOfBlog"]),
  methods : {
      ...mapActions(["updateBlog", "updValue"]),
      updBlog() {
            const {
            title,
            language,
            codeone,
            codetwo,
            codethree,
            description,
            brief,
            id
     } = this
     this.updateBlog({id, title, language, codeone, codetwo, codethree, description, brief})
  }
},
created() {
    this.updValue(this.id)
}
} 
</script>

<style scoped>
.upd {
    position: absolute;
    width: 60%;
    left: 20%;
}
</style>