let paragrafo = document.getElementById("paragrafo1")

paragrafo.innerText = "O texto foi modificado com sucesso"

console.log(paragrafo)

let div1 = document.getElementById("div1")

//Criando elementos do HTML
//section
//h1 = Meus filmes favoritos
//p = Lista dos meus filmes favoritos

let section1 = document.createElement("section")
let h1 = document.createElement("h1")
let p1 = document.createElement("p")


//alterando o conteudo dos elementos
h1.textContent = "Meus filmes favoritos"
p1.innerText = "Lista dos meus filmes favoritos"


//adicionando um elemento dentro do outro
section1.appendChild(h1)
section1.appendChild(p1)
div1.appendChild(section1)

//OBTENDO PARAGRAFOS DENTRO DE UMA DIV

let div2 = document.getElementById("div2")
let p2 = div2.querySelectorAll("p") //retornar um array com esses elementos
console.log(p2)

for(let x=0; x<p2.length; x++){
    p2[x].innerText = "Paragrafo alterado"
    p2[x].style.color = "green"
}