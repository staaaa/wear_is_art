<template>
    <div class="wrapper">
        <Navbar/>
        <div class="inner-wrapper">
            <div class="column">
                <p class="title">DANE ADRESOWE</p>
                <p>ADRES: UL. Świętojańska 7</p>
                <p>MIASTO: Swarzewo</p>
            </div>
            <div class="column">
                <p class="title">DANE KONTAKTOWE</p>
                <p>NUMER TELEFONU: 987789098</p>
                <p>ADRES E-MAIL: maniek_koks@gmail.com</p>
            </div>
        </div>
        <Footer/>
    </div>
</template>
<script>
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
export default {
    components:{
        Navbar,
        Footer,
    }
}
</script>
<style scoped>
*{
    font-family: 'Red Hat Display';
}
.inner-wrapper{
    width:80%;
    margin-left:auto;
    margin-right:auto;
    display:flex;
    flex-direction:column;
    margin-top:20px;
}
.column{
    display:flex;
    flex-direction:column;
    width:100%;
    justify-content: center;
    align-content: center;
    margin-top:50px;
}
p{
    text-align: center;
}
.title{
    font-size:2rem;
    font-weight: 700;
}
@media screen and (min-width:900px){
    .inner-wrapper{
        flex-direction: row;
    }
    .column{
        width:50%;
        margin-top:0px;
    }
}
</style>