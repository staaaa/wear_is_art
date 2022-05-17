<template>
    <div class="wrapper">
        <div class="container" data-color="light">
            <div class="row">
                <p>ZAREJESTRUJ SIĘ</p>
            </div>
        </div>
        <div class="container" data-color="light">
            <form method="POST">
                <div class="input-wrapper">
                    <div class="row">
                        <p>ADRES E-MAIL</p>
                    </div>
                    <div class="row">
                        <input type="text" name="mail">
                    </div>
                    <div class="row">
                        <p>LOGIN</p>
                    </div>
                    <div class="row">
                        <input type="text" name="login">
                    </div>
                    <div class="row">
                        <p>HASŁO</p>
                    </div>
                    <div class="row">
                        <input type="password" name="password">
                    </div>
                    <div class="row">
                        <p>PODAJ HASŁO PORAZ DRUGI</p>
                    </div>
                    <div class="row">
                        <input type="text" name="login">
                    </div>
                    <div class="row">
                        <input type="submit" value="DODAJ OGŁOSZENIE">
                    </div>
                    <div class="row" @click="$store.dispatch('setLoginForm')">
                        <p>Masz już konto? Zaloguj się....</p>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="css">

</style>