<template>
    <header>
        <nav class="nav">
            <div class="nav-logo" @click="$store.dispatch('setTitlePage')">
                <img class="filter-white" src="../../static/icons/logo-meetup.svg" alt="logo meetup">
            </div>
            <Switch/>
            <ul class="nav-menu">
                <li class="menu-item">
                    <p class="menu-link">ulubione</p>
                </li>
                <li class="menu-item">
                    <p class="menu-link">konto</p>
                </li>
                <li class="menu-item">
                    <p class="menu-link" @click="$store.dispatch('setAddNewOffert')">dodaj ogłoszenie</p>
                </li>
            </ul>
        </nav>
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

    header {
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

    /*

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
        font-family: var(--font-body);
        font-weight: var(--font-weight-regular);
        font-style: normal;
        text-decoration: none;
        text-transform: uppercase;
    }

    */

    .switch {
        margin: 24px 20px 0 0;
    }

    .nav {
        display: inline-flex;
        position: absolute;
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
        font-size: var(--font-size-md);
        font-family: var(--font-heading);
        font-weight: var(--font-weight-regular);
        font-style: normal;
        text-decoration: none;
        text-transform: uppercase;
    }

    .nav .nav-menu .menu-item:hover {
        transform: scale(1.1);
    }

    .nav .nav-menu .menu-item .menu-link:hover {
        color: var(--color-light);
    }

</style>