const { stdin } = require("process");
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


rl.question("Digite o número de lados do dado: ", (i) => {
    max = parseInt(i);
    let aleatory = getRandom(1, max);
    console.log("O número do dado sorteado foi: ", aleatory);
    rl.close();
});