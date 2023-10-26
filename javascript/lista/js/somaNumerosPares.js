let soma = 0;
let resultado = document.getElementById("resultado");

for (let i = 1; i<= 100; i++){

    if (i % 2 == 0 ){
        soma += i;
    }
}

console.log(soma);
resultado.textContent = `O resultado da soma dos números pares de 1 a 100 é ${soma}`;