<template>
 <div>
   <nav class="navbar navbar-dark navbar-expand-sm bg-dark ">
        <div class="container">
            <i class="fas fa-blog "></i>
          <h4 class="text-light">Code Snippets</h4>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
        </button>


        <div id="navbarCollapse" class="collapse navbar-collapse">
        <ul class="navbar-nav ml-auto">
            <li class="nav-item">
                <p  class="nav-link active">
                    Home
                </p>
            </li>
            <li class="nav-item">
                <p class="nav-link active">
                    Blog
                </p>
            </li>
            <li class="nav-item">
                <p class="nav-link active">
                    About
                </p>
            </li>
            <li class="nav-item">
                <p class="nav-link active">
                   <router-link to="/login">Login</router-link>
                </p>
            </li>
        </ul>
        </div>



    </div>
</nav>

</div>
</template>

<script>
export default {

}
</script>

<style>

</style>