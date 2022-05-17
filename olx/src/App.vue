<template>
  <div class="wrapper">
    <Header/>
    <Main/>
    <Footer/>
  </div>
</template>

<script>
import Header from "./components/Header.vue"
import Main from "./components/Main.vue"
import Footer from "./components/Footer.vue"

export default {
  mounted(){
    let darkmode = document.querySelector(".switch");
    let darkmodeBool = false;


    darkmode.addEventListener("change",function(){
        if(!darkmodeBool){
            document.body.setAttribute("data-color","black");
            var containers = document.querySelectorAll(".container");
            for(let i = 0; i < containers.length; i++){
                containers[i].setAttribute("data-color","dark");
            }
            darkmodeBool = true;
        }
        else{
            document.body.setAttribute("data-color","white");
            var containers = document.querySelectorAll(".container");
            for(let i = 0; i < containers.length; i++){
                containers[i].setAttribute("data-color","light");
            }
            darkmodeBool = false;
        }
    })
  },
  components:{
    Header:Header,
    Main:Main,
    Footer:Footer
  }
}
</script>

<style>
@import url('../static/css/reset.css');
@import url('../static/css/index.css');
@import url('https://fonts.googleapis.com/css2?family=Titillium+Web&display=swap');

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
    margin-top:25px;
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
textarea{
    resize:none;
    font-size:30px;
}
.left, .right{
    width:50%;
}
.form{
    display:flex;
}
main{
    width:80%;
    height: auto;
    margin:auto;
    font-family: 'Titillium Web', sans-serif;
    padding-top: 75px;
}
footer{
    width:100%;
    height:200px;
    display: flex;
}
input[type="text"], input[type="password"]{
    border-radius:30px;
    padding:15px;
    border:2px solid black;
}
input[type="submit"]{
    border-radius:30px;
    padding:15px;
    border:2px solid black;
    width:auto;
    font-family: 'Titillium Web', sans-serif;
    padding-bottom:55px;
}
.lupa{
  width:50px;
  height:50px;
  position:absolute;
}
</style>