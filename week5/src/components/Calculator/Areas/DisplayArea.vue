<template>
  <div class="display">
      <p> {{ operator }} </p>
      <p
        v-if="isInfinity"        
        class="number infinity"
      >
        0으로 나눌 수 없습니다.
      </p>
      <p
        v-else
        v-bind:style="resizeFont()"
        v-on="inputToDisplay"
        class="number"
      >
        {{ displayNumber }}
      </p>
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
    },
    isSign: {
      type: Boolean
    },
    isInfinity: {
      type: Boolean
    },
    pointIdx: {
      type: Number
    }
  },
  data: function() {
    return {
      displayNumber : '0',
      intNumber: 0,
      floatNumber: 0
    }
  },
  methods: {
    splitNumber: function() {
      if(this.pointIdx > 0) {
        this.intNumber = this.inputNumber.slice(0, this.pointIdx);
        this.floatNumber = this.inputNumber.slice(this.pointIdx, );
      } else {
        this.intNumber = this.inputNumber;
        this.floatNumber = "";
      }
    },
    checkComma: function() {        
      let count = 0;
      let idx = -3;
      const arrNumber = this.intNumber.split('');
<<<<<<< HEAD

      if(this.intNumber.length % 3 === 0) count = (this.intNumber.length / 3) -1;
      else count = Math.floor(this.intNumber.length / 3);

=======
      if(this.intNumber.length % 3 === 0) count = (this.intNumber.length / 3) -1;
      else count = Math.floor(this.intNumber.length / 3);      
>>>>>>> 1dfae11c46777fb41bd50fdd60d3b69cd8982b5c
      for(let i = 0; i < count; i++) {
        arrNumber.splice(idx, 0, ',');
        idx -= 4;
      }
<<<<<<< HEAD

      return arrNumber.join('');
    },    
    checkSign: function() {
      if(this.isSign) return "-" + this.checkComma() + this.floatNumber;
      else return this.checkComma() + this.floatNumber;      
=======
      return arrNumber.join('');
    },    
    addSign: function() {
      if(this.isSign) return "-" + this.addComma() + this.floatNumber;
      else return this.addComma() + this.floatNumber;      
>>>>>>> 1dfae11c46777fb41bd50fdd60d3b69cd8982b5c
    },
    resizeFont: function() {
      const numberSize = this.inputNumber.length;
      
      if(numberSize >= 10) {
        const fontSize = 60 - (numberSize * 2);
        return 'font-size: ' + fontSize + 'px';
      }
    },
    inputToDisplay: function() {      
      this.splitNumber();
      this.displayNumber = this.checkSign();
    }
  }
}
</script>

<style scoped>  
  .display {
    width: 300px;
    height: 100px;
    position: relative;
    background-color: black;
    color: white;
    text-align: right;
  }
  .number {
    position: absolute;
    right: 0;
    bottom: 0;
    font-size: 50px;
    font-weight: 100;
  }
  .infinity {
    font-size: 25px;
  }
</style>