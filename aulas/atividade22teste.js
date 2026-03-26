const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let cadastro = [];
let totalProduto = 0;
let soma = 0;

function cadastrando () {
    if (cadastro.length > 2) {
        rl.close()
    } else {
rl.question("Digite o nome do produto: ", (input1) => {
    rl.question("Digite o preço do produto: ", (input2) => {
        rl.question("Digite a quantidade do produto: ", (input3) => {
            produto = {
                nome: input1,
                preco: parseFloat(input2),
                quantidade: parseFloat(input3)
            }
            
            totalProduto = input2 * input3;
            cadastro.push(produto);
            console.log(cadastro);
            console.log("Valor total do produto: ", totalProduto);
            cadastrando();
            for (i = 0; i < cadastro.length; i++){
                soma = i + totalProduto
                console.log("Valor total da compra: ", soma);
            }
        });
    });
});
    };
};
cadastrando();