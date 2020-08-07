<template>
    <button
        @click="setPointEvent"
        class="button"
    >
        .
    </button>
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