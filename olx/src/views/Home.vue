<template>
    <div class="wrapper">
        <Navbar/>
        <div class="wrapper-main">
            <div class="row">
                <div class="column">
                    <p class="title">WITAMY NA STRONIE WEAR IS ART?</p>
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <p class="subtitle">O NAS</p>
                    <Line class="linia"/>
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <p class="text">jestesmy super firma ktora robi fajne ciuchy</p>
                    <p class="text">jestesmy firma ktora robi fajne ciuchy</p>
                </div>
            </div>
            <div class="row products">
                <p class="subtitle">
                    <router-link :to="'/t-shirt'">
                        T-SHIRTY
                    </router-link>
                    <Line class="linia"/>
                </p>
            </div>
        </div>
        <div class="items">
            <div class="item" v-for="item in products" v-bind:key="item">
                <AuctionVue :category="item.category" :to="item.productCode" :src="item.src" :name="item.name" :price="item.price"/>
            </div>
        </div>
        <Footer/>
    </div>
</template>
<script>
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
import AuctionVue from '../components/AuctionItem.vue'
import Line from '../components/Line.vue';
import { mapGetters } from 'vuex';
export default {
    components:{
        Navbar,
        AuctionVue,
        Footer,
        Line,
    },
    computed: {
        ...mapGetters([
            'getPreviewTshirts',
        ])
    },
    data(){
        return{
            products: Array
        }
    },
    mounted(){
        this.products = this.getPreviewTshirts
    }
}
</script>
<style scoped>
*{
    font-family:'Red Hat Display';
}
.wrapper-main{
    display:flex;
    flex-direction:column;
    width:80%;
    margin-left:auto;
    margin-right:auto;
    justify-content: space-around;
    align-content: space-around;
}
.row{
    display:flex;
    flex-direction:row;
    justify-content: center;
    align-content: center;
    margin-top:20px;
}
.column{
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-content: center;
}
.title{
    font-size:1.75rem;
    font-weight:700;
    text-align: center;
}
.subtitle{
    font-size:1.25rem;
    font-weight:500;
}
.text{
    font-size:1rem;
    font-weight:300;
    text-align: center;
}
.items{
    display:grid;
    grid-template-columns: auto;
    grid-column-gap:20px;
    width:80%;
    margin:auto;
}
.item{
    margin-top:20px;
    margin-bottom:20px;
    display:flex;
    justify-content: center;
    align-items: center;
}
.products{
    margin-top:40px;
}
.linia{
    margin:auto;
    width:100%;
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
a{
    color:black;
}
</style>