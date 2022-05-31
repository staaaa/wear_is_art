<template>
    <div class="wrapper">
        <Navbar/>
        <RegisterVue/>
    </div>
</template>
<script>
import Navbar from '../components/Navbar.vue'
import RegisterVue from './Register.vue'
export default {
    components:{
        Navbar,
        RegisterVue,
    }
}
</script>