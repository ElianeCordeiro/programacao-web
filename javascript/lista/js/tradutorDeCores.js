const botao = document.getElementById("tradutor");

botao.addEventListener("mousedown", traduzirCor);

function traduzirCor(){
    const corDeEntrada = document.getElementById("corDeEntrada");
    const traducao = document.getElementById("traducao");

    const corEmIngles = corDeEntrada.value.toLowerCase();

    console.log(corEmIngles)

    let corTraduzida;

    switch(true){
        case corEmIngles === "red":
            corTraduzida = "Vermelho";
            break;
        case corEmIngles === "green":
            corTraduzida = "Verde";
            break;
        case corEmIngles === "yellow":
            corTraduzida = "Amarela";
            break;
        case corEmIngles === "white":
            corTraduzida = "Branca";
            break;
        case corEmIngles === "black":
            corTraduzida = "Preta";
            break;
        case corEmIngles === "blue":
            corTraduzida = "Azul";
            break;
        default:
            corTraduzida = "Cor desconhecida";
    }

    traducao.textContent = `A cor ${corEmIngles} em português é ${corTraduzida}`;

}