<template>
<div class="wrapper">
    <Navbar/>
    <div class="inner-wrapper">
        <div class="row">
            <p class="title">PŁATNOŚĆ</p>
        </div>
        <div class="row">
            <p class="subtitle">PRODUKTY Z KOSZYKA</p>
        </div>
        <div v-for="cartProduct in allCartThings" v-bind:key="cartProduct" class="row products">
            <CartProduct :product='cartProduct'/>
        </div>
        <VLine class="line"/>
        <span v-if="!getIsLogged">
            <div class="row">
                <p class="subtitle">DANE DO WYSYŁKI</p>
            </div>
            <div class="row">
                <div class="row-form">
                    <div class="form-wrapper">
                        <VInput class="input" type="text" placeholder="IMIĘ" href="../../static/assets/icons/user-solid.svg"/>
                        <VInput class="input" type="text" placeholder="NAZWISKO" href="../../static/assets/icons/user-solid.svg"/>
                    </div>
                    <div class="form-wrapper">
                        <VInput class="input" type="text" placeholder="ADRES E-MAIL" href="../../static/assets/icons/user-solid.svg"/>
                        <VInput class="input" type="text" placeholder="NUMER TELEFONU" href="../../static/assets/icons/user-solid.svg"/>
                    </div>
                </div>
            </div>
            <VLine class="line"/>
        </span>
        <div class="row">
            <p class="subtitle">DANE ADRESOWE</p>
        </div>
        <div class="row">
            <div class="row-form">
                <div class="form-wrapper">
                    <VInput class="input" type="text" placeholder="ULICA" href="../../static/assets/icons/user-solid.svg"/>
                    <VInput class="input" type="text" placeholder="NUMER BUDYNKU" href="../../static/assets/icons/user-solid.svg"/>
                    <VInput class="input" type="text" placeholder="NUMER MIESZKANIA" href="../../static/assets/icons/user-solid.svg"/>
                    <VInput class="input" type="text" placeholder="KOD POCZTOWY" href="../../static/assets/icons/user-solid.svg"/>
                    <VInput class="input" type="text" placeholder="MIASTO" href="../../static/assets/icons/user-solid.svg"/>
                    <VInput class="input" type="text" placeholder="KRAJ" href="../../static/assets/icons/user-solid.svg"/>
                </div>
                <div class="form-wrapper">
                    <p class="subtitlesmall">SPOSÓB WYSYŁKI</p>
                    <form action="">
                        <VRadio v-bind:text="'POCZTA POLSKA (9.99pln)'"/>
                        <VRadio v-bind:text="'DHL (11.99pln)'"/>
                        <VRadio v-bind:text="'DPD (10.99pln)'"/>
                    </form>
                </div>
            </div>
        </div>
        <VLine class="line"/>
        <div class="row">
            <p class="subtitle">FORMA PŁATNOŚCI</p>
        </div>
        <div class="row">
            <div class="form-wrapper">
                <form action="">
                    <VRadio v-bind:text="'BLIK'"/>
                    <VRadio v-bind:text="'PRZELEWY24'"/>
                    <VRadio v-bind:text="'IDK'"/>
                </form>
            </div>
        </div>
        <div class="row">
            <VButton :value="'PRZEJDŹ DO PODSUMOWANIA'" class="button" @click="pushSummarize"/>
        </div>
    </div>
    <Footer/>
</div>    
</template>
<script>
import Navbar from '../components/Navbar.vue';
import CartProduct from '../components/CartProduct.vue'
import Footer from '../components/Footer.vue';
import VButton from '../components/Button.vue'
import VInput from '../components/Input.vue'
import VLine from '../components/Line.vue'
import VRadio from '../components/Radio.vue'
import { mapActions, mapGetters } from 'vuex';
export default {
    components:{
        Navbar,
        CartProduct,
        Footer,
        VButton,
        VInput,
        VLine,
        VRadio,
    },
    computed:{
        ...mapGetters([
            'getProducts',
            'getIsLogged',
            'getUser',
            'getUserOrderData',
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
        ...mapActions([
            'setUserOrderData',
        ]),
        updateCart(){
            this.cartProducts = [];
            let allProducts = this.getProducts;

            let j = 0;
            for(let i = 0; i < allProducts.length; i++){
                if(localStorage.getItem(allProducts[i].productCode) != null){
                    this.cartProducts[j] = allProducts[i];
                    this.quantity[j] = localStorage.getItem(allProducts[i].productCode);
                    j++;
                }
            }
        },
        pushSummarize(){
            let userData = [];
            let inputs = document.querySelectorAll(".input > input");
            if(!this.getIsLogged){
                for(let i = 0; i < inputs.length; i++){
                    userData[i] = inputs[i].value;
                }
            }
            else{
                userData[0] = this.getUser[0].name;
                userData[1] = this.getUser[0].surname;
                userData[2] = this.getUser[0].email;
                userData[3] = this.getUser[0].phone;
                for(let i = 0; i < inputs.length; i++){
                    userData[i+4] = inputs[i].value;
                }
            }
            let orderData = [];
            for(let i = 0; i < this.cartProducts.length; i++){
                orderData[i] = {'productCode' : this.cartProducts[i].productCode, 'quantity' : this.quantity[i]};
            }
            let userOrderData = [];
            userOrderData[0] = userData;
            userOrderData[1] = orderData;
            this.setUserOrderData(userOrderData);
            this.$router.push('/podsumowanie');
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
.row-form{
    width:100%;
    display:flex;
    justify-content: center;
    align-content: center;
    margin-bottom:10px;
}
.line{
    margin-top:60px;
    margin-left:auto;
    margin-right:auto;
}
.title{
    font-size:1.5rem;
    font-weight:700;
    margin-top:20px;
}
.subtitle{
    font-size:1rem;
    font-weight:500;
    margin-top:10px;
    margin-bottom:20px;
}
.subtitlesmall{
    font-size:0.8rem;
    font-weight:300;
    margin-top:10px;
    margin-bottom:20px;
    text-align: center;
}
@media screen and (min-width:600px){
    .title{
        font-size:2rem;
    }
    .subtitle{
        font-size:1.5rem;
    }
    .subtitlesmall{
        font-size:1rem;
    }
}
.button{
    width:250px;
    margin: 0 15px;
}
.form-wrapper{
    width:45%;
}
.input{
    margin-top:20px;
    margin-left:auto;
    margin-right:auto;
}
.products{
    display:flex;
    justify-content: left;
    margin-left:10%;
}
.button{
    width:300px;
}
</style>