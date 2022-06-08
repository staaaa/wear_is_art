<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';
</script>

<template>
<div>
  <Navbar/>
  <router-view v-slot="{ Component }">
    <transition 
    name="transition" 
    mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@400;500;700&display=swap');
*{
  padding:0;
  margin:0;
  box-sizing: border-box;
  text-decoration:none;
}
p{
  color:black;
}
.lock-svg{
  color:white;
} 
.router-link{
  text-decoration: none;
}
.transition-enter-from,
.transition-leave-to{
  opacity: 0;
}
.transition-enter-active,
.transition-leave-active{
  transition: opacity 0.3s ease-out;
}
</style>
