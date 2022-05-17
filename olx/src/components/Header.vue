<template>
    <nav class="nav">
        <div class="header-left">
            <div class="nav-logo" @click="$store.dispatch('setTitlePage')">
                <img class="filter-white" src="../../static/icons/logo-meetup.svg" alt="logo meetup">
            </div>
            <Switch/>
            <ul class="nav-menu">
                <li class="menu-item">
                    <p class="menu-link" @click="$store.dispatch('setFavourite')">ulubione</p>
                </li>
                <li class="menu-item">
                    <p class="menu-link">konto</p>
                </li>
                <li class="menu-item">
                    <p class="menu-link" @click="$store.dispatch('setAddNewOffert')">dodaj ogłoszenie</p>
                </li>
            </ul>
        </div>
        <div class="header-right" @click="$store.dispatch('setLoginForm')"   v-if="!$store.getters.getIsLogged">
            <img src="../../static/icons/user-default.png" class="user-icon">
        </div>
    </nav>
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
@import url('https://fonts.googleapis.com/css2?family=Titillium+Web:wght@900&display=swap');
    nav {
        display: flex;
        position:fixed;
        top:0;
        left:0;
        width: 100%;
        height: 80px;
        /* background-color: rgb(167,57,134); */
        background-color: var(--color-dark);
        color:var(--color-light);
    }

    .user-icon{
        width:50px;
        height:50px;
        position:absolute;
        right:100px;
        top:15px;
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

    .logo img{
        height:50px;
        padding: 0 50px;
    }
    .favorite, .account, .add{
        width:33%;
    }

    .header-right .favorite a,
    .header-right .account a,
    .header-right .add a {
        color: var(--color-light);
        font-size: var(--font-size-xlg);
        font-weight: var(--font-weight-regular);
        font-style: normal;
        text-decoration: none;
        text-transform: uppercase;
    }


    .switch {
        margin: 24px 20px 0 0;
    }

    .nav .nav-logo {
        padding: 12px 50px;
    }

    .nav .nav-logo img {
        height: 50px;
    }

    .filter-white {
        filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(90deg) brightness(100%) contrast(100%);
    }

    .nav .nav-menu {
        list-style: none;
        list-style-type: none;
        display: flex;
        justify-content: space-between;
    }

    .nav .nav-menu .menu-item {
        padding: 26px 30px;
    }

    .nav .nav-menu .menu-item .menu-link {
        color: var(--color-darkGrey);
        font-size: var(--font-size-xl);
        font-weight: var(--font-weight-regular);
        font-family: 'Titillium Web', sans-serif;
        font-style: normal;
        text-decoration: none;
        text-transform: uppercase;
    }

    .nav .nav-menu .menu-item:hover {
        transform: scale(1.1);
        cursor: pointer;
    }

    .nav .nav-menu .menu-item .menu-link:hover {
        color: var(--color-light);
    }
    img:hover{
        cursor: pointer;
    }
</style>