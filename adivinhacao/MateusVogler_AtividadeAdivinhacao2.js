const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let opcoes = ["Pedra", "Papel", "Tesoura", "Lagarto", "Spock"];

let escolhaComputador = '';
let escolhaUsuario = '';
let resultado = '';

function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

escolhaComputador = getRandom(0, 4);
let opcaoComputador = opcoes[escolhaComputador];
//console.log(opcaoComputador);

rl.question("Escolha entre Pedra, Papel, Tesoura, Lagarto ou Spock: ", (i) => {
    escolhaUsuario = i;
    switch (true) {
        case (escolhaUsuario == "Pedra" && opcaoComputador == "Tesoura"):
        case (escolhaUsuario == "Tesoura" && opcaoComputador == "Papel"):
        case (escolhaUsuario == "Pedra" && opcaoComputador == "Lagarto"):
        case (escolhaUsuario == "Lagarto" && opcaoComputador == "Spock"):
        case (escolhaUsuario == "Spock" && opcaoComputador == "Tesoura"):
        case (escolhaUsuario == "Tesoura" && opcaoComputador == "Lagarto"):
        case (escolhaUsuario == "Lagarto" && opcaoComputador == "Papel"):
        case (escolhaUsuario == "Papel" && opcaoComputador == "Spock"):
        case (escolhaUsuario == "Spock" && opcaoComputador == "Pedra"):
        case (escolhaUsuario == "Papel" && opcaoComputador == "Pedra"):
            resultado = "Você ganhou.";
            console.log(resultado);
            break;
        case (escolhaUsuario == opcaoComputador):
            resultado = "Empate."
            console.log(resultado);
            break;
        default:
            resultado = "Você perdeu.";
            console.log(resultado);
            break;
    }
    rl.close();
});