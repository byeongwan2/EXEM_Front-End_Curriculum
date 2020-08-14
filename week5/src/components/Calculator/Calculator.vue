<template>
  <div class="calculator">
    <display-area
      v-bind:inputNumber="inputNumber"
      v-bind:operator="operator"
      v-bind:isSign="isSign"
      v-bind:isInfinity="isInfinity"
      v-bind:pointIdx="pointIdx"
    />
    <input-button-area
      v-on:percent="percent"
      v-on:sign="sign"
      v-on:clear="clear"
      v-on:input="input"
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
      isSign: false,
      isInfinity: false,
      pointIdx: null
    }
  },
<<<<<<< HEAD
  methods: {      
    input: function(value) {
      if(this.isInfinity) this.clear();
=======
  methods: {
    assignNumber: function() {
>>>>>>> 1dfae11c46777fb41bd50fdd60d3b69cd8982b5c
      if(this.operator && !this.isAssign) {
        this.prevNumber = this.strToNum();
        this.inputNumber = '0';
        this.isAssign = true;
        this.isSign = false;
      }
    },
    add: function(value) {
      if(this.isInfinity) this.clear();
      this.assignNumber();
      if(this.inputNumber.length >= 16) return;

      this.inputNumber !== '0' ? this.inputNumber += value : this.inputNumber = value;
    },    
    point: function() {
      this.pointIdx = this.inputNumber.indexOf('.');
      if(this.pointIdx > 0) return;

      this.inputNumber += '.';
      this.pointIdx = this.inputNumber.length - 1;
    },
    setOperator: function(value) {
      this.operator = value;
    },
    sign: function() {
      const numberSize = this.inputNumber.length;      
      if(this.inputNumber[0] === '0' && numberSize === 1) return;   

      this.isSign = !this.isSign;
    },
    strToNum: function() {
      if(this.isSign) return parseFloat(this.inputNumber) * -1;
      else return parseFloat(this.inputNumber);      
    },
    compute: function() {
      this.nextNumber = this.strToNum();
      let result = 0;

      switch(this.operator) {
        case '+':
          result = (this.prevNumber + this.nextNumber);
          break;
        case '-':
          result = (this.prevNumber - this.nextNumber);
          break;
        case '×':
          result = (this.prevNumber * this.nextNumber);
          break;
        case '÷':
          result = (this.prevNumber / this.nextNumber);
          break;
      }
<<<<<<< HEAD
      
      if(Math.abs(result) === Infinity) this.isInfinity = true;
      else if(result >= 0) this.isSign = false;
      else this.isSign = true;      

=======
      if(Math.abs(result) === Infinity) this.isInfinity = true;
      else if(result >= 0) this.isSign = false;
      else this.isSign = true;      
>>>>>>> 1dfae11c46777fb41bd50fdd60d3b69cd8982b5c
      this.operator = '';
      this.isAssign = false;
      this.inputNumber = Math.abs(result).toString();
    },    
    clear: function() {
      this.prevNumber = 0;
      this.nextNumber = 0;
      this.inputNumber = '0';
      this.operator = '';
      this.isAssign = false;
      this.isSign = false;
      this.isInfinity = false;
      this.pointIdx = null;
    },    
    percent: function() {
      this.inputNumber = (parseFloat(this.inputNumber) / 100).toString();
      this.pointIdx = this.inputNumber.indexOf('.');
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