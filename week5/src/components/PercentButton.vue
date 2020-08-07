<template>
    <button
        @click="percentDataEvent"
        class="button"
    >
        %
    </button>
</template>

<script>
export default {
    methods: {
        percentDataEvent: function() {
            this.$emit('percentData');
        }
    }
}
</script>