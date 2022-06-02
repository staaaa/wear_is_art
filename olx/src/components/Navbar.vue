<template>
    <div class="wrapper">
        <div class="navbar">
            <div class="left">
                <img src="../../static/assets/icons/bars-solid.svg" alt="">
            </div>
            <div class="center">
                <p>AUCTIONSTORE</p>
            </div>
            <div class="right">
                <VSwitch class="switch"/>
                <span class="zaloguj">ZALOGUJ SIĘ</span>
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
    width:25%;
    height:auto;
    margin-left:20px;
    margin-right:20px;
}
.right{
    text-align: right;
    display:flex;
}
.center{
    width:50%;
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
    margin-right:15px;
    top:-3px;
}
.zaloguj{
    margin-left:50px;
}
@media screen and (max-width: 1000px){
    .zaloguj{
        display:none;
    }
}
</style>