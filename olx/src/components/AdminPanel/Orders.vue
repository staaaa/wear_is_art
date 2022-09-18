<template>
    <div class="wrapper">
        <table class="tableOrders">
            <tr>
                <th>ID</th>
                <th>NR ZAMÓWIENIA</th>
                <th>DANE</th>
                <th>CENA</th>
                <th>STATUS</th>
            </tr>
        </table>
        <div class="changeStatus">
            <p>ZMIEŃ STATUS</p>
            <div class="inputs">
                <p>ID:</p>
                <input type="number" class="id">
                <p>STATUS:</p>
                <select class="status">
                    <option value="1">OPŁACONE</option>
                    <option value="2">W REALIZACJI</option>
                    <option value="3">WYSŁANO</option>
                    <option value="4">DOSTARCZONO</option>
                </select>
                <VButton class="button" value="ZMIEŃ STATUS" @click="changeStatus"/>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
import VButton from '../Button.vue';
export default {
    components:{
        VButton,
    },
    computed:{
        ...mapGetters([
            'getOrders',
        ])
    },
    methods:{
        changeStatus(){
            //zapytanie do bazy danych i zmiana statusu
        },
    },
    mounted(){
        //W TYM MIEJSCU ZAPYTANIE DO BAZY I POBRANIE CAŁEJ LISTY ORDEROW A NIE TYCH ZE STORA
        //TE ZE STORA TO TYLKO OBECNEGO UZYTKOWNIKA!!!
        let orders = this.getOrders
        let table = document.querySelector(".tableOrders");
        let rows = 1;

        for(let i = 0; i < orders.length; i++)
        {
            let row = table.insertRow(rows);

            let cell1 = row.insertCell();
            let cell2 = row.insertCell();
            let cell3 = row.insertCell();
            let cell4 = row.insertCell();
            let cell5 = row.insertCell();

            cell1.appendChild(document.createTextNode(orders[i].id));
            cell2.appendChild(document.createTextNode(orders[i].orderCode));
            cell3.appendChild(document.createTextNode(orders[i].userId));
            cell4.appendChild(document.createTextNode(orders[i].price))
            cell5.appendChild(document.createTextNode(orders[i].status));
            rows++;
        }
    }
}
</script>
<style scoped>
table{
    width:90%;
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
    width:20%;
    border: 0.1rem solid black;
    border-radius:10px;
    padding-left:10px;
    padding-right:10px;
    background-color:rgb(232, 232, 232);
}
.id{
    font-size:1rem;
    border-radius:10px;
    border: 0.1rem solid black;
    padding: 0 5px;
}
.status{
    font-family:'Red Hat Display';
}
.changeStatus{
    width:90%;
    margin-left:auto;
    margin-right:auto;
    margin-top:30px;
}
.button{
    width:190px;
    margin:20px 10px;
}
</style>