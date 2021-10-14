<template>
  <div class="container">
     <div class="main m-4 px-5">
        <div class="filter">
                    <div class="main">
        
        <!-- Actual search box -->

        
        <!-- Another variation with a button -->
        <div class="input-group">
            <input type="text" class="form-control" placeholder="Search in blogs" v-model="search">
            <div class="input-group-append">
            <button class="btn btn-secondary" type="button">
                <i class="fa fa-search"  @click="searchBlogs(search)">Search</i>
            </button>
            </div>
        </div>
        
        </div>
           
           <div class="head mt-2">Filter By Languages : </div>
          <div class="input-group">
               <select v-model="language"  class="form-control">
                <option value="javaScript">javaScript</option>
                <option value="node js">Node JS</option>
                <option value="mongodb">MongoDb</option>
                <option value="vue js">Vue JS</option>
                <option value="react js">React JS</option>
                <option value="html">HTML</option>
                <option value="css">CSS</option>
            </select>
            <div class="input-group-append">
                 <button class="btn btn-secondary" type="button">
                <i class="fa fa-search"  @click="languages(language)">Search</i>
            </button>
            </div>
          </div>
           
        </div>
     </div>
     <div class="container">
  <div class="row">
     
  </div>
</div>


  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
 data() {
     return {
         search : '',
         language : ''
     }
 },
 methods: {
     ...mapActions(["searchBlogs", "languages"])
 }
}
</script>

<style scoped>
/* .form-input {
    background-color: #f2f2f2;
    height: 6vh;
    border: 2px #f2f2f2 solid;
    width: 50%;
    border-radius: 5px;
}
.select{
    background-color: #f2f2f2;
    height: 6vh;
    border-radius: 5px;
}
@media(max-width: 600px) {
    .form-input {
        width: 50%;
        margin-bottom: 10px;
    }

} */
</style>