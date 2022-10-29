<template>
    <div class="wrapper">
        <table class="table">
            <tr>
                <th>ID</th>
                <th>NAZWA PRODUKTU</th>
                <th>ILOŚĆ</th>
                <th>ROZMIAR</th>
                <th>CENA</th>
            </tr>
        </table>
        <div class="editWrapper">
            <div class="addProducts">
                <p class="big">DODAJ PRODUKT</p>
                <div class="inputs">
                    <div class="row">
                        <p>NAZWA PRODUKTU</p>
                        <input type="text" class="id">
                    </div>
                    <div class="row">
                        <p>KATEGORIA PRODUKTU</p>
                        <input type="text" class="id">
                    </div>
                    <div class="row">
                        <p>ILOŚĆ</p>
                        <input type="number" class="id">
                    </div>
                    <div class="row">
                        <p>CENA</p>
                        <input type="number" class="id">
                    </div>
                    <div class="row">
                        <p>ROZMIAR</p>
                        <select class="status">
                            <option value="1">S</option>
                            <option value="2">M</option>
                            <option value="3">L</option>
                            <option value="4">XL</option>
                            <option value="5">XXL</option>
                        </select>
                    </div>
                    <div class="row">
                        <p>OPIS</p>
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                    </div>
                    <div class="row">
                        <div class="row">
                            <p>ZDJĘCIE</p>
                            <input type="text" class="id">
                        </div>
                    </div>
                    <VButton class="button" value="DODAJ PRODUKT" @click="addProducts"/>
                </div>
            </div>
            <div class="deleteProducts">
                <p class="big">USUŃ PRODUKTY Z BAZY</p>
                <div class="inputs">
                    <div class="row">
                        <p>ID PRODUKTU</p>
                        <input type="number" class="id">
                    </div>
                    <div class="row">
                        <p>ILE CHCESZ USUNĄĆ</p>
                        <input type="number" class="id">
                    </div>
                    <VButton class="button" value="USUŃ PRODUKTY" @click="deleteProducts"/>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
import VButton from '../Button.vue';
export default {
    components:{
        VButton,
    },
    computed:{
        ...mapGetters([
            'getProducts',
            'getQuantity'
        ])
    },
    methods:{
        ...mapActions(['setCurrentProductCode']),
        addProducts(){
            //request do api i dodanie produktu
        },
        deleteProducts(){
            //request do api usuwajacy produkty z bazy
        }
    },
    mounted(){
        let products = this.getProducts
        let table = document.querySelector(".table");
        let rows = 1;

        for(let i = 0; i < products.length; i++)
        {
            let row = table.insertRow(rows);

            let cell1 = row.insertCell();
            let cell2 = row.insertCell();
            let cell3 = row.insertCell();
            let cell4 = row.insertCell();
            let cell5 = row.insertCell();

            cell1.appendChild(document.createTextNode(products[i].productCode));
            cell2.appendChild(document.createTextNode(products[i].name));
            this.setCurrentProductCode(products[i].productCode);
            cell3.appendChild(document.createTextNode(this.getQuantity));
            cell4.appendChild(document.createTextNode(products[i].size));
            cell5.appendChild(document.createTextNode(products[i].price));
            rows++;
        }
    }
}
</script>
<style scoped>
table{
    width:80%;
    margin-left:auto;
    margin-right:auto;
    margin-top:50px;
    border: 0.1rem solid black;
    border-radius:10px;
    padding-top:10px;
}
tr{
    border: 0.5rem solid transparent;
}
th{
    width:25%;
    border: 0.1rem solid black;
    border-radius:10px;
    padding-left:10px;
    padding-right:10px;
    background-color:rgb(232, 232, 232);
}
input{
    font-size:1rem;
    border-radius:10px;
    border: 0.1rem solid black;
    padding: 0 5px;
}
.big{
    font-size:1.5rem;
}
.row{
    margin-top:20px;
}
.addProducts, .deleteProducts{
    width:50%;
    margin-top:20px;
}
.button{
    width:190px;
    margin:10px 0;
}
.editWrapper{
    width:80%;
    margin-left:auto;
    margin-right:auto;
    display:flex;
}
</style>