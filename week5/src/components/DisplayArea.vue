<template>
    <div class="display">
        <section> {{ operator }} </section>
        <section class="input-num"> {{ inputNum }} </section>
    </div>
</template>

<script>
export default {
    props: {
        operator: {
            type: String
        },
        inputNum: {
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
    .input-num {
        font-size: 60px;
        font-weight: 100;        
    }
</style>