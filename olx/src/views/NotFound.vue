<template>
    <div class="wrapper">
        <div class="row">
            <p class="title">404?</p>
        </div>
        <div class="row">
            <p class="text">Niestety strona, której szukasz, nie istnieje.</p>
        </div>
        <div class="row">
            <p class="subtext">Prawdopodobnie została ona usunięta, lub podany adres strony jest błędny.</p>
        </div>
        <div class="row">
            <router-link :to="'/'">
                <p class="subtext blue">WRÓĆ NA STRONĘ GŁÓWNĄ</p>
            </router-link>
        </div>
    </div>
</template>
<script>
import { RouterLink } from 'vue-router';
export default {
    
}
</script>
<style scoped>
*{
    font-family: "Red Hat Display";
}
.wrapper{
    display:flex;
    flex-direction:column;
}
.row{
    display:flex;
    justify-content: center;
    align-content: center;
}
.title{
    margin-top:150px;
    font-size:5.5rem;
    font-weight:700;
}
.text{
    margin-top:15px;
    font-size:1rem;
    font-weight:500;
}
.subtext{
    margin-top:10px;
    font-size:0.5rem;
    font-weight:300;
}
.blue{
    color:rgb(225, 120, 0);
}
@media screen and (min-width:490px){
    .text{
        font-size:1.5rem;
    }
    .subtext{
        font-size:0.75rem;
    }
}
@media screen and (min-width:950px){
    .text{
        font-size:3rem;
    }
    .subtext{
        font-size:1.25rem;
    }
}
</style>