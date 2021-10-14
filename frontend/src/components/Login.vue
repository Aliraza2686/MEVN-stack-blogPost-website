<template>
  <div class="container1">
      <Header />
      <div class="login ">
          <h3 class="text-center">Login</h3>
            <div class="alert alert-warning alert-dismissible fade show" role="alert" v-if="alert != '' ">
            <strong>Error !</strong> {{alert}}
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
            </div>
          <form class="form-group" @submit.prevent="login">
              <label>Email : </label>
              <input type="email"  class="form-control" v-model="email" required>
              <label>Password : </label>
              <input type="password" class="form-control" v-model="password" name="password">
              <button class="btn btn-info mt-3 btn-block">Login</button>
          </form>
      </div>
  </div>
</template>

<script>
import Header from './Header.vue'
import { mapActions, mapGetters } from'vuex'
export default {
components : {
    Header
},
data() {
    return {
        email : '',
        password : ''
    }
 },
 computed : mapGetters(["alert"]),
 methods : {
     ...mapActions(["loginUser"]),
   login() {
        const email = this.email
        const password = this.password
        this.loginUser({password : password, email : email})
    }
 }
}
</script>

<style scoped>
.login {
    position : absolute;
    top: 30%;
    left: 28%;
    width: 40%;
}
@media(max-width: 600px) {
    .login {
        width: 90%;
        top: 20%;
        left: 5%;
    }
}
</style>
