<template>
    <div class="wrapper">
        <h2>Nazwa produktu</h2>
        <div class="middle">
            <img class="product-image" src="https://via.placeholder.com/450x450" alt="" srcset="">
            <div class="right">
                <p class="price">000.00PLN</p>
                <p class="description">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit atque deserunt dolorum harum, officia asperiores sapiente obcaecati ullam tempora alias natus ex nesciunt veniam accusantium expedita laudantium hic, minima neque!
                </p>
                <div class="buttons">
                    <VButton class="button" value="KUP"/>
                    <VButton class="button" value="KONTAKT"/>
                    <VButton class="button" value="PODOBNE"/>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import VButton from '../components/Button.vue'

export default {
    components:{
      VButton,  
    },
    props:{
        title:String,
        price:String,
        imgsrc:String,
    }
}
</script>
<style scoped>
.wrapper{
    display:flex;
    flex-direction: column;
}
h2{
    margin-top:20px;
    margin-bottom:20px;
}
h2, p{
    text-align:center;
    font-family:'Red Hat Display';
    font-weight: 700;
    padding:10px 0;
}
.price{
    font-size:2.5rem;
}
.right{
    margin-left:50px;
}
.description{
    width:350px;
    font-size:1.2rem;
    text-align: justify;
}
.middle{
    display:flex;
    justify-content: center;

}
img{
    width:450px;
}
.button{
    width:100px;
}
.buttons{
    margin-top:50px;
    display:flex;
    justify-content: space-around;
}
@media screen and (max-width: 900px){
.middle{
    flex-direction: column;
}
img, .description{
    margin:auto;
}
img{
    width:325px;
}
.description{
    width:300px;
}
.right{
    margin:0;
}
.buttons{
    justify-content: center;
}
.button{
    width:100px;
    margin-right:5px;
    margin-left:5px;
}
}
</style>