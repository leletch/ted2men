// importando os arquivos
import { Aluno, Fileira,} from './types';
import * as fila from './fila';

// declarando o objeto "alunos"
const alunos: Aluno[] = [
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
    // Declarando o objeto "fileiras"
    const fileiras: Fileira[] = [];

    // Preenchendo as fileiras
    let index = 0; // Percorre a lista de alunos
    while (index < alunos.length) {
        
        const fileira: Fileira = {
            nome: `Fileira ${fileiras.length + 1}`, // Nome da fileira com o número
            alunos: [] // Array vazio para armazenar os alunos da fileira
        };

        for (let i = 0; i < 5 && index < alunos.length; i++) { // Preencher a fileira com até 5 alunos
            fileira.alunos.push(alunos[index +1]); // Adiciona o aluno atual à fileira  
        }

        fileiras.push(fileira);
    }

    // Simulando a saída dos alunos
    fileiras.forEach(fileira => { // Intera sobre as fileiras
        console.log(fileira.nome);

        fileira.alunos.forEach(aluno => { // Interar sobre cada aluno na fileira
            console.log(`${aluno.nome} saiu do lugar ${fileira.alunos.indexOf(aluno) + 1}`);
            console.log(`Tchau ${aluno.nome}!`);
            console.log("-------------------------------");
        });
    });
}

main();