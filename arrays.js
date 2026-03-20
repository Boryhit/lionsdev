const numeros = [10, 20, 30, 40, 50];

// console.log(numeros[3])

if (numeros[0] > numeros[2]){
    console.log(`O numero ${numeros[0]} é maior que o ${numeros[2]}`)
} else {
    console.log(`O numero ${numeros[0]} é menor que o ${numeros[2]}`)
}


//! Atividade 1

let minhaMesa = ["Gabriel", "Caique", "Mateus", "André"];
console.log(`Meu nome é ${minhaMesa[2]}, meus colegas são ${minhaMesa[0]}, ${minhaMesa[1]} e ${minhaMesa[3]}.`);

//! Atividade 2


// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// // rl.setPrompt('Digite um número: ');
// rl.prompt();
// console.log("Digite dois números")
// let entradaUsuario = ''
// let entradaUsuario2 = ''

// rl.on('line', (input) => {
//         entradaUsuario = parseFloat(input)
//     rl.on('line', (input2) => {
//         entradaUsuario2 = parseFloat(input2)
//         console.log(entradaUsuario + entradaUsuario2)
//     })
// })


const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// rl.setPrompt('Digite um número: ');
rl.prompt();
console.log("Digite as notas das provas")
const prova1 = [];
const prova2 = [];
let nota1 = '';
let nota2 = '';
rl.on('line', (input) => {

        nota1 = parseFloat(input);
        prova1.push(nota1)

    rl.on('line', (input2) => {

        nota2 = parseFloat(input2)
        prova2.push(nota2)

        const media = (prova1[0] + prova2[0]) / 2
        console.log(media)
    })    
})

//! Atividade 3
