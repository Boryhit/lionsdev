const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question("Digite um número: ", (i) => {
    let numero = parseFloat(i);
    if (numero % 5 === 0){
        console.log(`O número ${numero} é divisível por 5.`);
    } else {
        console.log(`O número ${numero} não é divisível por 5.`);
    }
    rl.close();
});