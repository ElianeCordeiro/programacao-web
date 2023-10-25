const botao = document.getElementById("botao");

botao.addEventListener("mousedown", converterParaLetra);

function converterParaLetra(){
    const notaInput = parseFloat(document.getElementById("nota").value);
    const resultado = document.getElementById("resultado");

    let letra;
    
    switch(true){
        case notaInput >= 90:
            letra = 'A';
            break;
        case notaInput >=80:
            letra = 'B';
            break;
        case notaInput >= 70:
            letra = 'C';
            break;
        case notaInput >= 60:
            letra = 'D';
            break;
        default:
            letra = 'F';
    }

    resultado.textContent = `A nota ${notaInput} corresponde a letra ${letra}`;
    console.log(resultado)
}

