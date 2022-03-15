const primerNumero = document.querySelector("#primero");
const segundoNumero = document.querySelector("#segundo");

function encontrarMenor() {
  if (Number(primerNumero.value) < 0 || Number(segundoNumero.value) < 0) {
    alert("Error, numer no positivo");
  }
  return alert(
    Math.min(Number(primerNumero.value), Number(segundoNumero.value))
  );
}

function sonIguales() {
  if (Number(primerNumero.value) < 0 || Number(segundoNumero.value) < 0) {
    alert("Error, numer no positivo");
  }
  const valor = Number(primerNumero.value) ^ (Number(segundoNumero.value))
  if (valor === 0) {
    return alert("Iguales");
  }

  return alert("No iguales");
}

function intercambiarValores() {
  if (Number(primerNumero.value) < 0 || Number(segundoNumero.value) < 0) {
    alert("Error, numer no positivo");
  }

  let a = primerNumero.value;
  let b = segundoNumero.value;

  b = [a, (a = b)][0];

  primerNumero.value = a;
  segundoNumero.value = b;
}

function sumar() {
  if (Number(primerNumero.value) < 0 || Number(segundoNumero.value) < 0) {
    alert("Error, numer no positivo");
  }
  return alert(
    Math.log2(
      2 ** Number(primerNumero.value) * 2 ** Number(segundoNumero.value)
    )
  );
}
