<template>
    <div class="wrapper">
        <Navbar/>
        <h2>Najciekawsze oferty</h2>
        <p>Promocje wybrane specjalnie dla Ciebie.</p>
        <div class="items">
            <div class="item">
                <AuctionVue src="https://via.placeholder.com/300" name="Bluza NIKE" price="299.99PLN"/>
            </div>
            <div class="item">
                <AuctionVue src="https://via.placeholder.com/300" name="Bluza NIKE" price="299.99PLN"/>
            </div>
            <div class="item">
                <AuctionVue src="https://via.placeholder.com/300" name="Bluza NIKE" price="299.99PLN"/>
            </div>
            <div class="item">
                <AuctionVue src="https://via.placeholder.com/300" name="Bluza NIKE" price="299.99PLN"/>
            </div>
        </div>
    </div>
</template>
<script>
import Navbar from '../components/Navbar.vue'
import RegisterVue from './Register.vue'
import AuctionVue from '../components/AuctionItem.vue'
export default {
    components:{
        Navbar,
        RegisterVue,
        AuctionVue,
    }
}
</script>
<style scoped>
/* dla desktopu */
.items{
    display:grid;
    grid-template-columns: auto;
    grid-column-gap:20px;
    width:80%;
    margin:auto;
}
h2{
    margin-top:20px;
}
h2, p{
    text-align:center;
    font-family:'Red Hat Display';
    font-weight: 700;
    padding:10px 0;
}
.item{
    margin-top:20px;
    margin-bottom:20px;
    display:flex;
    justify-content: center;
    align-items: center;
}
@media screen and (min-width: 800px){
    .items{
        display:grid;
        grid-template-columns: auto auto;
    }
}
@media screen and (min-width: 1200px){
    .items{
        display:grid;
        grid-template-columns: auto auto auto;
    }
}
@media screen and (min-width: 1400px){
    .items{
        display:grid;
        grid-template-columns: auto auto auto auto;
    }
}
</style>