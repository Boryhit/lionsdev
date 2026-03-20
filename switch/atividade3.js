const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let codigoProduto = '';

console.log("Salgadinhos: ");
console.log("Código A1: Batata Chips.");
console.log("Código B2: Amendoin.");
console.log("Código C3: Bolacha de Chocolate.");

rl.question("Digite o código do salgadinho: ", (i) => {
    codigoProduto = i
    switch (codigoProduto) {
        case "A1":
            console.log("Você escolheu: Batata Chips.");
            break;
        case "B2":
            console.log("Você escolheu: Amendoim.");
            break;
        case "C3":
            console.log("Você escolheu: Bolacha de Chocolate.");
            break;
            default:
            console.log("Código inválido. Tente novamente.");
        };
        
    rl.close()

});