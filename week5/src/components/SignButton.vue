<template>
  <button v-on:click="signEvent"
  class="btn">
      {{ "+/-" }}
  </button>
</template>

<script>
import BaseButton from './BaseButton.vue'

export default {
    extends: BaseButton,
    methods: {
        signEvent: function() {
            this.$emit('setSign');
        }
    }
}
</script>

<style>

</style>