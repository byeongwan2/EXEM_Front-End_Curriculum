<template>
  <div class="display">
      <p> {{ operator }} </p>
      <p class="input-number"> {{ inputNumber }} </p>
  </div>
</template>

<script>
export default {
  props: {
    operator: {
      type: String
    },
    inputNumber: {
      type: String
    }
  }
}
</script>

<style>  
  .display {
    width: 300px;
    height: 100px;
    position: relative;
    background-color: black;
    color: white;
    text-align: right;        
  }
  .input-number {
    position: absolute;
    right: 0;
    bottom: 0;
    font-size: 60px;
    font-weight: 100;
  }
</style>