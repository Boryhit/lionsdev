const numeroPar = 10 % 2
const numeroImpar = 9 % 2

const comparacao = numeroPar === 0
const comparacao1 = numeroImpar === 1

console.log(comparacao)
console.log(comparacao1)


//! Exercício 2

const nota1 = 7
const nota2 = 8

const aprovado = nota1 >= 6 && nota2 >= 6
console.log(aprovado)

const reprovado = nota1 < 6 && nota2 < 6

console.log(reprovado)

//! Exercício 3

const estaChovendo = false;
const estaNublado = false;

const levarGuardaChuva = estaChovendo === true || estaNublado === true;

console.log(levarGuardaChuva)