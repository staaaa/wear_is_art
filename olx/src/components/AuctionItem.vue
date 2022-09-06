<template>
    <div class="wrapper" @click="setProductId">
        <router-link :to="to">
            <img class="img" :src="src" alt="">
            <p class="name">{{name}}</p>
            <p class="price">{{price}}</p>
        </router-link>
    </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
    props:{
        src:String,
        name:String,
        price:String,
        to:String,
        productId:String,
    },
    methods:{
        ...mapActions([
            'setCurrentProductId'
        ]),
        setProductId()
        {
            this.setCurrentProductId(this.productId);
        }
    }
}
</script>
<style scoped>
.wrapper{
    text-align: center;
    width:300px;
    height:350px;
}
p{
    text-align: center;
    font-size:0.9rem;
    font-family:'Red Hat Display';
}
.name{
    font-weight: 700;
}
.price{
    font-weight: 500;
    font-size:0.775rem;
}
</style>