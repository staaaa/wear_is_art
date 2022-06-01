<template>
  <div class="wrapper">
    <RegisterVue/>
  </div>
</template>
<script>
import Home from './views/Home.vue'
import LoginVue from './views/Login.vue'
import RegisterVue from './views/Register.vue'

export default{
  components:{
    Home,
    LoginVue,
    RegisterVue,
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@400;500;700&display=swap');
  *{
    padding:0;
    margin:0;
    box-sizing: border-box;
  }
  .lock-svg{
    color:white;
  } 
</style>