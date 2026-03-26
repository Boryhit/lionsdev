const readline = require("readline-sync");
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
let nota = [];
let input = 1

while (input <= 10) {
    let inputNota = readline.question(`Digite a nota do aluno ${input}: `);
    let inputNotaNumber = parseFloat(inputNota);
    nota.push(inputNotaNumber);
    input++
};

//console.log(nota);

let soma = 0;
nota.forEach(element => {
    soma += element 
});

let media = soma / nota.length;
console.log("Essa é a media das notas: ", media);

let maiorNota = Math.max(...nota);
console.log("Essa é a maior nota: ", maiorNota);

let menorNota = Math.min(...nota);
console.log("Essa é a menor nota: ", menorNota);

let notasAprovadas = [];
let notasReprovadas = [];
for (let a = 0; a < nota.length; a++){
    if (nota[a] >= 8){
        notasAprovadas.push(nota[a]);
        console.log("Aprovado!");
    } else {
        notasReprovadas.push(nota[a])
        console.log("Reprovado!");
    };
    
};

console.log("Notas Aprovadas: ", notasAprovadas);
console.log("Notas Reprovadas: ", notasReprovadas);
