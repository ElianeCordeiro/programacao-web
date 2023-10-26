const botao = document.getElementById("botao");

botao.addEventListener("mousedown", calcularMedia);

function calcularMedia(){

    const nota1 = parseFloat(document.getElementById("nota1").value);
    const nota2 = parseFloat(document.getElementById("nota2").value);
    const nota3 = parseFloat(document.getElementById("nota3").value);
    const nota4 = parseFloat(document.getElementById("nota4").value);

    const media = parseFloat((nota1 + nota2 + nota3 + nota4) / 4);
    console.log(media)
    const resultado = document.getElementById("resultado");

    if (media >= 7){
        resultado.textContent = `Aprovado. Sua média foi ${media}`;
    } else {
        resultado.textContent = `Reprovado. Sua média foi ${media}`;
    }
}