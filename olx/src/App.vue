<template>
  <div class="wrapper">
    <div id="cursor"></div>
    <Home/>
  </div>
</template>
<script>
import Home from './views/Home.vue'
import LoginVue from './views/Login.vue'
import RegisterVue from './views/Register.vue'
import Menu from './components/Menu.vue'

export default{
  mounted () {
    const cursor = document.querySelector("#cursor"),
          logo = document.querySelector(".center");

    document.addEventListener("mousemove", move => {
      cursor.style.left = move.pageX + "px";
      cursor.style.top = move.pageY + "px";
    });

    logo.addEventListener("mouseenter", () => {
      cursor.style.width = "120px";
      cursor.style.height = "120px";
      cursor.style.transition = ".15s";
    });

    logo.addEventListener("mouseleave", () => {
      cursor.style.width = "40px";
      cursor.style.height = "40px";
      cursor.style.transition = ".15s";
    });
  },
  components:{
    Home,
    LoginVue,
    RegisterVue,
    Menu,
  },
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
  #cursor {
    width: 40px;
    height: 40px;
    position: absolute;
    display: block;
    border-radius: 50%;
    border: 3px solid #101010;
    z-index: 9999;
  }
</style>