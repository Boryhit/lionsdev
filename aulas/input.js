
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.setPrompt('Seu Nome: ');
rl.prompt();

let entradaUsuario = ''

rl.on('line', (input) => {
    entradaUsuario = input.toString()
    console.log("Seu nome é", entradaUsuario)

})