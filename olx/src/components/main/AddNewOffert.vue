<template>
    <div class="wrapper">
        <div class="container" data-color="light">
            <div class="input-wrapper">
                <p>DODAJ OGŁOSZENIE</p>
            </div>
        </div>
        <form action="#">
            <div class="container" data-color="light">
                <div class="input-wrapper form">
                    <div class="left">
                        <div class="row">
                            <p>Nazwa ogłoszenia</p>
                        </div>
                        <div class="row">
                            <input type="text" name="name">
                        </div>
                        <div class="row">
                            <p>Cena</p>
                        </div>
                        <div class="row">
                            <input type="text" name="price">
                        </div>
                        <div class="row">
                            <img src="https://via.placeholder.com/300x300" alt="">
                        </div>
                    </div>
                    <div class="right">
                        <div class="row">
                            <p>Opis produktu</p>
                        </div>
                        <div class="row">
                            <textarea name="description" rows="10" cols="35"></textarea>
                        </div>
                        <div class="row">
                            <input type="file" name="" id="">
                        </div>
                        <div class="row">
                            <input type="submit" value="DODAJ OGŁOSZENIE">
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>
<script>
export default {

}
</script>
<style>
</style>