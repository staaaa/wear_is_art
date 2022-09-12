<template>
    <div class="wrapper">
        <Navbar/>
        <div class="main">
            <p class="header">MENU</p>
            <p class="subtext">KATEGORIE</p>
            <router-link to="/t-shirt">
                <p class="menu-item">T-SHIRTY</p>
            </router-link>
            <p class="subtext">KONTO</p>
            <router-link to="/account">
                <p class="menu-item">KONTO</p>
            </router-link>
            <p class="menu-item">USTAWIENIA</p>
            <span class="small">
                <p class="subtext">KONTAKT Z NAMI</p>
                <p class="menu-item">maniek_koks@gmail.com</p>
            </span>
        </div>
        <div class="contact">
            <p class="subtext">KONTAKT Z NAMI</p>
            <p class="menu-item">maniek_koks@gmail.com</p>
        </div>
        <span class="close">
            <router-link to="/">
                <img src="../../static/assets/icons/xmark-solid.svg">
            </router-link>
        </span>
    </div>
</template>
<script>
import Navbar from '../components/Navbar.vue';

export default{
    components:{
        Navbar,
    }
}
</script>
<style scoped>
p{
    text-align:left;
    font-family:'Red Hat Display';
    padding:10px 0;
    margin-left:20px;
    font-size:0.9rem;
}
.menu-item{
    font-weight: 500;
}
.header{
    font-weight: 700;
    margin-bottom:20px;
}
.subtext{
    font-weight:700;
    font-size:0.775rem;
    margin-top:20px;
}
.close{
    position:absolute;
    top:80px;
    right:15%;
    width:25px;
    height:25px;
    cursor:pointer;
}
.main{
    position:absolute;
    left:15%;
    top:80px;
}
.small{
    display:initial;
}
.contact{
    display:none;
}
@media screen and (min-width:1000px) {
    p{
        font-size:1.5rem;
    }
    .subtext{
        font-size:1.275rem;
    }
    .contact{
        display:initial;
        position:absolute;
        bottom:265px;
        left:600px;
    }
    .small{
        display:none;
    }
}
</style>