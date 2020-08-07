<template>    
    <button    
        @click="addNumberEvent"    
        class="button">
            {{ number }}
    </button>
</template>

<script>
export default {    
    props: {
        number: String
    },
    methods: {        
        addNumberEvent: function() {            
            this.$emit('addNumber', this.number);            
        }
    }
}
</script>