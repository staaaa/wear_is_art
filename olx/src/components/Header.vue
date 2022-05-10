<template>
    <header>
        <div class="header-left">
            <div class="logo">
                <img src="../../static/icons/logo.svg" alt="s">
            </div>
            <Switch/>
        </div>
        <div class="header-right">
            <div class="favorite">
                <a href="#">ULUBIONE</a>
            </div>
            <div class="account">
                <a href="#">KONTO</a>
            </div>
            <div class="add">
                <a href="#">DODAJ OGŁOSZENIE</a>
            </div>
        </div>
    </header>
</template>
<script>
import Switch from "../common/Switch.vue"
export default {
    components:{
        Switch:Switch
    }
}
</script>
<style>
    header{
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:80px;
    background-color: rgb(167,57,134);
    display: flex;
    color:white;
    }
    .header-left{
        width:70%;
        display:flex;
        margin:auto;
    }
    .header-right{
        width:30%;
        display:flex;
        margin:auto;
    }
    .switch{
        margin:10px 10px 10px 50px;
    }
    .logo img{
        height:50px;
        padding-left: 50px;
    }
    .favorite, .account, .add{
        width:33%;
    }
    a{
        text-decoration: none;
        color:white;
    }
</style>