
const saldoEmConta = 100;

const valorDoProduto = 101;

if (saldoEmConta >= valorDoProduto){
    console.log("Você consegue comprar");
} else {
    console.log("Saldo insuficiente");
};

//! Exercício 1

let number = -30;

if (number >= 1){
    console.log(`O número ${number} é positivo`);
} else {
    console.log(`O número ${number} é negativo`);
};

//! Exercício 2 

let numero = 5

if (numero % 2 === 0){
    console.log("Par");
} else {
    console.log("Impar");
};

const num = 10;
const parOuImpar = num % 2;
if (parOuImpar === 0){
    console.log("Número Par")
} else {
    console.log("Número Impar")
}

//! Exercício 3

let nota = 8
let frequencia = 80
if (nota >= 6 && frequencia >= 75){
    console.log("Aprovado!")
} else {
    console.log("Reprovado!")
}

//! Ex 4

let numeros = 38;
if (numeros > 10 && numeros < 50){
    console.log("Está dentro do intervalo");
} else{
    console.log("Está fora do intervalo");
};

//! Ex 5

let saldo = 200;
let produto = 150;
let estoque = true;
if (saldo >= produto && estoque === true){
    console.log("Produto pode ser comprado!");
} else{
    console.log("Produto não pode ser comprado!");
};


// let saldoDisponivel = 100
// let valorProduto = 150
// let quantidadeEstoque = 15
// const comprar2 = valorProduto * 2;
// const quantidadeProdutos = 2
// if (disponivelEstoque === true) {
//     if (saldoDisponivel >= comprar2 && quantidadeEstoque > 1 && quantidadeProdutos < quantidadeEstoque){
//         console.log("Produto pode ser comprado!")
//     } else {
//     console.log("Produto não pode ser comprado!")
// }
// } else {
//     console.log("Produto não está disponível!")
// }

//! Ex 6

let idade = 20;
let titulo = true;
if (idade >= 16 && titulo){
    console.log("Pode votar!");
} else {
    console.log("Não pode votar!");
};


