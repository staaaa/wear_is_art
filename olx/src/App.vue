<template>
<div>
  <Modal/>
  <div :class="{blur: getModalCart}">
    <router-view v-slot="{ Component }">
      <transition 
      name="transition" 
      mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</div>
</template>
<script>
import { RouterLink, RouterView } from 'vue-router'
import Modal from './components/Modal.vue';
import { mapGetters } from 'vuex';
export default{
  components:{
    Modal,
  },
  computed:{
    ...mapGetters(['getModalCart']),
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@400;500;700&display=swap');
::-webkit-scrollbar{
  display:none;
}
.blur{
  filter: blur(4px);
}
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
