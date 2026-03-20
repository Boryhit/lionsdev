const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
 
let cadastro = [];

function menu() {
    limparTexto();
    console.log("=======Menu=======");
    console.log("==================");
    console.log("1: Cadastrar Aluno");
    console.log("2: Editar Aluno");
    console.log("3: Excluir Aluno");
    console.log("4: Listar Alunos");
    console.log("5: Encerrar");

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
            console.log("Opção 3: Excluir Aluno");
            deletar();
            break;
        case 4:
            limparTexto();
            console.log("Opção 4: Listar Alunos ");
            listar();
            break;
        case 5:
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
                    let alunos = {
                        nome: i1,
                        idade: i2,
                        curso: i3
                    };
                    cadastro.push(alunos);
                    console.log("Aluno adicionado", alunos);
                    voltarMenu();
            });
        });
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
                        cadastro[i].nome = i1;
                        cadastro[i].idade = i2;
                        cadastro[i].curso = i3;
                        console.log("Aluno editado", cadastro[i]);
                        voltarMenu();
            });
        });
    });
});

}

function deletar() {
    console.table(cadastro);
    rl.question("Digite o indice do aluno que deseja excluir: ", (i) =>{
        cadastro.splice(i, 1);
            console.log("Usuário Deletado!");
            voltarMenu();
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

function limparTexto() {
    console.clear();
}

function voltarMenu(){
    rl.question("Precione enter para voltar ao menu!", (i) =>{
        menu();
    });
}

menu();