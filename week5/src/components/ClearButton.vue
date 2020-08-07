<template>
    <button
        @click="clearDataEvent"
        class="button"
    >
            C
    </button>
</template>

<script>
export default {
    methods: {
        clearDataEvent: function() {
            this.$emit('clearData');
        }
    }
}
</script>