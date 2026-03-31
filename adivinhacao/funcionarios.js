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
console.log("1 - Cadastrar Funcionário");
console.log("2 - Editar Funcionário")
console.log("3 - Pesquisar Por Nome");
console.log("4 - Listar Todos os Funcionários");
console.log("5 - Excluir Um Funcionário");
console.log("6 - Funcionário Com Maior Salário");
console.log("0 - SAIR");
console.log("===============");
// O que vêm depois?

rl.question("Digite o opção desejada: ", (input) => {
    let opcao = parseInt(input)
    switch (opcao) {
        case 1:
            limparTexto();
            console.log("Opção 1: Cadastrar Funcionário");
            cadastrar();
            break;
        case 2:
            limparTexto();
            console.log("Opção 2: Editar Funcionário");
            editar();
            break;
        case 3:
            limparTexto();
            console.log("Opção 3: Pesquisar por Nome");
            pesquisar();
            break;
        case 4:
            limparTexto();
            console.log("Opção 4: Listar Funcionários");
            listar();
            break;
        case 5: 
            limparTexto();
            console.log("Opção 5: Excluir Funcionário");
            deletar();
            break;
        case 6:
            limparTexto();
            console.log("Opção 6: Maior Salário");
            maiorSalario();
            break
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
    rl.question("Digite o nome do funcionário: ", (i1) => {
        limparTexto();
        rl.question("Digite o cargo do funcionário: ", (i2) => {
            limparTexto();
            rl.question("Digite o salário do funcionário: ", (i3) => {
                limparTexto();
                let funcionarios = {
                    nome: i1,
                    cargo: i2,
                    salario: parseFloat(i3)
                };
                cadastro.push(funcionarios);
                console.log("Funcionário adicionado", funcionarios);
                voltarMenu();
            });
        });
    });
};

function pesquisar() {
    rl.question("Digite o nome do funcionário:", (i) => {
        limparTexto();
        let buscar = cadastro.filter(function(element){
            return element.nome === i;
            });
        if (buscar.length > 0){
            console.table(buscar);
            voltarMenu();
        } else{
            console.log("O funcionário não está cadastrado!");
            voltarMenu();
        };
        
    });
};

function editar() {
    rl.question("Qual funcionário você deseja alterar?: ", (i) => {
        rl.question("Digite o novo nome do funcionário: ", (i1) => {
            limparTexto();
            rl.question("Digite o novo cargo do funcionário: ", (i2) => {
                limparTexto();
                rl.question("Digite o novo salário do funcionário: ", (i3) => {
                    limparTexto();
                    cadastro[i].nome = i1;
                    cadastro[i].cargo = i2;
                    cadastro[i].salario = i3;
                    voltarMenu();
                });
            });
        });
    });
};

function listar () {
    if (cadastro.length === 0){
        console.log("Ainda não existem funcionários cadastrados");
        voltarMenu();
    } else {
        console.table(cadastro);
        voltarMenu();
    };
};

function deletar() {
    console.table(cadastro);
    rl.question("Digite o indice do funcionário que deseja excluir: ", (i) =>{
        cadastro.splice(i, 1);
            console.log("Funcionário Deletado!");
            voltarMenu();
    });
};

function maiorSalario(){
    let salarioMaior = 0;
    let funcionariosSalarioMaior = [];
    for (let i = 0; i < cadastro.length; i++){
        if (cadastro[i].salario >= salarioMaior) {
            if (cadastro [i].salario > salarioMaior){
                funcionariossalarioMaior = [];
            }
            salarioMaior = cadastro[i].salario;
            funcionariosSalarioMaior.push(cadastro[i]);
        };
    };
    if (funcionariosSalarioMaior.length > 1) {
        console.log("A maior salário é:", salarioMaior);
        console.log(`Os funcionarios com maiores salários são: ${funcionariosSalarioMaior.nome}, com a salário de: ${funcionariosSalarioMaior.salario}`);
    } else {
        console.log("A maior salário é:", salarioMaior);
        console.log(`O Funcionário com a maior salários é: ${funcionariosSalarioMaior.nome}, com a salário de: ${funcionariosSalarioMaior.salario}`);
    };
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