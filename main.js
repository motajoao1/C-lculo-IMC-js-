const buttonCalIMC = document.getElementById("calcularIMCButton");
const resultIMC = document.getElementById("result");

function calcularIMC(){
    let nPeso = document.getElementById("peso");
    let nAltura = document.getElementById("altura");

    let vPeso = parseInt(nPeso.value, 0);
    let vAltura = parseInt(nAltura.value, 0);
  
    vAltura = vAltura / 100;

    let IMC = vPeso / (vAltura * vAltura);

    resultIMC.value = IMC.toFixed(2);
}

buttonCalIMC.addEventListener("click",calcularIMC);
