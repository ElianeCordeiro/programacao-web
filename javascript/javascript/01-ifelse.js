let idade = prompt("Entre com a sua idade")

idade = +idade //converter para inteiro

let p = document.createElement("p");

if(isNaN(idade)){
    p.innerText = "Isso não é um número";
} else{
    if(idade >= 18){
        p.innerText = "Você é maior de idade";
    } else{
        p.innerText =  "Você é menor de idade";
    }
}
let body2 = document.querySelector("body")
body2.appendChild(p);
