<template>
  <div class="calculator">
    <display-area v-bind:operator="operator" v-bind:inputNum="inputNum.value"></display-area>
    <div class="input-area">
      <section class="number-area">
        <percent-button></percent-button>              
        <sign-button v-on:setSign="setSign"></sign-button>
        <clear-button v-on:clear="clear"></clear-button>
        <num-button
          v-for="numData in numDatas"
          v-bind:key="numData"
          v-bind:num="numData"
          v-on:addNum="addNum">
        </num-button>
        <point-button v-on:setPoint="setPoint"></point-button>
        <num-button v-bind:num="0"
          v-on:addNum="addNum"
          class="zero-btn"></num-button>
      </section>
      <section class="operator-area">
        <operator-button
          v-for="operator in operators"
          v-bind:key="operator"
          v-bind:operator="operator"
          v-on:setOper="setOper"
        ></operator-button>
        <compute-button v-on:computeData="computeData"></compute-button>
    </section>
    </div>    
  </div>
</template>

<script>
import DisplayArea from './components/DisplayArea.vue';
import ClearButton from './components/ClearButton.vue';
import SignButton from './components/SignButton.vue';
import PercentButton from './components/PercentButton.vue';
import NumButton from './components/NumButton.vue';
import PointButton from './components/PointButton.vue';
import OperatorButton from './components/OperatorButton.vue';
import ComputeButton from './components/ComputeButton.vue';

export default {
  components: {
    'display-area': DisplayArea,
    'clear-button': ClearButton,
    'sign-button': SignButton,
    'percent-button': PercentButton,
    'num-button': NumButton,
    'point-button': PointButton,
    'operator-button': OperatorButton,
    'compute-button': ComputeButton
  },
  data: function() {
    return {
      firstNum: '',
      secondNum: '',      
      inputNum: {
        value: '0',        
        point: false, // true: flaot , false: int
        assign: false // true: assign secondNum, false: assign firstNum
      },
      operator: '',      
      numDatas: ['9', '8', '7', '6', '5', '4', '3', '2', '1'],
      operators: ['÷', '×', '-', '+'],
    }
  },
  methods: {
    addNum: function(value) {
      if(this.operator && !this.inputNum.assign) {
        this.firstNum = parseFloat(this.inputNum.value);
        this.inputNum.value = '0';
        this.inputNum.assign = true;
      }
      this.inputNum.value !== '0' ? this.inputNum.value += value : this.inputNum.value = value;            
    },    
    setPoint: function() {
      // 소수점이 있고, 끝자리가 .이면
      if(this.inputNum.point && this.inputNum.value[this.inputNum.value.length - 1] === '.') {
        this.inputNum.value = this.inputNum.value.slice(0, -1);
      } else {
        this.inputNum.value += '.'
      }
      this.inputNum.point = !this.inputNum.point;
    },
    setOper: function(value) {
      this.operator = value;
    },
    computeData: function() {
      this.secondNum = parseFloat(this.inputNum.value);
      // 콜백함수로 변경하기
      switch(this.operator) {
        case '+':
          this.inputNum.value = (this.firstNum + this.secondNum).toString();
          break;
        case '-':
          this.inputNum.value = (this.firstNum - this.secondNum).toString();
          break;
        case '×':
          this.inputNum.value = (this.firstNum * this.secondNum).toString();
          break;
        case '÷':
          this.inputNum.value = (this.firstNum / this.secondNum).toString();
          break;
      }            
      this.inputNum.assign = false;
      this.operator = '';
    },
    clear: function() {
      this.firstNum = '',
      this.secondNum = '',
      this.inputNum.value = '0',      
      this.inputNum.point = false,
      this.inputNum.assign = false,
      this.operator = '',
      this.result = 0
    },
    
    setSign: function() {
      if(this.inputNum.value[0] === '0') return;      
      if(this.inputNum.value[0] === '-') this.inputNum.value = this.inputNum.value.slice(1,);
      else this.inputNum.value = '-' + this.inputNum.value;
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
  .zero-btn {
        width: 150px;
  }
</style>