import { createStore } from 'vuex'
import axios from 'axios'
import FilterBlogs from './modules/FilterBlogs'
import SingleBlog from './modules/SingleBlog'
import Login from './modules/Login'
import Dashboard from './modules/Dashboard'
import AddBlog from './modules/AddBlog'
import UpdateBlog from './modules/UpdateBlog'

export default createStore({
  state: {
    blogs : []
  },
  mutations: {
    pushBlogs : (state, data) => state.blogs = data
  },
  actions: {
   async getBlogs ({commit}) {
       try{
         const res = await axios.get('/blogs')
         const data = await res.data
         commit('pushBlogs', data)
       }catch(error) {
         if(error.response.data) {
           commit('pushBlogs', "Something went wrong")
         }
       } 
    } 
  },
  getters : {
   blogs : (state) => state.blogs,
   vueBlogs : (state) => {
     return state.blogs.filter((blog) => blog.language == 'vue js').length
   },
   javaScriptBlogs : (state) => {
     const blogs = state.blogs.filter((blog) => blog.language == 'javaScript').length
     return blogs
   }
  },
  modules: {
    FilterBlogs,
    SingleBlog,
    Login,
    Dashboard,
    AddBlog,
    UpdateBlog
  }
})
