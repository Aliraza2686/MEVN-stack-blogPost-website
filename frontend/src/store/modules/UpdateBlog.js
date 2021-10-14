import axios from "axios";
import VueCookie from "vue-cookie";
import router from "../../router";

export default {
    state : {
        blogValue : {}
    },
    actions : {
       async updateBlog({commit}, {id, title, language, codeone, codetwo, codethree, description, brief}) {
          const cookie = VueCookie.get('token')
          const res = await axios.patch(`/update/blog/${id}`, {
            title,
            language,
            codeone,
            codetwo,
            codethree,
            description,
            brief
          },{
              headers : {
                  'Authorization' : cookie
              }
          })
          const data = await res.data
          if(data.error) {
              router.push('/')
          }else if(data.success){
              location.assign('/dashboard')
          }
        },
      async updValue({commit}, id) {
         const res = await axios.get(`/blog/${id}`)
         const data = await res.data
         commit("addValue", data)
      }   
    },
    mutations : {
       addValue : (state, data) => state.blogValue = data
    },
    getters : {
      valueOfBlog : (state) => state.blogValue
    }
}