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
                    <VButton class="button" value="KUP"/>
                    <VButton class="button" value="KONTAKT"/>
                    <VButton class="button" value="PODOBNE"/>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import VButton from '../components/Button.vue'
import Navbar from '../components/Navbar.vue';
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
            product: Object
        }
    },
    mounted(){
        this.product = this.getProducts[this.$route.params.productId];
    },  
    components:{
      VButton,
      Navbar,
    },
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
    width:100px;
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
    top:99px;
    color:black;
}
@media screen and (min-width: 446px){
    .icon{
        top: 85px;
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
    width:100px;
    margin-right:5px;
    margin-left:5px;
}
}
</style>