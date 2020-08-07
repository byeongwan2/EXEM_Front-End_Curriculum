<template>
    <button
     v-on:click="computeEvent"
     class="btn operator"> {{ "=" }} </button>
</template>

<script>
import BaseButton from './BaseButton.vue'
export default {
    extends: BaseButton,
    props: {
        data: String
    },
    methods: {
        computeEvent: function() {
            this.$emit('computeData');
        }
    }
}
</script>

<style>

</style>