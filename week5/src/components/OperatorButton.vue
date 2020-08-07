<template>
    <button v-on:click="setOperEvent"
            class="btn operator">  {{ operator }} </button>  
</template>

<script>
import BaseButton from './BaseButton.vue'

export default {
    extends: BaseButton,
    props: {
        operator : String
    },
    methods: {
        setOperEvent: function() {
            this.$emit('setOper', this.operator);
        }
    }
}
</script>