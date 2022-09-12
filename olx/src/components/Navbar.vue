<template>
    <div class="wrapper">
        <div class="navbar">
            <div class="left">
                <router-link to="/menu">
                    <img src="../../static/assets/icons/bars-solid.svg" alt="">
                </router-link>
            </div>
            <div class="center">
                <router-link to="/">
                    <p>WEAR IS ART?</p>
                </router-link>
            </div>
            <div class="right">
                <router-link v-if="!getIsLogged" to="/login">
                    <div>
                        <span class="login">ZALOGUJ SIĘ</span>
                        <img class="acc-img" src="../../static/assets/icons/user-solid.svg" alt="">
                    </div>
                </router-link>
                <router-link v-if="getIsLogged" to="/account">
                    <span class="login">KONTO</span>
                    <img class="acc-img" src="../../static/assets/icons/user-solid.svg" alt="">
                </router-link>
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
    }
}
</script>
<style scoped>
*{
    font-family:'Red Hat Display';
    font-weight: 700;
}
.navbar{
    display:flex;
    width:80%;
    margin-left:auto;
    margin-right: auto;
    margin-top:20px;
    margin-bottom:10px;
    justify-content: space-around;
}
.center{
    width:40%;
    text-align:center;
}
.left, .right{
    width:30%;
    height:auto;
    margin-left:20px;
    margin-right:20px;
}
.right{
    text-align: right;
    display:flex;
    justify-content: right;
}
.line{
    margin-left:auto;
    margin-right:auto;
}
img{
    width:25px;
    height:25px;
    cursor: pointer;
}
.login{
    color:black;
    font-size:0.9rem;
    text-align: right;
    min-width:300px;
    padding-right:10px;
    vertical-align: top;
}
.acc-img{
    padding-bottom:7px;
}
@media screen and (max-width: 1000px){
    .login{
        font-size:0.75rem;
    }
}
@media screen and (max-width: 650px){
    .login{
        display:none;
    }
}
</style>