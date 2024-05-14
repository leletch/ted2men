export interface Aluno {
    nome: string;
}

export interface Fileira {
    nome: string;
    numero: number;
    alunos: Aluno[];
}