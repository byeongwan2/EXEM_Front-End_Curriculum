<template>
    <button
        @click="computeEvent"
        class="button operator"
    >
        =
    </button>
</template>

<script>
export default {    
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