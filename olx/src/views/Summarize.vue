<template>
    <div class="wrapper">
        <Navbar/>
        <div class="inner-wrapper">
            <div class="row">
                <p class="title">PODSUMOWANIE</p>
            </div>
            <span v-if="getPaymentProceeded">
                <div class="row">
                    <div class="column">
                        <p class="subtitle">DANE KLIENTA</p>
                        <p class="subtitlesmall">{{getUserOrderData[0][0]}} {{getUserOrderData[0][1]}}</p>
                        <p class="subtitlesmall">{{getUserOrderData[0][2]}}</p>
                        <p class="subtitlesmall">{{getUserOrderData[0][3]}}</p>
                        <p class="subtitlesmall">{{getUserOrderData[0][4]}} {{getUserOrderData[0][5]}}/{{getUserOrderData[0][6]}}</p>
                        <p class="subtitlesmall">{{getUserOrderData[0][7]}} {{getUserOrderData[0][8]}}</p>
                        <p class="subtitlesmall">{{getUserOrderData[0][9]}}</p>
                    </div>
                    <div class="column">
                        <p class="subtitle">DANE KLIENTA</p>
                        <span v-for="products in getUserOrderData[1]" v-bind:key="products">
                            <p class="subtitlesmall">Produkt:<span class="product" @click="pushProduct(products.category,products.productCode)">{{products.productCode}}</span>, Ilość:{{products.quantity}}</p>
                        </span>
                    </div>
                </div>
                <div class="row">
                    <VButton class="button" value="ZAMÓW I ZAPŁAĆ" @click="pushOrder()"/>
                </div>
            </span>
            <span v-else>
                <div class="row">
                    <p class="subtitle">NIE UZUPEŁNIONO DANYCH ADRESOWYCH.</p>
                </div>
                <div class="row">
                    <p class="subtitle">WRÓĆ NA <span class="payment" @click="pushPayment()">STRONĘ Z PŁATNOŚCIĄ</span> I UZUPEŁNIJ DANE ADRESOWE.</p>
                </div>
            </span>
        </div>
        <Footer/>
    </div>
</template>
<script>
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
import VButton from '../components/Button.vue';
import { mapActions, mapGetters } from 'vuex';
export default {
    components:{
        Navbar,
        Footer,
        VButton,
    },
    computed:{
        ...mapGetters([
            'getUserOrderData',
            'getPaymentProceeded',
        ]),
    },
    methods:{
        pushPayment(){
            this.$router.push('/platnosc');
        },
        pushProduct(category, productCode){
            this.$router.push('/'+category+'/'+productCode)
        },
        pushOrder(){
            
        },
    }
    
}
</script>
<style scoped>
*{
    font-family: 'Red Hat Display';
}
.inner-wrapper{
    display:flex;
    flex-direction:column;
}
.row{
    display:flex;
    justify-content: center;
    align-content: center;
    margin-bottom:10px;
}
.title{
    font-size:1.5rem;
    font-weight:700;
    margin-top:20px;
}
.subtitle{
    font-size:1.2rem;
    font-weight:500;
    margin-top:10px;
}
.subtitlesmall{
    font-size:1rem;
    font-weight:300;
    margin-top:10px;
    margin-bottom:20px;
}
.column{
    display:flex;
    flex-direction: column;
    width:40%;
    align-items: center;
}
.button{
    width:190px;
    margin:20px 10px;
}
.payment, .product{
    color:blue;
    cursor: pointer;
}
</style>