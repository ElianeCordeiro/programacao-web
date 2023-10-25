let estudante1 = {
    nome: "João",
    idade: 34,
    nota1: 5.5,
    nota2: 9,
    endereco: {
        rua: 'Rua 1',
        bairro: 'Bairro 1',
        numero: 0
    }
}
let estudante2 = {
    nome: "Maria",
    idade: 34,
    nota1: 5.5,
    nota2: 9,
    
}


console.log(estudante1.nome)
console.log(estudante1["nome"])

console.log(estudante1.endereco.bairro)

console.log(estudante2?.endereco?.rua) //se o estudante2 tiver endereco acessse a propriedade rua

let frutasPreferidas = ['maçã', 'morango', 'melancia']

console.log(frutasPreferidas[1])

//Concatenar Strings
console.log("Olá" + "mundo")

//Template String
let mensagem1 = "Eliane"
let mensagem2 = "Cordeiro"
let resultado = `O seu usuário é: ${mensagem1} ${mensagem2}`

alert(resultado)