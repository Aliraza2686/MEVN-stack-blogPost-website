import axios from 'axios'

export default {
    state : {
        blog : {}
    },
    actions : {
       async getBlog ({commit}, id) {
          try{
            const res = await axios.get(`/blog/${id}`)
            const data = await res.data
            commit('pushBlog', data)
          }catch(error) {
            if(error.response.data) {
                commit('pushBlog', { error : "Some Thing Went Wrong"})
            }
          }
       }
    },
    mutations : {
        pushBlog : (state, data) => state.blog = data
    },
    getters : {
      blog : (state) => state.blog
    }
}