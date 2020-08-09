<template>
  <div class="calculator">
    <display-area    
      v-bind:inputNumber="inputNumber"
      v-bind:operator="operator"
    />
    <input-button-area
      v-on:percent="percent"
      v-on:sign="sign"
      v-on:clear="clear"
      v-on:add="add"
      v-on:point="point"
      v-on:compute="compute"
      v-on:setOperator="setOperator"
    />
  </div>
</template>

<script>  
import DisplayArea from './Areas/DisplayArea.vue';
import InputButtonArea from './Areas/InputButtonArea.vue';

export default {  
  components: {
    'display-area': DisplayArea,
    'input-button-area': InputButtonArea
  },
  data: function() {
    return {      
      prevNumber: 0,
      nextNumber: 0,
      inputNumber: '0',
      operator: '',
      isAssign: false,
      target: 'prev'
    }
  },
  methods: {
    add: function(value) {      
      if(this.operator && !this.isAssign) {
        this.prevNumber = parseFloat(this.inputNumber);        
        this.inputNumber = '0';
        this.isAssign = true;
      }
      // if(this.inputNumber.value === 'Infinity') this.inputNumber.value = '0';
      this.inputNumber !== '0' ? this.inputNumber += value : this.inputNumber = value;
    },    
    point: function() {
      const dotIdx = this.inputNumber.indexOf('.');
      if(dotIdx > 0) return;
      this.inputNumber += '.';
    },
    setOperator: function(value) {
      this.operator = value;
    },
    sign: function() {
      if(this.inputNumber[0] === '0') return;      
      this.inputNumber[0] === '-' ? this.inputNumber = this.inputNumber.slice(1,) : this.inputNumber = '-' + this.inputNumber;
    },
    compute: function() { // 계산만 -> toSting은 뷰 단에서
      this.nextNumber = parseFloat(this.inputNumber);      
      switch(this.operator) {
        case '+':
          this.inputNumber = (this.prevNumber + this.nextNumber).toString();
          console.log(this.inputNumber);
          break;
        case '-':
          this.inputNumber = (this.prevNumber - this.nextNumber).toString();
          break;
        case '×':
          this.inputNumber = (this.prevNumber * this.nextNumber).toString();
          break;
        case '÷':
          this.inputNumber = (this.prevNumber / this.nextNumber).toString();
          break;
      }      
      this.operator = '';
      this.isAssign = false;
    },    
    clear: function() {
      this.prevNumber = 0,
      this.nextNumber = 0,
      this.inputNumber = '0',
      this.operator = ''
    },    
    percent: function() {
      this.inputNumber.value = (parseFloat(this.inputNumber) / 100).toString();
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
</style>