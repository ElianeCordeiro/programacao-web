const botao = document.getElementById("botao");
const div = document.getElementById("div");

botao.addEventListener("mousedown", gerarTabuada);


function gerarTabuada(){

    const numero = document.getElementById("numero").value;

    for (let x = 1; x <= 10; x++){

        let resultado = document.createElement("p");

        let multiplicacao = numero * x;

        resultado.textContent = `${numero} * ${x} = ${multiplicacao}`;
        div.appendChild(resultado);
    }

}