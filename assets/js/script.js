const buttons = document.querySelectorAll("#buttons-container button"); //seleciona o container dos botões
const view1 = document.querySelector("#v1");//seleciona div 1 e 2
const view2 = document.querySelector("#v2");

class Calculator {
    constructor(view1, view2) {
      this.view1 = view1;
      this.view2 = view2;
      this.view = "";
    }
  
    //adiciona digito
    addDigit(digit) {
      console.log(digit);
      //confere se o numero já é um ponto
      if (digit === "." && this.view2.innerText.includes(".")) {
        return;
      }
  
      this.view = digit;
      this.updateScreen();
    }
  
    // processa todas as operações da calculadora:
    processOperation(operation) {
      //checa se os valores são vazios
      if (this.view2.innerText === "" && operation !== "C") {
          //muda a operação
        if (this.view1.innerText !== "") {
          this.changeOperation(operation);
        }
        return;
      }
  
       //pega o view1 e view2
      let operationValue;
      let previous = +this.view1.innerText.split(" ")[0];
      let current = +this.view2.innerText;
  
      //operações
      switch (operation) {
        case "+":
          operationValue = previous + current;
          this.updateScreen(operationValue, operation, current, previous);
          break;
        case "-":
          operationValue = previous - current;
          this.updateScreen(operationValue, operation, current, previous);
          break;
        case "*":
          operationValue = previous * current;
          this.updateScreen(operationValue, operation, current, previous);
          break;
        case "/":
          operationValue = previous / current;
          this.updateScreen(operationValue, operation, current, previous);
          break;
        case "DEL":
          this.processDelOperator();
          break;
        case "CE":
          this.processClearCurrentOperator();
          break;
        case "C":
          this.processClearOperator();
          break;
        case "=":
          this.processEqualOperator();
          break;
        default:
          return;
      }
    }
  
    //muda os numeros da tela
    updateScreen(
      operationValue = null,
      operation = null,
      view2 = null,
      view1 = null
    ) {
      if (operationValue === null) {
         //adiciona valor do view2
        this.view2.innerText += this.view;
      } else {
       //checa se o valor é 0, se sim adiciona o view2.4
        if (view1 === 0) {
          operationValue = view2;
        }
        this.view1.innerText = `${operationValue} ${operation}`;
        this.view2.innerText = "";
      }
    }
  
    // muda os operadores
    changeOperation(operation) {
      const mathOperations = ["*", "-", "+", "/"];
  
      if (!mathOperations.includes(operation)) {
        return;
      }
  
      this.view1.innerText =
        this.view1.innerText.slice(0, -1) + operation;
    }
  
    // Del
    processDelOperator() {
      this.view2.innerText =
        this.view2.innerText.slice(0, -1);
    }
  
    // CE
    processClearCurrentOperator() {
      this.view2.innerText = "";
    }
  
    // C
    processClearOperator() {
      this.view2.innerText = "";
      this.view1.innerText = "";
    }
  
    // processa as oprerações
    processEqualOperator() {
      let operation = this.view1.innerText.split(" ")[1];
  
      this.processOperation(operation);
    }
  }
  
  const calc = new Calculator(view1, view2);
  
  // pega o valor dos botões
  buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const value = e.target.innerText;
  
      if (+value >= 0 || value === ".") {
        console.log(value);
        calc.addDigit(value);
      } else {
        calc.processOperation(value);
      }
    });
  });