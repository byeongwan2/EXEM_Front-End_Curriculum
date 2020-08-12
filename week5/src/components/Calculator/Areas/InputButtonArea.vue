<template>
  <div class="input-area">
      <div class="number-area">
        <percent-button v-on:emitToArea="percent"/>
        <sign-button v-on:emitToArea="sign"/>
        <clear-button v-on:emitToArea="clear"/>
        <number-button
          v-for="number in numbers"
          v-bind:key="number"
          v-bind:number="number"
          v-on:emitToArea="input"
        />
        <point-button v-on:emitToArea="point"/>
        <number-button
          v-bind:number="'0'"
          v-on:emitToArea="input"
          class="zero-button"
        />
      </div>
      <div class="operator-area">
        <operator-button
          v-for="operator in operators"
          v-bind:key="operator"
          v-bind:operator="operator"
          v-on:emitToArea="setOperator"
        />
        <compute-button v-on:emitToArea="compute"/>
      </div>
  </div>
</template>

<script>
import ClearButton from '../Buttons/ClearButton.vue'
import SignButton from '../Buttons/SignButton.vue'
import PercentButton from '../Buttons/PercentButton.vue';
import NumberButton from '../Buttons/NumberButton.vue'
import PointButton from '../Buttons/PointButton.vue';
import OperatorButton from '../Buttons/OperatorButton.vue';
import ComputeButton from '../Buttons/ComputeButton.vue';

export default {
  components: {
    ClearButton,
    SignButton,
    'percent-button': PercentButton,
    'number-button': NumberButton,
    'point-button': PointButton,
    'operator-button': OperatorButton,
    'compute-button': ComputeButton
  },
  data: function() {
    return {
      numbers: ['9', '8', '7', '6', '5', '4', '3', '2', '1'],
      operators: ['÷', '×', '-', '+'],      
    }
  },
  methods: {
    input: function(number) {      
      this.$emit('input', number);
    },
    percent: function() {
      this.$emit('percent');
    },
    sign: function() {
      this.$emit('sign');
    },
    clear: function() {
      this.$emit('clear');
    },
    point: function() {
      this.$emit('point');
    },
    setOperator: function(operator) {
      this.$emit('setOperator', operator);
    },
    compute: function() {
      this.$emit('compute');
    }
  }
}
</script>

<style>
  .input-area {
    display: flex;
  }
  .number-area {
    width: 225px;
    height: 375px;
  }
  .operator-area {
    width: 75px;
    height: 375px;
  }
</style>