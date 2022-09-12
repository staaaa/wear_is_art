<template>
    <div class="wrapper">
        <Navbar/>
        <h2>T-SHIRTY</h2>
        <p>Najlepsze t-shirty specjalnie dla Ciebie.</p>
        <div class="items">
            <div class="item" v-for="item in products" v-bind:key="item">
                <AuctionVue :to="item.id" :src="item.src" :name="item.name" :price="item.price"/>
            </div>
        </div>
        <Footer/>
    </div>
</template>
<script>
import Navbar from '../../components/Navbar.vue'
import RegisterVue from '../Register.vue'
import AuctionVue from '../../components/AuctionItem.vue'
import Footer from '../../components/Footer.vue'

import { mapGetters } from 'vuex'
export default {
    computed: {
        ...mapGetters([
            'getProducts',
        ])
    },
    components:{
        Navbar,
        RegisterVue,
        AuctionVue,
        Footer,
    },
    data(){
        return{
            products: Array
        }
    },
    mounted(){
        this.products = this.getProducts
    }
}
</script>
<style scoped>
/* dla desktopu */
.items{
    display:grid;
    grid-template-columns: auto;
    grid-column-gap:20px;
    width:80%;
    margin:auto;
}
h2{
    margin-top:20px;
}
h2, p{
    text-align:center;
    font-family:'Red Hat Display';
    font-weight: 700;
    padding:10px 0;
}
.item{
    margin-top:20px;
    margin-bottom:20px;
    display:flex;
    justify-content: center;
    align-items: center;
}
@media screen and (min-width: 800px){
    .items{
        display:grid;
        grid-template-columns: auto auto;
    }
}
@media screen and (min-width: 1200px){
    .items{
        display:grid;
        grid-template-columns: auto auto auto;
    }
}
@media screen and (min-width: 1450px){
    .items{
        display:grid;
        grid-template-columns: auto auto auto auto;
    }
}
#cursor {
    width: 40px;
    height: 40px;
    position: absolute;
    display: block;
    border-radius: 50%;
    border: 3px solid #101010;
    z-index: 9999;
}
</style>