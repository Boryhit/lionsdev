const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let genero = '';

console.log("Gêneros: ");
console.log("Filme de Ação, escolha 1.");
console.log("Filme de Comédia, escolha 2.");
console.log("Filme de Terror, escolha 3.");
console.log("Filme de Animação, escolha 4.");

rl.question("Digite o gênero do filme: ", (input) => {
    genero = parseInt(input)
    switch (genero) {
        case 1:
            console.log("Sala 1: Ação");
            break;
        case 2:
            console.log("Sala 2: Comédia");
            break;
        case 3:
            console.log("Sala 3: Terror");
            break;
            case 4:
        console.log("Sala 4: Animação");
            break;
            default:
            console.log("Gênero não encontrado. Verifique as opções válidas.");
        };
        
    rl.close()

});