let btnVerificar = document.querySelector("#btn-verificar");
let txtNumero = document.querySelector("#numero");
let resultado = document.querySelector("#resultado");

function verificarCpf() {
  let numeros = [];

  for (let k = 1; k < txtNumero.value.length; k++) {
    numeros.push(Number(txtNumero.value[k]));
  }

  console.log(numeros);
}

btnVerificar.addEventListener("click", verificarCpf, false);
