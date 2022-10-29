<template>
<div>
    <label class="rad-label">
    <input type="radio" class="rad-input" name="rad">
    <div class="rad-design"></div>
    <div class="rad-text">{{text}}</div>
    </label>
</div>
</template>
<script>
export default {
    props:{
        text:String,
    }
}
</script>
<style scoped>
/*RADIO BUTTONS*/
.rad-label {
  display: flex;
  align-items: center;
    width:90%;
  border-radius: 100px;
  padding: 14px 16px;
  margin: 10px 0;

  cursor: pointer;
  transition: .3s;
}

.rad-label:hover,
.rad-label:focus-within {
  background: hsla(0, 0%, 80%, .14);
}

.rad-input {
  width: 1px;
  height: 1px;
  opacity: 0;
  z-index: -1;
}

.rad-design {
  width: 22px;
  height: 22px;
  border-radius: 100px;

  background: linear-gradient(to right bottom, hsl(31, 97%, 62%), hsl(15, 97%, 62%));
  position: relative;
}

.rad-design::before {
  content: '';

  display: inline-block;
  width: inherit;
  height: inherit;
  border-radius: inherit;

  background: hsl(0, 0%, 90%);
  transform: scale(1.1);
  transition: .3s;
}

.rad-input:checked+.rad-design::before {
  transform: scale(0);
}

.rad-text {
  color: hsl(0, 0%, 60%);
  margin-left: 14px;
  text-transform: uppercase;
  font-size: 0.7rem;
  font-weight: 500;

  transition: .3s;
}
@media screen and (min-width: 600px){
    .rad-text{
        font-size: 0.975rem;
    }
}

.rad-input:checked~.rad-text {
  color: hsl(0, 0%, 40%);
}
</style>