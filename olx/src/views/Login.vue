<template>
    <div class="wrapper">
        <h2>WITAMY W AUCTION STORE</h2>
        <p>Zaloguj się, aby kontyunować.</p>
        <div class="form-wrapper">
            <form action="" @submit.prevent="">
                <VInput class="input" type="text" placeholder="LOGIN" href="../../static/assets/icons/user-solid.svg"/>
                <VInput class="input" type="password" placeholder="HASŁO" href="../../static/assets/icons/lock-solid.svg"/>
                <p class="password-text">Zapomniałeś hasła?</p>
                <VButton class="input submit" value="ZALOGUJ SIĘ"/>
            </form>
            <VLine class="input line"/>
            <p class="subtext">NIE MASZ JESZCZE KONTA? ZAREJESTRUJ SIĘ TUTAJ</p>
            <p class="subtext">POWRÓT NA STRONĘ GŁÓWNĄ</p>
        </div>
    </div>
</template>
<script>
import VInput from '../components/Input.vue'
import VButton from '../components/Button.vue'
import VLine from '../components/Line.vue'
export default {
    components:{
        VInput,
        VButton,
        VLine,
    }
}
</script>
<style scoped>
@media screen and (min-width: 600px){
.form-wrapper{
    width:600px;
    margin:auto;
}
}

h2{
    margin-top:20px;
}
h2, p{
    text-align:center;
    font-family:'Red Hat Display';
    font-weight: 700;
    padding:10px 0;
}
.subtext{
    margin-top:5px;
    font-size:0.75rem;
}
p:last-child {
    text-decoration: 2px underline;
}
.input{
    margin-top:20px;
    margin-left:auto;
    margin-right:auto;
}
.submit, .line{
    margin-top:60px;
}
.line{
    margin-bottom:25px;
}
.password-text{
    padding:15px 10% 0;
    text-align:right;
}
</style>