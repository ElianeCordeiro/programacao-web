const botao = document.getElementById("botao");

botao.addEventListener("mousedown", verificarParOuImpar);

function verificarParOuImpar() {
    const numero = document.getElementById("numero").value;
    const resultadoParagrafo = document.getElementById("resultado");
    if (numero % 2 === 0) {
        console.log(numero + " é um número par.");
        resultadoParagrafo.textContent = numero + " é um número par.";
    } else {
        console.log(numero + " é um número ímpar.");
        resultadoParagrafo.textContent = numero + " é um número ímpar.";
    }
}