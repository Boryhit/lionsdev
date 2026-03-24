const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
 
let cadastro = [];

function menu()
{
console.log("\n==== MENU ====");
console.log("===============");
console.log("1 - Cadastrar Aluno");
console.log("2 - Editar Aluno")
console.log("3 - Pesquisar Por Nome");
console.log("4 - Listar Todos");
console.log("5 - Excluir Um Aluno");
console.log("6 - Maior Nota");
console.log("7 - Média das Notas");
console.log("0 - SAIR");
console.log("===============");
// O que vêm depois?

rl.question("Digite o opção desejada: ", (input) => {
    let opcao = parseInt(input)
    switch (opcao) {
        case 1:
            limparTexto();
            console.log("Opção 1: Cadastrar Aluno");
            cadastrar();
            break;
        case 2:
            limparTexto();
            console.log("Opção 2: Editar Aluno");
            editar();
            break;
        case 3:
            limparTexto();
            console.log("Opção 3: Pesquisar por Nome");
            pesquisar();
            break;
        case 4:
            limparTexto();
            console.log("Opção 4: Listar Alunos");
            listar();
            break;
        case 5: 
            limparTexto();
            console.log("Opção 5: Excluir Aluno");
            deletar();
            break;
        case 6:
            limparTexto();
            console.log("Opção 6: Maior Nota");
            maiorNota();
            break
        case 7 :
            limparTexto();
            console.log("Opção 7: Média de Notas");
            mediaNotas();
            break;
        case 0:
            limparTexto();
            console.log("Encerrando o cadastro");
            rl.close();
            break;
        default:
            limparTexto();
            console.log("Opção inválida!");
            menu();
            break;
        };

});
};

function cadastrar () {
    rl.question("Digite o nome do Aluno: ", (i1) => {
        limparTexto();
        rl.question("Digite a idade do Aluno: ", (i2) => {
            limparTexto();
            rl.question("Digite o nome do curso: ", (i3) => {
                limparTexto();
                rl.question("Digite a nota do Aluno: ", (i4) => {
                    limparTexto();
                    let alunos = {
                        nome: i1,
                        idade: Number(i2),
                        curso: i3,
                        nota: parseFloat(i4)
                    };
                    cadastro.push(alunos);
                    console.log("Aluno adicionado", alunos);
                    voltarMenu();
                });
            });
        });
    });
};

function pesquisar() {
    rl.question("Digite o nome do aluno:", (i) => {
        limparTexto();
        let buscar = cadastro.filter(function(element){
            return element.nome === i;
            });
        if (buscar.length > 0){
            console.table(buscar);
            voltarMenu();
        } else{
            console.log("O Aluno não está cadastrado!");
            voltarMenu();
        };
        
    });
};

function editar() {
    rl.question("Qual aluno você deseja alterar?: ", (i) => {
        rl.question("Digite o novo nome do Aluno: ", (i1) => {
            limparTexto();
            rl.question("Digite a nova idade do Aluno: ", (i2) => {
                limparTexto();
                rl.question("Digite o novo nome do curso: ", (i3) => {
                    limparTexto();
                    rl.question("Digite a nova nota: ", (i4) => {
                        limparTexto();
                        cadastro[i].nome = i1;
                        cadastro[i].idade = Number(i2);
                        cadastro[i].curso = i3;
                        cadastro[i].nota = parseFloat(i4);
                        console.log("Aluno editado", cadastro[i]);
                        voltarMenu();
                    });
                });
            });
        });
    });
};

function listar () {
    if (cadastro.length === 0){
        console.log("Ainda não existem alunos cadastrados");
        voltarMenu();
    } else {
        console.table(cadastro);
        voltarMenu();
    };
};

function deletar() {
    console.table(cadastro);
    rl.question("Digite o indice do aluno que deseja excluir: ", (i) =>{
        cadastro.splice(i, 1);
            console.log("Usuário Deletado!");
            voltarMenu();
    });
};

function maiorNota(){
    let notaMaior = 0;
    let alunosNotaMaior = [];
    for (let i = 0; i < cadastro.length; i++){
        if (cadastro[i].nota >= notaMaior) {
            if (cadastro [i].nota > notaMaior){
                alunosNotaMaior = [];
            }
            notaMaior = cadastro[i].nota;
            alunosNotaMaior.push(cadastro[i]);
        };
    };
    if (alunosNotaMaior.length > 1) {
        console.log("A maior nota é:", notaMaior);
        console.log(`Os Alunos com maiores notas são: ${alunosNotaMaior.nome}, com a nota de: ${alunosNotaMaior.nota}`);
    } else {
        console.log("A maior nota é:", notaMaior);
        console.log(`O Aluno com a maior notas é: ${alunosNotaMaior.nome}, com a nota de: ${alunosNotaMaior.nota}`);
    };
    voltarMenu();
};

function mediaNotas(){
    console.table(cadastro)
    let soma = 0;
    cadastro.forEach(element => {
                soma += element.nota;
            });
            let media = soma / cadastro.length;
            console.log("Essa é a média: ", media);
            voltarMenu();
};

function limparTexto() {
    console.clear();
}

function voltarMenu(){
    rl.question("Precione enter para voltar ao menu!", (i) =>{
        limparTexto();
        menu();
    });
}

menu();