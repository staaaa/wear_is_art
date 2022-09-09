<template>
    <div class="wrapper">
        <table class="table">
            <tr>
                <th>ID</th>
                <th>NAZWA PRODUKTU</th>
                <th>ILOŚĆ</th>
                <th>ROZMIAR</th>
            </tr>
        </table>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
    computed:{
        ...mapGetters([
            'getProducts',
        ])
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

            cell1.appendChild(document.createTextNode(products[i].id));
            cell2.appendChild(document.createTextNode(products[i].name));
            cell3.appendChild(document.createTextNode(products[i].quantity));
            cell4.appendChild(document.createTextNode(products[i].size));
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
</style>