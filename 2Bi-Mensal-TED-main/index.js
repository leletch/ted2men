"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

let alunos = [
    { 
        nome: "João" 
    },
    { 
        nome: "Felipe" 
    },
    { 
        nome: "Maria" 
    },
    { 
        nome: "José" 
    },
    { 
        nome: "Ana" 
    },
    { 
        nome: "Carlos" 
    },
    { 
        nome: "Pedro" 
    },
    { 
        nome: "Paulo" 
    },
    { 
        nome: "Lucas" 
    },
    { 
        nome: "Mariana" 
    },
    { 
        nome: "Juliana" 
    },
    { 
        nome: "Fernanda" 
    },
    { 
        nome: "Rafael" 
    },
    { 
        nome: "Ricardo" 
    },
    { 
        nome: "Jorge" 
    },
    { 
        nome: "Miguel"
    }
];
function main() {
    let fileiras = []; // armazena as fileiras

    // Preenchendo as fileiras
    let index = 0; // percorre a lista de alunos
    while (index < alunos.length) {
        let fileira = { // Cria um objeto representando uma fileira
            nome: "Fileira ".concat(fileiras.length + 1), 
            alunos: [] // array vazio para armazenar os alunos da fileira
        };
        for (let i = 0; i < 5 && index < alunos.length; i++) { // Preenche a fileira com até 5 alunos
            fileira.alunos.push(alunos[index]); // Adiciona o aluno a fileira
            index++; // irá para o próximo aluno
        }
        fileiras.push(fileira); // Adiciona a fileira preenchida ao array 
    }

    // Simulando a saída dos alunos
    fileiras.forEach(function (fileira) { 
        console.log(fileira.nome); 
        fileira.alunos.forEach(function (aluno) { // Para cada aluno na fileira
            console.log("".concat(aluno.nome, " saiu do lugar ").concat(fileira.alunos.indexOf(aluno) + 1)); // Imprime a mensagem de que o aluno saiu do lugar
            console.log("Tchau ".concat(aluno.nome, "!")); // mensagem de despedida para o aluno
            console.log("-------------------------------"); 
        });
    });
}

main(); // retorna o main
