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
                <VSwitch class="switch"/>
                <router-link to="/login">
                    <span class="zaloguj">ZALOGUJ SIĘ</span>
                </router-link>
            </div>
        </div>
        <VLine class="line"/>
    </div>
</template>
<script>
import VLine from './Line.vue'
import VInput from './Input.vue'
import VSwitch from './Switch.vue'
export default {
    components:{
        VLine,
        VInput,
        VSwitch,
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
.center{
    width:40%;
    text-align:center;
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
.switch{
    top:-3px;
    margin-right:15px;
}
.zaloguj{
    color:black;
    font-size:0.9rem;
    text-align: right;
    min-width:300px;
}
@media screen and (max-width: 1000px){
    .zaloguj{
        font-size:0.75rem;
    }
}
@media screen and (max-width: 650px){
    .zaloguj{
        display:none;
    }
}
</style>