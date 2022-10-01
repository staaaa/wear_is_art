<template>
    <div class="wrapper">
        <Navbar/>
        <div class="inner-wrapper">
            <div class="row">
                <p class="title">KOSZYK</p>
            </div>
            <span v-if="cartProducts.length > 0">
                <div v-for="cartProduct in cartProducts" v-bind:key="cartProduct" class="row">
                    <CartProduct :product='cartProduct'/>
                </div>
            </span>
            <div v-else>
                <p class="row">WYGLĄDA NA TO, ŻE TWÓJ KOSZYK JEST PUSTY.</p>
                <p class="row">PRZEJDŹ NA STRONĘ Z KOSZULKAMI I DODAJ SWÓJ PIERWSZY PRODUKT DO KOSZYKA.</p>
            </div>
        </div>
        <Footer/>
    </div>
</template>
<script>
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
import CartProduct from '../components/CartProduct.vue'
import { mapGetters } from 'vuex';
export default {
    components:{
    Navbar,
    Footer,
    CartProduct
    },
    computed:{
        ...mapGetters([
            'getProducts',
        ])
    },
    data(){
        return{
            cartProducts: [],
        }
    },
    mounted(){
        this.updateCart();
    },
    methods:{
        updateCart(){
            this.cartProducts = [];
            let allProducts = this.getProducts;;

            let j = 0;
            for(let i = 0; i < allProducts.length; i++){
                if(localStorage.getItem(allProducts[i].id) != null){
                    this.cartProducts[j] = allProducts[i];
                    this.cartProducts[j].quantity = localStorage.getItem(allProducts[i].id);
                    j++;
                }
            }
        }
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
    margin-bottom:20px;
}
.title{
    font-size:2rem;
    font-weight:700;
    margin-top:20px;
}
</style>