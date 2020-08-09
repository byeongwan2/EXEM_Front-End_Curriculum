<template>
  <button    
    v-on:click="emitToArea"
    class="button operator"
  >
    {{ operator }}
  </button>
</template>

<script>
import BaseButton from './BaseButton.vue'

export default {
  extends: BaseButton,
  props: {
    operator : String
  },
  methods: {
    emitToArea: function() {
      this.$emit('emitToArea', this.operator);
    }
  }
}
</script>