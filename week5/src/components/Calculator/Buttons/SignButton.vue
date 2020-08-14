<template>
  <button    
    v-on:click="emitToArea"    
    class="button"
  >
    +/-
  </button>
</template>

<script>
import BaseButton from './BaseButton.vue'

export default {
  extends: BaseButton
}
</script>