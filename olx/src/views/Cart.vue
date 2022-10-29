<template>
    <div class="wrapper">
        <Navbar/>
        <div class="inner-wrapper">
            <div class="row">
                <p class="title">KOSZYK</p>
            </div>
            <span v-if="cartProducts.length > 0">
                <div v-for="cartProduct in allCartThings" v-bind:key="cartProduct" class="row products">
                    <CartProduct :product='cartProduct'/>
                </div>
            </span>
            <div v-else>
                <p class="row">WYGLĄDA NA TO, ŻE TWÓJ KOSZYK JEST PUSTY.</p>
                <p class="row">PRZEJDŹ NA STRONĘ Z KOSZULKAMI I DODAJ SWÓJ PIERWSZY PRODUKT DO KOSZYKA.</p>
            </div>
            <div class="row buttons">
                <Button class="button" value="WYCZYŚĆ KOSZYK" @click="clearCart"/>
                <Button class="button" value="PRZEJDŹ DO PŁATNOŚCI" @click="processPayment"/>
            </div>
        </div>
        <Footer/>
    </div>
</template>
<script>
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
import CartProduct from '../components/CartProduct.vue'
import Button from '../components/Button.vue'
import { mapGetters } from 'vuex';
export default {
    components:{
        Navbar,
        Footer,
        CartProduct,
        Button,
    },
    computed:{
        ...mapGetters([
            'getProducts',
        ]),
        allCartThings() {
            const allCartThings = []
            for (let i = 0, len = Math.max(this.cartProducts.length, this.quantity.length); i < len; i++) {
                allCartThings.push({
                    cartProducts: this.cartProducts[i],
                    quantity: this.quantity[i],
                })
            }
            return allCartThings;
        }
    },
    data(){
        return{
            cartProducts: [],
            quantity: [],
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
                if(localStorage.getItem(allProducts[i].productCode) != null){
                    this.cartProducts[j] = allProducts[i];
                    this.quantity[j] = localStorage.getItem(allProducts[i].productCode);
                    j++;
                }
            }
        },
        clearCart(){
            for(let i = 0; i < this.cartProducts.length; i++){
                localStorage.removeItem(this.cartProducts[i].productCode);
            }
            this.cartProducts = [];
        },
        processPayment(){
            if(this.cartProducts.length > 0)
            {
                this.$router.push('/platnosc');
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
    margin-bottom:10px;
}
.title{
    font-size:2rem;
    font-weight:700;
    margin-top:20px;
}
.products{
    display:flex;
    justify-content: left;
    margin-left:10%;
}
.button{
    width:250px;
    margin: 10px 15px;
}
.buttons{
    display:flex;
    flex-direction: column;
    align-items: center;
}
@media screen and (min-width:600px) {
    .button{
        margin: 0 15px;
    }
    .buttons{
        flex-direction: row;
        margin-top:25px;
    }
}
</style>