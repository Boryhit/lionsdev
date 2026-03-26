const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let numeros = [27, 10, 3, 0, 20, 5, 6, 3];
let par = [];
let impar = [];

rl.question("Digite a sua idade: ", (i) => {
    let idade = parseFloat(i);
    numeros.push(idade);
    
    for (let i = 0; i < numeros.length; i++) {
        numeros[i];
        if ((numeros[i]) % 2 == 0){
            par.push(numeros[i]);
        } else {
            impar.push(numeros[i]);
        };
    };
    console.log(par);
    console.log(impar);

    rl.close();
});