<template>
    <div class="wrapper">
        <div class="navbar">
            <div class="section left">
                <img src="../../static/assets/icons/bars-solid.svg" class="menu" @click="menuPush" alt="">
            </div>
            <div class="section center">
                <p class='header' @click="homePush">WEAR IS ART?</p>
            </div>
            <div class="section right" @click="showProducts">
                <img class="acc-img" @click="loginPush" src="../../static/assets/icons/user-solid.svg" alt="">
                <img src="../../static/assets/icons/cart-shopping-solid.svg" class='cart' @click="cartPush" alt="">
            </div>
        </div>
        <VLine class="line"/>
    </div>
</template>
<script>
import VLine from './Line.vue'
import VInput from './Input.vue'
import { mapGetters } from 'vuex';
export default {
    components:{
        VLine,
        VInput,
    },
    computed:{
        ...mapGetters([
            'getIsLogged',
        ])
    },
    methods:{
        loginPush(){
            if(this.getIsLogged){
                this.$router.push('/konto');
            }
            else{
                this.$router.push('/login');
            }
        },
        menuPush(){
            this.$router.push('/menu');
        },
        homePush(){
            this.$router.push('/');
        },
        cartPush(){
            this.$router.push('/koszyk');
        },
    }
}
</script>
<style scoped>
*{
    font-family:'Red Hat Display';
    font-weight: 700;
}
img, .cart{
    width:24px;
    height:24px;
}
.navbar{
    display:flex;
    width:80%;
    margin-left:auto;
    margin-right: auto;
    margin-top:20px;
    margin-bottom:10px;
    font-size:1rem;
}
.section{
    width:33%;
    text-align: center;
    display:flex;
    justify-content: center;
    align-items: center;
}
.line{
    margin-left:auto;
    margin-right:auto;
}
.left{
    width:33.5%;
    display:flex;
    justify-content: left;
    padding-left:20px;
}
.right{
    display:flex;
    justify-content:right;
    padding-right:20px;
}
.header{
    font-size:0.8rem;
    font-weight:700;
}
@media screen and (min-width:630px){
    .header{
        font-size:1.5rem;
    }
}
.login{
    margin-right:10px;
    display:none;
}
.acc-img{
    margin-right:30px;
}
.acc-img, .cart, .header, .menu{
    cursor: pointer;
}
</style>