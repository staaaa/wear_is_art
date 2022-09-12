<template>
    <div class="wrapper">
        <Navbar/>
        <div class="row title">
            <p class='huge'>DANE UŻYTKOWNIKA</p>
        </div>
        <div class="info-wrapper">
            <div class="column">
                <div class="row">
                    <div class="column">
                        <p class="subtitle">DANE PODSTAWOWE</p>
                        <p><span class='big'>LOGIN: </span>{{login}}</p>
                        <p><span class='big'>IMIĘ: </span>{{name}}</p>
                        <p><span class='big'>NAZWISKO: </span>{{surname}}</p>
                        <p><span class='big'>ADRES E-MAIL:</span> {{email}}</p>
                        <p><span class='big'>NUMER TELEFONU:</span> {{phone}}</p>
                        <VButton class="button" value="ZMIEŃ DANE PODSTAWOWE"/>
                    </div>
                </div>
                <div class="row">
                    <div class="column">
                        <p class="subtitle">DANE ADRESOWE</p>
                        <p><span class="big">ULICA: </span>{{street}}</p>
                        <p><span class="big">NUMER BUDYNKU: </span>{{buildingNumber}}</p>
                        <p><span class="big">NUMER MIESZKANIA: </span>{{flatNumber}}</p>
                        <p><span class="big">KOD POCZTOWY: </span>{{zipCode}}</p>
                        <p><span class="big">KRAJ: </span>{{country}}</p>
                        <VButton class="button" value="ZMIEŃ DANE ADRESOWE"/>
                    </div>
                </div>
            </div>
            <div class="column">
                <div class="row">
                    <div class="column">
                        <p class="subtitle">ZŁOŻONE ZAMOWIENIA</p>
                        <div class="order" v-for="order in orders" v-bind:key="order">
                            <p>ZAMÓWIENIE NUMER {{order.orderCode}}: </p>
                            <p class="products" v-for="product in order.products" v-bind:key="product">
                                <span class="big">
                                    {{product.name}} : 
                                    {{product.quantity}}
                                </span>
                            </p>
                            <p><span class="big">STATUS ZAMÓWIENIA: </span> {{order.status}}</p>
                            <p><span class="big">CENA: </span> {{order.price}} PLN</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Navbar from '../components/Navbar.vue';
import VButton from '../components/Button.vue'
import { mapGetters } from 'vuex';
export default {
    components:{
        Navbar,
        VButton,
    },
    computed:{
        ...mapGetters([
            'getUser',
            'getOrders'
        ])
    },
    data(){
        return{
            login: String,
            name: String,
            surname: String,
            email: String,
            phone: String,
            street: String,
            buildingNumber: String,
            flatNumber: String,
            zipCode: String,
            country: String,

            orders: Array,
        }
    },
    mounted(){
        let user = this.getUser;
        this.orders = this.getOrders;
        
        this.login = user[0].login;
        this.name = user[0].name;
        this.surname = user[0].surname;
        this.email = user[0].email;
        this.phone = user[0].phone;
        this.street = user[0].street;
        this.buildingNumber = user[0].buildingNumber;
        this.flatNumber = user[0].flatNumber;
        this.zipCode = user[0].zipCode;
        this.country = user[0].country;
    }
}
</script>
<style scoped>
.info-wrapper{
    display:flex;
    justify-content: left;
    flex-direction: column;
}
@media screen and (min-width: 780px) {
    .info-wrapper{
        flex-direction:row;
    }
}
.row{
    display:flex;
    flex-direction: row;
    width:80%;
    height:auto;
    font-family: 'Red Hat Display';
    margin-top:15px;
    margin-bottom:15px;
    padding-left:20px;
    margin-left: auto;
    margin-right: auto;
}
.column{
    display:flex;
    flex-direction:column;
    width:100%;
    font-size:1.25rem;
}
.title{
    justify-content: center;
    align-content: center;
    flex-direction: row !important;
    width:100%;
}
.subtitle{
    font-size:1.5rem;
    font-weight:700;
}
.huge{
    font-size:2rem;
    font-weight:700;
}
.big{
    font-weight:500;
}
.order{
    margin-left:15px;
    margin-bottom:20px;
}
.products{
    margin-left:30px;
}
.button{
    margin-top:10px;
    width:240px;
}
</style>