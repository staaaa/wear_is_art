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
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
    computed:{
        ...mapGetters([
            'getOrders',
        ])
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
</style>