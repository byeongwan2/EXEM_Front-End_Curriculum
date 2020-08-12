<script>
export default {
  methods: {
    emitToArea: function() {
      this.$emit('emitToArea');
    }
  }
}
</script>

<style scoped>
  .button {
    width: 75px;  
    height: 75px;
    float: right;
    color: black;
    font-size: 24px;
    text-align: center;
    line-height: 75px;
    border: 1px solid black;
    background-color: #ececec;
  }
  .button:active {
    opacity: 0.4;
  }
  .zero-button {
    width: 150px;
  }
  .operator {
    background-color: #F47F27;
    color: white;
    font-size: 35px;
    font-weight: 200;
  }
</style>