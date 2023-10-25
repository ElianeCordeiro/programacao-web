/* A partir do uso do input fazer um programa que imprima na tela o conteúdo escrito no input, através do JS */

// Passo 1 - Obter o input

const input = document.getElementById("entrada");
const div = document.getElementById("conversa");

// Passo 2 - Escutar eventos de teclado

input.addEventListener("keypress", adicionarConversa);

function adicionarConversa(evento){
    if(evento.key === "Enter"){
        const p = document.createElement("p");
        p.innerText = `Fulano escreveu:  ${evento.target.value}`;
        div.appendChild(p);
        evento.target.value = "";
    }
}