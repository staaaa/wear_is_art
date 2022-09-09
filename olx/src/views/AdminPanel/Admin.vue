<template>
    <div class="wrapper">
        <div class="navbar">
            <div class="section">
                <router-link to="/">
                    <p>STRONA GŁÓWNA</p>
                </router-link>
            </div>
            <div class="section" @click="showOrders">
                <p>ZAMÓWIENIA</p>
            </div>
            <div class="section" @click="showProducts">
                <p>PRODUKTY</p>
            </div>
            <div class="section" @click="showAdminPanel">
                <p>PANEL ADMINISTRATORA</p>
            </div>
        </div>
        <Line class="line"/>
        <Orders class="dontShowOrders"/>
        <Products class="dontShowProducts"/>
    </div>
</template>
<script>
import { RouterLink } from 'vue-router';
import Line from '../../components/Line.vue';
import Orders from '../../components/AdminPanel/Orders.vue'
import Products from '../../components/AdminPanel/Products.vue';
export default {
    components:{
        Line,
        Orders,
        Products,
    },
    mounted(){
        //TODO: TEST IF A USER IS INDEED AN ADMIN!!!!!!!!!!
    },
    data(){
        return{
            adminHomePageVisible: true,
            ordersVisible: false,
            productsVisible: false,
        }
    },
    methods:{
        showOrders(){
            if(!this.ordersVisible)
            {
                this.hideProducts();
                let orders = document.querySelector(".dontShowOrders");
                orders.classList.add('showOrders');
                orders.classList.remove('dontShowOrders');
                this.ordersVisible = true;
            }
        },
        hideOrders(){
            if(this.ordersVisible)
            {
                let orders = document.querySelector(".showOrders");
                orders.classList.add('dontShowOrders');
                orders.classList.remove('showOrders');
                this.ordersVisible = false;
            }
        },
        showProducts(){
            if(!this.productsVisible)
            {
                this.hideOrders();
                let products = document.querySelector(".dontShowProducts");
                products.classList.add('showProducts');
                products.classList.remove('dontShowProducts');
                this.productsVisible = true;
            }
        },
        hideProducts(){
            if(this.productsVisible)
            {
                let products = document.querySelector(".showProducts");
                products.classList.add('dontShowProducts');
                products.classList.remove('showProducts');
                this.productsVisible = false;
            }
        },
        showAdminPanel(){
            this.hideProducts();
            this.hideOrders();
        }
    }
}
</script>
<style scoped>
*{
    font-family:'Red Hat Display';
    font-weight: 700;
}
.navbar{
    display:flex;
    width:80%;
    margin-left:auto;
    margin-right: auto;
    margin-top:20px;
    margin-bottom:10px;
    font-size:1.2rem;
}
.section{
    width:25%;
    text-align: center;
    display:flex;
    justify-content: center;
    cursor:pointer;
}
.line{
    margin-left:auto;
    margin-right:auto;
}
img{
    width:25px;
    height:25px;
    cursor: pointer;
}
.showOrders, .showProducts{
    display:initial;
}
.dontShowOrders, .dontShowProducts{
    display:none;
}
</style>