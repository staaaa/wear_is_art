<template>
  <div class="wrapper">
    <Home/>
  </div>
</template>
<script>
import Home from './views/Home.vue'
import LoginVue from './views/Login.vue'
import RegisterVue from './views/Register.vue'
import Menu from './components/Menu.vue'

export default{
  components:{
    Home,
    LoginVue,
    RegisterVue,
    Menu
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