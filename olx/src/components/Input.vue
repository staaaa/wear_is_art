<template>
    <div class="wrapper">
        <img :src="href">
        <input :type="type" :placeholder="placeholder">
    </div>
</template>
<script>
export default{
    props:{
        type:String,
        placeholder:String,
        href:String,
    },
}
</script>
<style scoped>
input{
    border:none;
    background-color:#f6f6f6;
    padding:10px 10px 10px 45px;
    border-radius:4px;
    font-size:0.975rem;
    font-family:'Red Hat Display';
    font-weight: 400;
    width:100%;
}
.wrapper{
    width:80%;
    position:relative;
}
img{
    width:1.25rem;
    height:1.25rem;
    color:white;
    display:block;
    position:absolute;
    top:12px;
    left:10px;
}
</style>