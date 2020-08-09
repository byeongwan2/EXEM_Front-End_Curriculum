<template>    
  <button    
    v-on:click="emitToArea"
    class="button">
      {{ number }}
  </button>
</template>

<script>
import BaseButton from './BaseButton.vue'

export default {
  extends: BaseButton,
  props: {    
    number: String
  },
  methods: {        
    emitToArea: function() {            
      this.$emit('emitToArea', this.number);            
    }
  }
}
</script>