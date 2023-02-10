/*
 * 1 - Objetivo: Calcular a média de uma universidade
 * 2 - Data: 10/02/2023
 * 3 - Autor: Oswaldo Barbosa 
 * 4 - Versão: 1.0
 */

var readline = require("readline");

var calculadora = require("./modulo/calcularMedia.js")

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})



entradaDados.question("Digite o nome do aluno: \n", function (alunoNome) {
    let nomeAluno = alunoNome;

        entradaDados.question("Escolha o seu gênero: \n 1 - Masculino \n 2 - Feminino \n", function (alunoGenero) {
            let generoAluno = alunoGenero;

            entradaDados.question("Digite o nome do professor: \n", function (professorNome) {
                let nomeProfessor = professorNome;

                entradaDados.question("Escolha o gênero do professor: \n 1 - Masculino \n 2 - Feminino \n", function (professorGenero) {
                    let generoProfessor = professorGenero;

                    entradaDados.question("Digite o curso do aluno: \n", function (alunoCurso) {
                        let curso = alunoCurso;

                        entradaDados.question("Digite a disciplina: \n", function (alunoDisciplina) {
                            let disciplina = alunoDisciplina;

                            entradaDados.question("Digite a primeira nota: \n", function (notaUm) {
                                let nota1 = notaUm;

                                entradaDados.question("Digite a segunda nota: \n", function (notaDois) {
                                    let nota2 = notaDois;

                                    entradaDados.question("Digite a terceira nota: \n", function (notaTres) {
                                        let nota3 = notaTres;

                                        entradaDados.question("Digite a quarta nota: \n", function (notaQuatro) {
                                            let nota4 = notaQuatro;

                                            let media;

                                            if (generoAluno == 1) {
                                                var genAluno = " O Aluno ";
                                            } else if (generoAluno == 2) {
                                                var genAluno = "A Aluna ";
                                            } else if (generoProfessor == 1) {
                                                var genProfessor = "O Professor "
                                            } else if (generoProfessor == 2) {
                                                var genProfessor = "A Professora "
                                            } else

                                            media = calculadora.getCalculadora(nota1, nota2, nota3, nota4)

                                            console.log(genAluno + nomeAluno + " foi " + media)

                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
})