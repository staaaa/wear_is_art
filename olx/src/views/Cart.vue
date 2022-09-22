<template>
    <div class="wrapper">
        <Navbar/>
        <div class="inner-wrapper">
            <div class="row">
                <p class="title">KOSZYK</p>
            </div>
            <div class="row">

            </div>
        </div>
        <Footer/>
    </div>
</template>
<script>
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
import { mapGetters } from 'vuex';
export default {
    components:{
        Navbar,
        Footer,
    },
    computed:{
        ...mapGetters([
            'getProducts',
        ])
    },
    data(){
        return{
            products: Object,
        }
    },
    mounted(){
        let allProducts = this.getProducts;
        for(let i = 0; i < allProducts.length; i++){
            
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
}
.title{
    font-size:2rem;
    font-weight:700;
    margin-top:20px;
}
</style>