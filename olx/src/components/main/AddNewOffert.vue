<template>
    <div class="wrapper">
        <div class="container" data-color="light">
            <form method="POST">
                <div class="input-wrapper">
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
                        <p>Opis produktu</p>
                    </div>
                    <div class="row">
                        <textarea name="description" rows="10" cols="35"></textarea>
                    </div>
                    <div class="row">
                        <input type="file" name="" id="">
                        <img src="https://via.placeholder.com/300x300" alt="">
                    </div>
                    <div class="row">
                        <input type="submit" value="DODAJ OGŁOSZENIE">
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
<style>
    textarea{
        resize:none;
        font-size:30px;
    }
</style>