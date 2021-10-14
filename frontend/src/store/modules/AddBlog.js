import axios from 'axios'
import router from '../../router'
import vueCookie from 'vue-cookie'

export default {
    state : {},
    actions : {
      async submitBlog ({commit}, {title, description, language, codeone, codetwo, codethree, brief}) {
          const token = vueCookie.get('token')
          console.log(token)
          const res = await axios.post('/add/blog', {
            title,
            language,
            codeone,
            codetwo,
            codethree,
            description,
            brief
          }, {
              headers : {
                  'Authorization' : token
              }
          })
          const data = await res.data
          console.log(data)
      }
    },
    mutations : {},
    getters : {}
}