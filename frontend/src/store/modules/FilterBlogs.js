import axios  from "axios"

export default {
    state : {},
    mutations : {},
    actions : {
        searchBlogs ({commit, rootState}, search) {
            const blogs = rootState.blogs.filter((blog) => blog.title.includes(search))
            commit("pushBlogs", blogs)
         },
        languages ({commit, rootState}, language) {
           const blogs = rootState.blogs.filter((blog) => blog.language.includes(language))
           commit('pushBlogs', blogs)
        }
    },
    getters : {}
}