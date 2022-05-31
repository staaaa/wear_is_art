<template>
    <div class="wrapper">
        <div class="navbar">
            <div class="left">
                MENU
            </div>
            <div class="center">
                <p>AUCTIONSTORE</p>
            </div>
            <div class="right">
                <img src="../../static/assets/icons/user-solid.svg" alt="">
            </div>
        </div>
        <VLine class="line"/>
    </div>
</template>
<script>
import VLine from './Line.vue'
export default {
    components:{
        VLine,
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
    margin-top:10px;
}
.left, .right{
    width:15%;
    height:auto;
}
.center{
    width:70%;
    text-align:center;
}
.line{
    margin-left:auto;
    margin-right:auto;
}
img{
    width:25px;
    height:25px;
}
</style>