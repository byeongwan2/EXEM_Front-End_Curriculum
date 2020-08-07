<template>
    <button class="btn" v-on:click="setPointEvent"> . </button>
</template>

<script>
// import BaseButton from './BaseButton'
export default {
    // extends: BaseButton,
    methods: {
        setPointEvent: function() {
            this.$emit('setPoint');
        }
    }
}
</script>