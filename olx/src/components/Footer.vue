<template>
    <div>
        <Line/>
        <div class="wrapper">
            <div class="section">
                <div class="row title">
                    <p>PRODUKTY</p>
                </div>
                <div class="row">
                    <p>T-SHIRTY</p>
                </div>
            </div>
            <div class="section">
                <div class="row title">
                    <p>KONTAKT</p>
                </div>
                <div class="row">
                    <p>maniek_koks@gmail.com</p>
                </div>
            </div>
            <div class="section">
                <div class="row title">
                    <p>STRONA WYKONANA PRZEZ:</p>
                </div>
                <div class="row">
                    <p>STANISŁAW BOŻYCH</p>
                </div>
                <div class="row">
                    <p>KEWIN PATELCZYK</p>
                </div>
                <div class="row">
                    <p>KAMIL KLAWIKOWSKI</p>
                </div>
            </div>
        </div>
    </div>
    
</template>
<script>
import Line from './Line.vue';
export default {
    components:{
        Line,
    }
}
</script>
<style scoped>
.wrapper{
    display:flex;
    width:80%;
    margin-left:auto;
    margin-right: auto;
    margin-top:20px;
    margin-bottom:30px;
    justify-content: space-between;
}
.section{
    width:33%;
    display:flex;
    justify-content: start;
    flex-direction: column;
}
.row{
    display:flex;
    width:100%;
    justify-content: center;
}
p{
    text-align: center;
    font-size:0.9rem;
    font-family:'Red Hat Display';
}
.title{
    font-weight: 700;
}
</style>