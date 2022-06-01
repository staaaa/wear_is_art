<template>
    <div class="wrapper">
        <img class="img" :src="src" alt="">
        <p class="name">{{name}}</p>
        <p class="price">{{price}}</p>
    </div>
</template>
<script>
export default {
    props:{
        src:String,
        name:String,
        price:String,
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