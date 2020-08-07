<template>
    <button    
        @click="setOperatorEvent"
        class="button operator"
    >
        {{ operator }}
    </button>
</template>

<script>
export default {    
    props: {
        operator : String
    },
    methods: {
        setOperatorEvent: function() {
            this.$emit('setOperator', this.operator);
        }
    }
}
</script>