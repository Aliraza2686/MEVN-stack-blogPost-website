import axios from 'axios'
import vueCookie from 'vue-cookie'
import  router  from '../../router'

export default {
    state : {
         message : ''
    },
    mutations : {
        errPush : (state, error) => state.message = error
    },
    actions : {
        loginUser ({commit}, {password : password, email : email}) {
          axios.post('/login', {
              email : email,
              password : password
          },{
              withCredentials : true
          }).then( function (res) {
              if(res.data.error) {
                  vueCookie.set('token', '')
                  commit('errPush', res.data.error)
              }else {
                  vueCookie.set('token', res.data.token)
                  router.push('/dashboard')
              }
          })
        }
    },
    getters : {
      alert : (state) => state.message
    }
}