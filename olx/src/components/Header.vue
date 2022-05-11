<template>
    <header>
        <!-- <div class="header-left">
            <div class="logo">
                <img src="../../static/icons/logo.svg" alt="s">
            </div>
            <Switch/>
        </div>
        <div class="header-right">
            <div class="favorite">
                <a href="#">ulubione</a>
            </div>
            <div class="account">
                <a href="#">konto</a>
            </div>
            <div class="add">
                <a href="#">dodaj ogłoszenie</a>
            </div>
        </div> -->

        <nav class="nav">
            <div class="nav-logo">
                <img class="filter-white" src="../../static/icons/logo-meetup.svg" alt="logo meetup">
            </div>
            <Switch/>
            <ul class="nav-menu">
                <li class="menu-item">
                    <a href="" class="menu-link">ulubione</a>
                </li>
                <li class="menu-item">
                    <a href="" class="menu-link">konto</a>
                </li>
                <li class="menu-item">
                    <a href="" class="menu-link">dodaj ogłoszenie</a>
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