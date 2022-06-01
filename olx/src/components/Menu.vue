<template>
    <div class="wrapper">
        <div class="main">
            <p class="header">MENU</p>
            <p class="subtext">KATEGORIE</p>
            <p class="menu-item">ELEKTRONIKA</p>
            <p class="menu-item">DOM I OGRÓD</p>
            <p class="menu-item">URODA</p>
            <p class="menu-item">MOTORYZACJA</p>
            <p class="menu-item">NAUKA I TECHNOLOGIA</p>
            <p class="menu-item">ROZRYWKA</p>
            <p class="menu-item">SPORT</p>
            <p class="subtext">KONTO</p>
            <p class="menu-item">ULUBIONE</p>
            <p class="menu-item">KONTO</p>
            <p class="menu-item">USTAWIENIA</p>
        </div>
        <div class="contact">
            <p class="subtext">KONTAKT Z NAMI</p>
            <p class="menu-item">PODRÓBKAOLX@APP.COM</p>
        </div>
        <span class="close">
            <img src="../../static/assets/icons/xmark-solid.svg">
        </span>
    </div>
</template>
<script>

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
    top:5px;
    right:50px;
    width:18px;
    height:18px;
    cursor:pointer;
}
@media screen and (min-width:1000px) {
    p{
        font-size:1.5rem;
    }
    .subtext{
        font-size:1.275rem;
    }
    .contact{
        position:absolute;
        bottom:265px;
        left:600px;
    }
    .main{
        position:absolute;
        left:180px;
        top:80px;
    }
    .close{
        top:80px;
        right:200px;
        width:25px;
        height:25px;
    }
}
</style>