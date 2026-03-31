const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function getRandom() {
  return Math.floor((Math.random() * 10) + 1);
}

let aleatory = getRandom();
let number = '';
let tentativas = 1;

//console.log(aleatory);

function correta () {
    rl.question("Digite um número: ", (i) => {
    number = parseFloat(i);
    if (number == aleatory){
        console.log("O número está correto!");
        console.log(`Parabéns você acertou o número. O número era ${aleatory}. Você precisou de ${tentativas} tentativas`);
        rl.close();
    } else {
        console.clear();
        console.log("Tente Novamente!");
        correta();
        tentativas++
    };
});
};
correta();
