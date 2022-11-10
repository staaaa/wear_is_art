<template>
    <div class="wrapper">
        <router-link :to="'/'+ category + '/' + to">
            <img class="img" :src="src" alt="">
            <p class="name">{{name}}</p>
            <p class="price">{{price}}</p>
        </router-link>
    </div>
</template>
<script>
export default {
    props:{
        src:String,
        name:String,
        price:String,
        to:String,
        category:String,
    },
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
img{
    border-radius:20px;
    box-shadow: rgba(0, 0, 0, 0.25) 1.95px 1.95px 2.6px;
}
</style>