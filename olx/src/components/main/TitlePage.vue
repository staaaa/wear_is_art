<template>
    <div class="wrapper">
        <div class="container" data-color="light">
            <div class="input-wrapper">
                <span class="next-to-left">Szukaj</span>
                <input type="text" name="" placeholder="Znajdź coś dla siebie...">
                <span class="next-to-right">SZUKAJ</span>
            </div>
        </div>
        <div class="container" data-color="light">
            <div class="posts-wrapper">
                <div class="row">
                    <div class="post"></div>
                    <div class="post"></div>
                    <div class="post"></div>
                </div>
                <div class="row">
                    <div class="post"></div>
                    <div class="post"></div>
                    <div class="post"></div>
                </div>
                <div class="row">
                    <div class="post"></div>
                    <div class="post"></div>
                    <div class="post"></div>
                </div>
            </div>
        </div>
    </div>
</template>>
<script>
export default{

}
</script>
<style>
[data-color="white"]{
    /* background-color: rgb(200, 200, 200); */
    background-color: var(--color-lightGrey);
    transition: 0.5s;
}
[data-color="black"]{
    /* background-color: rgb(49, 49, 49); */
    background-color: var(--color-darkGrey);
    transition: 0.5s;
}
[data-color="light"]{
    /* background-color: rgb(245, 245, 245); */
    background-color: var(--color-light);
    color: var(--color-dark);
    transition: 0.5s;
}
[data-color="dark"]{
    /* background-color: rgb(0, 0, 0); */
    background-color: var(--color-dark);
    color: var(--color-light);
    transition: 0.5s;
}
.container{
    margin-top:50px;
    font-size: 30px;
    display: flex;
    justify-content: center;
    width: 100%;
    height:100%;
    border-radius: 50px;
}
.input-wrapper{
    margin-top:50px;
    margin-bottom:50px;
}
.container input{
    width:600px;
    height:50px;
    font-size: 30px;
}
.next-to-left{
    padding-right: 20px;
}
.row{
    width:100%;
    height:auto;
    display: flex;
    justify-content: space-around;
    margin:25px;
}
.post{
    margin:50px;
    width:250px;
    height:250px;
    background-color: var(--color-dark);
    display:inline-block;
}
</style>