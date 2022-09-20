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
                        <p>
                            <span class='big'>LOGIN: </span>
                            <span class="show">{{login}}</span>
                            <input type="text" class="notShow" :placeholder="login">
                        </p>
                        <p>
                            <span class='big'>IMIĘ: </span>
                            <span class="show">{{name}}</span>
                            <input type="text" class="notShow" :placeholder="name">
                        </p>
                        <p>
                            <span class='big'>NAZWISKO: </span>
                            <span class="show">{{surname}}</span>
                            <input type="text" class="notShow" :placeholder="surname">
                        </p>
                        <p>
                            <span class='big'>ADRES E-MAIL: </span> 
                            <span class="show">{{email}}</span>
                            <input type="text" class="notShow" :placeholder="email">
                        </p>
                        <p>
                            <span class='big'>NUMER TELEFONU: </span>
                            <span class="show">{{phone}}</span>
                            <input type="text" class="notShow" :placeholder="phone">
                        </p>
                        <VButton 
                        class="button" 
                        :value="changingCredentials? 'ZAPISZ ZMIANY' : 'ZMIEŃ DANE PODSTAWOWE'" 
                        @click="changeCredentials()"/>
                    </div>
                </div>
                <div class="row">
                    <div class="column">
                        <p class="subtitle">DANE ADRESOWE</p>
                        <p>
                            <span class='big'>ULICA: </span>
                            <span class="show">{{street}}</span>
                            <input type="text" class="notShow" :placeholder="street">
                        </p>
                        <p>
                            <span class='big'>NUMER BUDYNKU: </span>
                            <span class="show">{{buildingNumber}}</span>
                            <input type="text" class="notShow" :placeholder="buildingNumber">
                        </p>
                        <p>
                            <span class='big'>NUMER MIESZKANIA: </span>
                            <span class="show">{{flatNumber}}</span>
                            <input type="text" class="notShow" :placeholder="flatNumber">
                        </p>
                        <p>
                            <span class='big'>KOD POCZTOWY: </span>
                            <span class="show">{{zipCode}}</span>
                            <input type="text" class="notShow" :placeholder="zipCode">
                        </p>
                        <p>
                            <span class='big'>KRAJ: </span>
                            <span class="show">{{country}}</span>
                            <input type="text" class="notShow" :placeholder="country">
                        </p>
                        <VButton 
                        class="button" 
                        :value="changingAdress? 'ZAPISZ ZMIANY' : 'ZMIEŃ DANE ADRESOWE'"
                        @click="changeAdress"/>
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
        <Footer/>
    </div>
</template>
<script>
import Navbar from '../components/Navbar.vue';
import VButton from '../components/Button.vue';
import Footer from '../components/Footer.vue';
import { mapGetters } from 'vuex';
export default {
    components:{
        Navbar,
        VButton,
        Footer,
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

            changingCredentials: false,
            changingAdress: false,
        }
    },
    methods:{
        changeCredentials(){
            let labels = document.querySelectorAll(".show");
            let inputs = document.querySelectorAll(".notShow");

            for(let i = 0; i <= 4; i++)
            {
                labels[i].classList.add("notShow");
                labels[i].classList.remove("show");

                inputs[i].classList.add("show");
                inputs[i].classList.remove("notShow");
            }
            if(!this.changingCredentials)
            {
                this.changingCredentials = true;
            }
            else
            {
                //request do api o zmiane danych
                this.changingCredentials = false;    
            }
        },
        changeAdress(){
            let labels = document.querySelectorAll(".show");
            let inputs = document.querySelectorAll(".notShow");

            for(let i = 5; i <= 9; i++)
            {
                labels[i].classList.add("notShow");
                labels[i].classList.remove("show");

                inputs[i].classList.add("show");
                inputs[i].classList.remove("notShow");
            }
            if(!this.changingAdress)
            {
                this.changingAdress = true;
            }
            else
            {
                //request do api o zmiane danych
                this.changingAdress = false;    
            }
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
input{
    font-size:1rem;
    border-radius:10px;
    border: 0.1rem solid black;
    padding: 0 5px;
}
.info-wrapper{
    display:flex;
    justify-content: left;
    flex-direction: column;
    width:80%;
    margin-left:auto;
    margin-right:auto;
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
.show{
    display:initial;
}
.notShow{
    display:none;
}
</style>