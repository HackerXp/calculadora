window.onload = () => {
  let card = document.getElementById("numbers");
  let input = document.getElementsByClassName("input")[0];
  let operator = document.getElementsByClassName("operators")[0];
  input.focus();
  input.value = null;
  let extenso = [
    { descricao: "Zero", cor: "text-white" },
    { descricao: "Um", cor: "text-warning" },
    { descricao: "Dois", cor: "text-danger" },
    { descricao: "Três", cor: "text-warning" },
    { descricao: "Quatro", cor: "text-danger" },
    { descricao: "Cinco", cor: "text-white" },
    { descricao: "Seis", cor: "text-danger" },
    { descricao: "Sete", cor: "text-warning" },
    { descricao: "Oito", cor: "text-danger" },
    { descricao: "Nove", cor: "text-warning" },
  ];

  let operators = [
    { icon: "CLS", operation: "" },
    { icon: "*", operation: "" },
    { icon: "/", operation: "" },
    { icon: "-", operation: "" },
    { icon: "+", operation: "" },
    { icon: "=", operation: "" },
  ];
  for (let i = 9; i >= 0; i--) {
    card.innerHTML += `<div class="box" extenso="${extenso[i].descricao}" onClick="printValue(${i})"><span class="${extenso[i].cor}">${i}</span></div>`;
  }

  for (let i in operators) {
    let op = operators[i].icon;
    operator.innerHTML += `<button class="btn" onClick="getOperator(${i})"><strong>${op}</strong></i></button>`;
  }
};

let valores = [];
printValue = (valor) => {
  let input = document.getElementsByClassName("input")[0];
  input.value += Number(valor);
};

getOperator = (operator) => {
  let operators = [
    { icon: "CLS", operation: "" },
    { icon: "*", operation: "" },
    { icon: "/", operation: "" },
    { icon: "-", operation: "" },
    { icon: "+", operation: "" },
    { icon: "=", operation: "" },
  ];
  let input = document.getElementsByClassName("input")[0];
  if (disabled(input.value)) {
    switch (operator) {
      case 0:
        input.value = null;
        input.focus();
        break;
      case 5:
        let operador = "";
        for (let i in operators) {
          if (input.value.indexOf(operators[i].icon) != -1) {
            operador = operators[i].icon;
          }
        }
        let valores = input.value.split(operador);
        input.value = calcular(valores[0], valores[1], operador);
        break;
      default:
        if (input.value.indexOf(operators[operator].icon) != -1) {
        } else {
          input.value += operators[operator].icon;
        }
        break;
    }
  }
};

disabled = (valor) => {
  return valor.length > 0 ? true : false;
};
calcular = (number1, number2, operator) => {
  res = 0;
  switch (operator) {
    case "+":
      res = Number(number1) + Number(number2);
      break;
    case "-":
      res = Number(number1) - Number(number2);
      break;
    case "/":
      if (Number(number2) == 0) {
        res = "Error";
      } else {
        res = Number(number1) / Number(number2);
      }
      break;
    case "*":
      res = Number(number1) * Number(number2);
      break;
  }
  return res;
};
