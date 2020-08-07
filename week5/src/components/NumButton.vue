<template>    
    <button
    v-on:click="addNumEvent"    
    class="btn"> {{ num }} </button>
</template>

<script>
export default {    
    props: {
        num: String
    },
    methods: {        
        addNumEvent: function() {            
            this.$emit('addNum', this.num);            
        }
    }
}
</script>