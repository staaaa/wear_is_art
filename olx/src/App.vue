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