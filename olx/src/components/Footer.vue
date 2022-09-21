<template>
    <div>
        <Line/>
        <div class="wrapper">
            <div class="section">
                <div class="row title">
                    <p>PRODUKTY</p>
                </div>
                <div class="row">
                    <router-link to="/t-shirt">
                        <p>T-SHIRTY</p>
                    </router-link>
                </div>
            </div>
            <div class="section">
                <div class="row title">
                    <router-link :to="'/regulamin'">
                        <p>REGULAMIN</p>
                    </router-link>
                </div>
                <div class="row title">
                    <router-link :to="'/kontakt'">
                        <p>KONTAKT</p>
                    </router-link>
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
import { RouterLink, RouterView } from 'vue-router'
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
    flex-direction: column;
}
.section{
    width:100%;
    display:flex;
    justify-content: start;
    flex-direction: column;
    margin-bottom:20px;
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
@media screen and (min-width: 600px) {
    .wrapper{
        flex-direction: row;
    }
    .section{
        width:33%;
        margin-bottom:0;
    }
}
</style>