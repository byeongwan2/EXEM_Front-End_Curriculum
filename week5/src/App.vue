<template>
  <div class="calculator">
    <display-area
      :inputNumber="inputNumber.value"
      :operator="operator"
    />
    <div class="input-area">
      <section class="number-area">
        <percent-button @percentData="percentData"/>
        <sign-button @setSign="setSign"/>
        <clear-button @clearData="clearData"/>
        <num-button
          v-for="numberData in numberDatas"
          :key="numberData"
          :number="numberData"
          @addNumber="addNumber"
        />
        <point-button @setPoint="setPoint"/>
        <num-button
          :number="'0'"
          @addNumber="addNumber"
          class="zero-button"
        />
      </section>
      <section class="operator-area">
        <operator-button
          v-for="operator in operators"
          :key="operator"
          :operator="operator"
          @setOperator="setOperator"
        />
        <compute-button @computeData="computeData"/>
      </section>
    </div>
  </div>
</template>

<script>
import DisplayArea from './components/DisplayArea.vue';
import BaseButton from './components/BaseButton.vue';
import ClearButton from './components/ClearButton.vue';
import SignButton from './components/SignButton.vue';
import PercentButton from './components/PercentButton.vue';
import NumberButton from './components/NumberButton.vue';
import PointButton from './components/PointButton.vue';
import OperatorButton from './components/OperatorButton.vue';
import ComputeButton from './components/ComputeButton.vue';

export default {
  extends: BaseButton,
  components: {
    'display-area': DisplayArea,
    'clear-button': ClearButton,
    'sign-button': SignButton,
    'percent-button': PercentButton,
    'num-button': NumberButton,
    'point-button': PointButton,
    'operator-button': OperatorButton,
    'compute-button': ComputeButton
  },
  data: function() {
    return {
      firstNumberber: '',
      secondNumberber: '',      
      inputNumber: {
        value: '0',        
        point: false, // true: flaot , false: int
        assign: false // true: assign secondNumber, false: assign firstNumber
      },
      operator: '',      
      numberDatas: ['9', '8', '7', '6', '5', '4', '3', '2', '1'],
      operators: ['÷', '×', '-', '+'],
    }
  },
  methods: {
    addNumber: function(value) {
      if(this.operator && !this.inputNumber.assign) {
        this.firstNumber = parseFloat(this.inputNumber.value);
        this.inputNumber.value = '0';
        this.inputNumber.assign = true;
      }
      if(this.inputNumber.value === 'Infinity') this.inputNumber.value = '0';
      this.inputNumber.value !== '0' ? this.inputNumber.value += value : this.inputNumber.value = value;
    },    
    setPoint: function() {      
      if(this.inputNumber.point && this.inputNumber.value[this.inputNumber.value.length - 1] === '.') {
        this.inputNumber.value = this.inputNumber.value.slice(0, -1);
      } else {
        this.inputNumber.value += '.'
      }
      this.inputNumber.point = !this.inputNumber.point;
    },
    setOperator: function(value) {
      this.operator = value;
    },
    setSign: function() {
      if(this.inputNumber.value[0] === '0') return;      
      if(this.inputNumber.value[0] === '-') this.inputNumber.value = this.inputNumber.value.slice(1,);
      else this.inputNumber.value = '-' + this.inputNumber.value;
    },
    computeData: function() {
      this.secondNumber = parseFloat(this.inputNumber.value);
      // 콜백함수로 변경하기
      switch(this.operator) {
        case '+':
          this.inputNumber.value = (this.firstNumber + this.secondNumber).toString();
          break;
        case '-':
          this.inputNumber.value = (this.firstNumber - this.secondNumber).toString();
          break;
        case '×':
          this.inputNumber.value = (this.firstNumber * this.secondNumber).toString();
          break;
        case '÷':
          this.inputNumber.value = (this.firstNumber / this.secondNumber).toString();          
          break;
      }
      this.inputNumber.assign = false;
      this.operator = '';
    },
    clearData: function() {
      this.firstNumber = '',
      this.secondNumber = '',
      this.inputNumber.value = '0',      
      this.inputNumber.point = false,
      this.inputNumber.assign = false,
      this.operator = ''
    },        
    percentData: function() {
      this.inputNumber.value = (parseFloat(this.inputNumber.value) / 100).toString();
    }
  }
}
</script>

<style>
  .calculator {    
    width: 300px;
    height: 475px;
    margin: 50px;
    border: 1px solid black;
  }
  .number-area {
    width: 225px;
    height: 375px;
  }
  .operator-area {
    width: 75px;
    height: 375px;
  }
  .input-area {
    display: flex;
  }
</style>