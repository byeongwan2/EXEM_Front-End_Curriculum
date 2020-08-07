<template>
    <button
        @click="signEvent"
        class="button"
    >
        +/-
    </button>
</template>

<script>
export default {    
    methods: {
        signEvent: function() {
            this.$emit('setSign');
        }
    }
}
</script>