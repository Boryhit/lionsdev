const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function getRandom() {
  return Math.floor((Math.random() * 100) + 1);
}

let aleatory = getRandom();
let number = '';
let tentativas = 1;

console.log("Seja bem-vindo ao sorteio dos números!");

function correta () {
    rl.question("Digite um número: ", (i) => {
    number = parseFloat(i);
    if (tentativas <= 10){
        switch (true) {
            case (number == aleatory):
                console.log("Parabéns o número está correto!");
                console.log(`Parabéns você acertou o número. O número era ${aleatory}. Você precisou de ${tentativas} tentativas`);
                rl.close();
                break;
            case (number < aleatory):
                console.clear();
                console.log("Muito abaixo!")
                console.log("Tente Novamente!");
                correta();
                tentativas++;
                break;
            case (number > aleatory):
                console.clear();
                console.log("Muito alto!")
                console.log("Tente Novamente!");
                correta();
                tentativas++;
                break;
            default:
                console.log("Número inválido!");
                console.log("Tente Novamente!");
                correta();
                tentativas++;
                break;
            }
        } else {
            console.log("Número máximo de tentativas atingido!");
            rl.close();
            };
        });
    };
correta();
