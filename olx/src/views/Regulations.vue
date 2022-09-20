<template>
    <div class="wrapper">
        <Navbar/>
        <div class="wrapper-text">
            <p class="title">REGULAMIN SERWISU</p>
            <div class="wrapper-subtext">
                <p class="subtitle">1. TEST </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam deserunt facilis soluta saepe cumque voluptate est doloremque, ipsam ducimus exercitationem esse veniam deleniti doloribus libero voluptatibus quis ex quasi at.</p>
            </div>
            <div class="wrapper-subtext">
                <p class="subtitle">2. TEST </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam deserunt facilis soluta saepe cumque voluptate est doloremque, ipsam ducimus exercitationem esse veniam deleniti doloribus libero voluptatibus quis ex quasi at.</p>
            </div>
        </div>
        <Footer/>
    </div>
</template>
<script>
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
export default {
    components:{
        Navbar,
        Footer,
    },
}
</script>
<style scoped>
*{
    font-family: 'Red Hat Display';
}
.wrapper-text{
    margin-top:20px;
    display:flex;
    flex-direction: column;
    justify-content: center;
    width:70%;
    margin-left:auto;
    margin-right:auto;
}
.wrapper-subtext{
    margin-top:50px;
}
.title{
    font-size:2rem;
    font-weight:700;
    text-align: center;
}
.subtitle{
    font-size:1.5rem;
    font-weight:500px;
}
</style>