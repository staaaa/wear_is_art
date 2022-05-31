<template>
    <div class="wrapper">
        <input type="submit" :value="value">
    </div>
</template>
<script>
export default {
    props:{
        value:String,
    },
}
</script>
<style scoped>
input{
border:none;
background-color:#101010;
color:#fefefe;
padding:10px;
border-radius:4px;
font-size:0.975rem;
font-family:'Red Hat Display';
font-weight: 700;
width:100%;
}
.wrapper{
    width:80%;
}
</style>