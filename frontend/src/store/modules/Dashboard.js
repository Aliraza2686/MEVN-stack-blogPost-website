import axios from 'axios'
import router from '../../router'
import vueCookie from 'vue-cookie'

export default {
    state : {},
    actions : {
     async delBlog  ({commit}, id) {
          const cookie = vueCookie.get('token')
          const res = await axios.delete(`/delete/blog/${id}`, {
              headers : {
                  'Authorization' : cookie
              }
          })
          const data = await res.data
          if(data.error) {
              console.log(data.error)
          }else {
              location.assign('/dashboard')
          }
      }
    },
    mutations : {},
    getters : {}
}