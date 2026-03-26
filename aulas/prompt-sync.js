const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}); 

const listaTarefas = [];

rl.question("Digite a sua primeira tarefa: ", (input1) => {
    listaTarefas.push(input1);

    rl.question("Digite a sua segunda tarefa: ", (input2) =>{
        listaTarefas.push(input2);

        rl.question("Digite a sua terceira tarefa: ", (input3) =>{
        listaTarefas.push(input3);

        console.log(`Você tem ${listaTarefas.length} tarefas na sua lista, sendo elas: ${listaTarefas}`);

        listaTarefas.pop();
        console.log(`Você ainda tem ${listaTarefas.length} tarefas à fazer, sendo elas: ${listaTarefas.join(' e ')}`)
        rl.close();

        })
    })
})