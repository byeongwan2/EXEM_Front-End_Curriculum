<template>
    <div class="display">
        <section> {{ operator }} </section>
        <section class="input-number"> {{ inputNumber }} </section>
    </div>
</template>

<script>
export default {
    props: {
        operator: {
            type: String
        },
        inputNumber: {
            type: String
        }
    }
}
</script>

<style>
    .display {
        width: 100%;
        height: 100px;
        background-color: black;
        color: white;
        text-align: right;        
    }
    .input-number {
        font-size: 60px;
        font-weight: 100;        
    }
</style>