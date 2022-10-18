<template>
    <div class="wrapper">
        <Navbar/>
        <h2>
            <router-link :to="'/'+this.$route.params.category">
                <div class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
                    </svg>
                </div>
            </router-link>
            {{product.name}}
        </h2>
        <div class="middle">
            <img class="product-image" :src="product.src" alt="" srcset="">
            <div class="right">
                <p class="price">{{product.price}}PLN</p>
                <p class="description">
                    {{product.desc}}
                </p>
                <div class="buttons">
                    <div class="quantity">
                        <input class="number-input" type="number" min="1" :max="product.quantity" step="1" value="1">
                        <div class="quantity-nav">
                            <div class="quantity-button quantity-up" @click="quantityUp"><span class="plus">+</span></div>
                            <div class="quantity-button quantity-down" @click="quantityDown">-</div>
                        </div>
                    </div>
                    <VButton class="button" value="DODAJ DO KOSZYKA" @click="addToCart"/>
                </div>
                <p class="count-info-1"></p>
                <p class="count-info-2"></p>
            </div>
        </div>
        <Footer/>
    </div>
</template>
<script>
import VButton from '../components/Button.vue'
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue'
import { RouterLink } from 'vue-router';
import { mapGetters, mapActions } from 'vuex';
export default {
    computed:{
        ...mapGetters([
            'getProducts',
        ])
    },
    data(){
        return{
            product: Object,
        }
    },
    mounted(){
        this.product = this.getProducts[this.$route.params.productId];
    },  
    components:{
      VButton,
      Navbar,
      Footer,
    },
    methods:{
        ...mapActions([
            'addCartProducts',
            'setModalCart',
        ]),
        addToCart(){
            let quantityMoreThenZero = false;
            if(this.product.quantity > 0)
            {
                quantityMoreThenZero = true;
            }
            else quantityMoreThenZero = false;
            if(quantityMoreThenZero)
            {
                let input = document.querySelector("input[type='number']").value;
                let currentQuantity = localStorage.getItem(this.product.id);
                
                if(currentQuantity != null){
                    if(parseInt(input) + parseInt(currentQuantity) <= this.product.quantity)
                    {
                        localStorage.setItem(this.product.id, parseInt(currentQuantity) + parseInt(input));
                        this.setModalCart(true);
                        document.querySelector('.count-info-1').innerHTML = "";
                        document.querySelector('.count-info-2').innerHTML = "";
                    }
                    else{
                        document.querySelector('.count-info-1').innerHTML = "NIE MOŻNA DODAĆ WIĘCEJ PRODUKTÓW DO KOSZYKA.";
                        document.querySelector('.count-info-2').innerHTML = "LICZBA PRODUKTOW W MAGAZYNIE: " + this.product.quantity; 
                    }
                }
                else if(input <= this.product.quantity){
                    localStorage.setItem(this.product.id, input);
                    this.setModalCart(true);
                }
                else{
                    document.querySelector('.count-info-1').innerHTML = "NIE MOŻNA DODAĆ WIĘCEJ PRODUKTÓW DO KOSZYKA.";
                    document.querySelector('.count-info-2').innerHTML = "LICZBA PRODUKTOW W MAGAZYNIE: " + this.product.quantity; 
                }
            }
            
        },
        //dodac funkcje ktora uniemozliwa wpisanie odrecznie wiekszej ilosci niz mozliwa
        quantityUp(){
            let input = document.querySelector("input[type='number']");
            if(input.value != 99 && input.value < this.product.quantity){
                input.value++;
            }
        },
        quantityDown(){
            let input = document.querySelector("input[type='number']");
            if(input.value != 1){
                input.value--;
            }
        },
    }
}
</script>
<style scoped>
.wrapper{
    display:flex;
    flex-direction: column;
}
h2{
    margin-top:20px;
    margin-bottom:20px;
}
h2, p{
    text-align:center;
    font-family:'Red Hat Display';
    font-weight: 700;
    padding:10px 0;
}
.price{
    font-size:2.5rem;
}
.right{
    margin-left:50px;
}
.description{
    width:350px;
    font-size:1.2rem;
    text-align: justify;
}
.middle{
    display:flex;
    justify-content: center;

}
img{
    width:450px;
}
.button{
    width:auto;
}
.buttons{
    margin-top:50px;
    display:flex;
    justify-content: space-around;
}
.icon{
    width:32px;
    height: 32px;
    position:absolute;
    left:11.2%;
    color:black;
    display:none;
}
@media screen and (min-width: 650px){
    .icon{
        top: 92px;
        display:initial
    }
}
@media screen and (max-width: 900px){
.middle{
    flex-direction: column;
}
img, .description{
    margin:auto;
}
img{
    width:325px;
}
.description{
    width:300px;
}
.right{
    margin:0;
}
.buttons{
    justify-content: center;
}
.button{
    margin-right:5px;
    margin-left:5px;
}
}
.quantity {
  position: relative;
}
input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button
{
  -webkit-appearance: none;
  margin: 0;
}

input[type=number]
{
  -moz-appearance: textfield;
}

.quantity input {
    font-family: 'Red Hat Display' ;
    width: 45px;
    height: 42px;
    line-height: 1.65;
    float: left;
    display: block;
    padding: 0;
    padding-left: 15px;
    border: 2px solid black;
    border-radius:5px;
}

.quantity input:focus {
    outline: 0;
}

.quantity-nav {
    float: left;
    position: relative;
    height: 42px;
    width:22px;
}
.quantity-button{
    text-align: center;
    font-size:1rem;
    cursor: pointer;
    user-select: none;
}
.quantity-up{
    border-bottom:2px solid black;
}
.count-info-1, .count-info-2{
    font-size:1rem;
    color:red;
}
</style>