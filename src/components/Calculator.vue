<template>
  <div class="hello">
    <h1>Calculadora</h1>
    <div class="row">
      <div class="calculator-container">
        <div class="display">
          <div class="view previous">{{previousOperand}}{{operation}}</div>
          <div class="view current">{{currentOperand}}</div>
        </div>
        <button @click="clear()">C</button>
        <button @click="invertSign()">-/+</button>
        <button @click="percentage()">%</button>
        <button @click="addOperator('/')" class="operand">&#xF7;</button>
        <button @click="concatToOperand('7')" class="numbers">7</button>
        <button @click="concatToOperand('8')" class="numbers">8</button>
        <button @click="concatToOperand('9')" class="numbers">9</button>
        <button @click="addOperator('x')" class="operand">x</button>
        <button @click="concatToOperand('4')" class="numbers">4</button>
        <button @click="concatToOperand('5')" class="numbers">5</button>
        <button @click="concatToOperand('6')" class="numbers">6</button>
        <button @click="addOperator('-')" class="operand">-</button>
        <button @click="concatToOperand('1')" class="numbers">1</button>
        <button @click="concatToOperand('2')" class="numbers">2</button>
        <button @click="concatToOperand('3')" class="numbers">3</button>
        <button @click="addOperator('+')" class="operand">+</button>
        <button @click="concatToOperand('0')" class="numbers zero">0</button>
        <button @click="concatToOperand('.')" class="numbers period">.</button>
        <button @click="calculateResult()" class="equals">=</button>
      </div>
    </div>
    <router-link to="/" class="btn-back btn btn-success"><i class="fa fa-reply"></i> Regresar</router-link>
  </div>
</template>

<script>
export default {
  name: "Calculator",
  data() {
    return {
      currentOperand: "",
      previousOperand: "",
      operation: ""
    };
  },
  methods: {
    clear: function() {
      this.currentOperand = "";
      this.previousOperand = "";
      this.operation = "";
    },
    invertSign: function() {
      if (this.currentOperand !== "")
        this.currentOperand =
          this.currentOperand.charAt(0) === "-"
            ? this.currentOperand.slice(1)
            : `-${this.currentOperand}`;
    },
    percentage() {
      if (this.currentOperand !== "")
        this.currentOperand = this.currentOperand / 100;
    },
    concatToOperand(symbol) {
      if (symbol === ".")
        if (!this.currentOperand.toString().includes("."))
          this.currentOperand += symbol;
        else return;
      else this.currentOperand += symbol;
    },
    addOperator(symbol) {
      if (this.operation !== "") this.calculateResult();
      else {
        this.operation = symbol;
        if (this.currentOperand !== "")
          this.previousOperand = this.currentOperand;
        this.currentOperand = "";
      }
    },
    calculateResult() {
      var current;
      switch (this.operation) {
        case "+":
          current = this.currentOperand === "" ? 0 : this.currentOperand;
          this.currentOperand =
            parseFloat(this.previousOperand) + parseFloat(current);
          break;
        case "-":
          current = this.currentOperand === "" ? 0 : this.currentOperand;
          this.currentOperand =
            parseFloat(this.previousOperand) - parseFloat(current);
          break;
        case "x":
          current = this.currentOperand === "" ? 1 : this.currentOperand;
          this.currentOperand =
            (parseFloat(this.previousOperand) * parseFloat(current)).toFixed(2);
          break;
        case "/":
          current = this.currentOperand === "" ? 1 : this.currentOperand;
          this.currentOperand =
            (parseFloat(this.previousOperand) / parseFloat(current)).toFixed(2);
          break;
      }
      this.previousOperand = "";
      this.operation = "";
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this comnt only -->
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* center container */
.container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #37474f;
}

/* use grid to structure calc */
.calculator-container {
  width: 14rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(50px, auto);
  background: #cfd8dc;
}

.display {
  grid-column: 1 / 5;
  display: grid;
  grid-template-rows: 1.25rem 2.25rem;
  border: 2px solid #cfd8dc;
  font-family: "Oxanium", sans-serif;
  max-width: 14rem;
}

.view {
  height: 2.25rem;
  background: #212121;
  color: #fff;
  text-align: end;
  width: 100%;
  max-width: 14rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.previous {
  grid-row: 1 / 2;
  font-size: 1rem;
}

.current {
  font-size: 2rem;
}

.zero {
  grid-column: 1 / 3;
}

button {
  font-family: "Oxanium", sans-serif;
  font-size: 2rem;
  background: #cfd8dc;
  outline-color: #cfd8dc;
}

.operand,
.equals {
  background: #ff6d00;
  color: #fff;
}
.btn-back{
  margin-top: 4rem;;
}
</style>
