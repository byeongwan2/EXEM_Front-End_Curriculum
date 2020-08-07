<template>
    <button v-on:click="clearEvent"
            class="btn">
        {{ 'C' }}
    </button>
</template>

<script>
import BaseButton from './BaseButton.vue'

export default {
    extends: BaseButton,
    methods: {
        clearEvent: function() {
            this.$emit('clear');
        }
    }
}
</script>