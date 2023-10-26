const botao = document.getElementById("botao");
const resultado = document.getElementById("resultado");


botao.addEventListener("mousedown", calcularFatorial);

function calcularFatorial(){
    let numero = document.getElementById("numero").value;

    let fatorial = 1;
    
    if( numero > 10 || isNaN(numero)){
        resultado.textContent = "O valor informado é inválido. Tente novamente.";
        console.log(numero)
        return;
    }
    for(numero; numero >= 1; numero--){
        fatorial *= numero;
    }

    console.log(fatorial)
    resultado.textContent = `O fatorial é ${fatorial}`;
}