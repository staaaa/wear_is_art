<template>
    <div class="wrapper">
        <div class="left">
            <img :src="product.src" alt="">
            <div class="data">
                <div class="basic-data">
                    <p class="title">{{product.name}}</p>
                    <p class="desc">{{product.desc}}</p>
                </div>
                <div class="quantity">
                    <p class="quantity">
                        <span class="minus" @click="quantityDown">-</span> ILOŚĆ: {{product.quantity}}
                        <span class="plus" @click="quantityUp">+</span> 
                    </p>
                    <p class="price">CENA: {{Math.round((product.price * product.quantity) * 100) / 100}} PLN</p>
                </div>
            </div>
        </div>
        <div class="right">
            <p class="x" @click="deleteFromCart">x</p>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        product: Object,
    },
    methods:{
        deleteFromCart(){
            localStorage.removeItem(this.product.id);
            this.$parent.updateCart();
        },
        quantityUp(){
            let currentQuantity = parseInt(localStorage.getItem(this.product.id));
            if(currentQuantity < 99){
                currentQuantity = currentQuantity + 1;
                localStorage.setItem(this.product.id, currentQuantity);
                this.$parent.updateCart();
            }
        },
        quantityDown(){
            let currentQuantity = parseInt(localStorage.getItem(this.product.id));
            if(currentQuantity > 1){
                currentQuantity = currentQuantity - 1;
                localStorage.setItem(this.product.id, currentQuantity);
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