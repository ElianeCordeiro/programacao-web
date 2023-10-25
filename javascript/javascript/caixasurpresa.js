window.addEventListener("load", main); // script no head

function main(){
    const numeroAleatorio = Math.floor(Math.random() * 10) + 1;
    const p = document.querySelector("p");

    p.textContent = numeroAleatorio;

    const div = document.getElementById("caixa");
    div.addEventListener("mouseover", mudarCorDeFundoParaBranco);

    div.addEventListener("mouseout", mudarCorDeFundoParaPreto);
}

function mudarCorDeFundoParaBranco(evento){
    evento.target.style.backgroundColor = "white";
}

function mudarCorDeFundoParaPreto(evento){
    evento.target.style.backgroundColor = "black";
}
