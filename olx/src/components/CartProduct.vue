<template>
    <div class="wrapper" v-if="product.cartProducts">
        <div class="left">
            <img :src="product.cartProducts.src" alt="">
            <div class="data">
                <div class="basic-data">
                    <p class="title">{{product.cartProducts.name}}</p>
                    <p class="desc">{{product.cartProducts.desc}}</p>
                </div>
                <div class="quantity">
                    <p class="quantity">
                        <span class="minus" @click="quantityDown">-</span> ILOŚĆ: {{product.quantity}}
                        <span class="plus" @click="quantityUp">+</span> 
                    </p>
                    <p class="price">CENA: {{Math.round((product.cartProducts.price * product.quantity) * 100) / 100}} PLN</p>
                </div>
            </div>
        </div>
        <div class="right">
            <p class="x" @click="deleteFromCart">x</p>
        </div>
    </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
export default {
    props:{
        product: Object,
    },
    computed:{
        ...mapGetters(['getQuantity'])
    },
    methods:{
        ...mapActions([
            'setCurrentProductCode'
        ]),
        deleteFromCart(){
            localStorage.removeItem(this.product.cartProducts.productCode);
            this.$parent.updateCart();
        },
        quantityUp(){
            this.setCurrentProductCode(this.product.cartProducts.productCode);
            let currentQuantity = parseInt(localStorage.getItem(this.product.cartProducts.productCode));
            if(currentQuantity < 99 && currentQuantity < this.getQuantity){
                currentQuantity = currentQuantity + 1;
                localStorage.setItem(this.product.cartProducts.productCode, currentQuantity);
                this.$parent.updateCart();
            }
        },
        quantityDown(){
            let currentQuantity = parseInt(localStorage.getItem(this.product.cartProducts.productCode));
            if(currentQuantity > 1){
                currentQuantity = currentQuantity - 1;
                localStorage.setItem(this.product.cartProducts.productCode, currentQuantity);
                this.$parent.updateCart();
            }
        }
    }
}
</script>
<style scoped>
.wrapper{
    width:75%;
    display:flex;
    justify-content: space-between;
}
.left{
    display:flex;
}
.data{
    display:flex;
    flex-direction: column;
    margin-left:20px;
    justify-content: space-between;
}
.title{
    font-size:1.5rem;
    font-weight:700;
}
.desc{
    font-size:0.7rem;
    font-weight:100;
}
.quantity{
    font-size:1rem;
    font-weight:500;
}
.quantity-nav{
    font-size:2rem;
}
.plus, .minus{
    font-size:2rem;
    position:relative;
    cursor: pointer;
    user-select: none;
}
.plus{
    bottom:-6px;
}
.minus{
    bottom:-4px;
}
.price{
    font-weight:700;
}
.x{
    font-size:1.5rem;
    position:relative;
    bottom:10px;
    color:rgb(225, 120, 0);
    font-weight: 700;
    cursor: pointer;
}
img{
    width:150px;
    height:150px;
}
</style>