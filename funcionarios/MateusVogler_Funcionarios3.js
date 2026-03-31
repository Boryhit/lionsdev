const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
 
let cadastro = [];

const mumia = {
    nome: "O Retorno da Múmia",
    genero: "Aventura/Ação",
    ano: 2001,
    diretor: "Stephen Sommers"
};
cadastro.push(mumia);
const scooby = {
    nome: "Scooby-Doo",
    genero: "Comédia/Aventura",
    ano: 2002,
    diretor: "Raja Gosnell"
};
cadastro.push(scooby);
const tre = {
    nome: "300",
    genero: "Ação/Guerra",
    ano: 2006,
    diretor: " Zack Snyder"
};
cadastro.push(tre);

function menu()
{
console.log("\n==== MENU ====");
console.log("===============");
console.log("1 - Cadastrar Filmes");
console.log("2 - Listar Todos os Filmes");
console.log("3 - Editar Filme");
console.log("4 - Excluir Filme");
console.log("0 - SAIR");
console.log("===============");
// O que vêm depois?

rl.question("Digite o opção desejada: ", (input) => {
    let opcao = parseInt(input)
    switch (opcao) {
        case 1:
            limparTexto();
            console.log("Opção 1: Cadastrar Filme");
            cadastrar();
            break;
        case 2:
            limparTexto();
            console.log("Opção 2: Listar Filmes");
            listar();
            break;
        case 3:
            limparTexto();
            console.log("Opção 3: Editar Filme");
            editar();
            break;
        case 4: 
            limparTexto();
            console.log("Opção 4: Excluir Filme");
            deletar();
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
    rl.question("Digite o nome do filme: ", (i1) => {
        limparTexto();
        rl.question("Digite o genero do filme: ", (i2) => {
            limparTexto();
            rl.question("Digite o ano do filme: ", (i3) => {
                limparTexto();
                rl.question("Digite o diretor do filme: ", (i4) => {
                    limparTexto();
                    let filme = {
                        nome: i1,
                        genero: i2,
                        ano: parseint(i3),
                        diretor: i4
                    };
                    cadastro.push(filme);
                    console.log("Filme adicionado:", filme);
                    voltarMenu();
                });
            });
            
        });
    });
};

function listar () {
    if (cadastro.length === 0){
        console.log("Ainda não existem filmes cadastrados");
        voltarMenu();
    } else {
        console.table(cadastro);
        voltarMenu();
    };
};

function editar() {
    console.table(cadastro);
    rl.question("Digite o indice do filme que você deseja alterar?: ", (i) => {
        rl.question("Digite o novo nome do filme: ", (i1) => {
            limparTexto();
            rl.question("Digite o novo genero do filme: ", (i2) => {
                limparTexto();
                rl.question("Digite o novo ano do filme: ", (i3) => {
                    limparTexto();
                    rl.question("Digite o diretor do filme: ", (i4) => {
                    limparTexto();
                        cadastro[i].nome = i1;
                        cadastro[i].genero = i2;
                        cadastro[i].ano = parseInt(i3);
                        cadastro[i].diretor = i4;
                        console.log("Filme editado", cadastro[i]);
                        voltarMenu();
                    });
                });
            });
        });
    });
};

function deletar() {
    console.table(cadastro);
    rl.question("Digite o indice do filme que deseja excluir: ", (i) =>{
        cadastro.splice(i, 1);
            console.log("Filme Deletado!");
            voltarMenu();
    });
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