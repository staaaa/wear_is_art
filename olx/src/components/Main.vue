<template>
    <main>
        <TitlePage v-if="$store.getters.getIsTitlePage"/>
        <AddNewOffert v-if="$store.getters.getIsAddNewOffert"/>
    </main>
</template>
<script>
import TitlePage from "./main/TitlePage.vue"
import AddNewOffert from "./main/AddNewOffert.vue"

export default {
    components:{
        TitlePage,
        AddNewOffert,
    },
}
</script>
<style>
main{
    width:80%;
    height: auto;
    margin:auto;
    /* margin-top:100px; */
    padding-top: 100px;
}
</style>