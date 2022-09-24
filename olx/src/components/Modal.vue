<template>
    <div v-if='getModalCart' class="wrapper-modal">
        <p class="x" @click="closeModal">x</p>
        <div class="inner-wrapper-modal">
            <p>PRZEDMIOT ZOSTAŁ DODANY DO KOSZYKA.</p>
        </div>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    methods:{
        ...mapActions(['setModalCart']),
        closeModal(){
            this.setModalCart(false);
        }
    },
    computed:{
        ...mapGetters([
            'getModalCart',
        ])
    },
}
</script>
<style scoped>
.inner-wrapper-modal{
    z-index: 1000;
    position:absolute;
    top: calc(50% - 150px);
    left:calc(50% - 150px);
    width:300px;
    height:150px;
    background-color:black;
    opacity: 0.8;
    border-radius: 10px;
    display:flex;
    font-family: 'Red Hat Display';
    padding: 20px
}
p{
    color: white;
    text-align: center;
    font-size:1.5rem;
    font-weight:300;
}
.x{
    position:absolute;
    top: calc(50% - 180px);
    left:calc(50% + 170px);
    color:rgb(225, 120, 0);
    font-family: 'Red Hat Display';
    font-size:2rem;
    font-weight:700;
    cursor: pointer;
    z-index:1000;
}
</style>