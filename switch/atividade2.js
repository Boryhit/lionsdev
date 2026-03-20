const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let nota = '';

rl.question("Digite a nota: ", (i) => {
    nota = parseFloat(i);

    switch (true) {
        case (nota >=90 && nota <= 100):
            console.log('Classificação A. Aprovado');
            break;
        case (nota >=80 && nota <= 89):
            console.log('Classificação B. Aprovado');
            break;
        case (nota >=70 && nota <= 79):
            console.log('Classificação C. Aprovado');
            break;
        case (nota >=60 && nota <= 69):
            console.log('Classificação D. Recuperação');
            break;
        case (nota >=0 && nota <= 59):
            console.log('Classificação F. Reprovado');
            break;
        default:
            console.log("Nota Inválida!");
        };
    rl.close();
});