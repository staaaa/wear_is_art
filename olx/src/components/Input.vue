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
    font-size:0.5rem;
    font-family:'Red Hat Display';
    font-weight: 400;
    width:100%;
}
img{
    width:1rem;
    height:1rem;
    color:white;
    display:block;
    position:absolute;
    top:8px;
    left:8px;
}
@media screen and (min-width: 600px){
    input{
        font-size: 0.975rem;
    }
    img{
        width:1.25rem;
        height:1.25rem;
        top:12px;
        left:10px
    }
}
.wrapper{
    width:80%;
    position:relative;
}
</style>