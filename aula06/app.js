/*
 * 1 - Objetivo: Calcular a média de uma universidade
 * 2 - Data: 10/02/2023
 * 3 - Autor: Oswaldo Barbosa 
 * 4 - Versão: 1.0
 */

var readline = require("readline");

var calcularMedia = require("./modulo/calcularMedia.js")

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDados.question("Digite o nome do aluno: \n", function (alunoNome) {
    let nomeAluno = alunoNome

    entradaDados.question("Escolha o seu gênero: \n 1 - Masculino \n 2 - Feminino \n", function (alunoGenero) {
        let generoAluno = alunoGenero
        let definicaoAluno

        entradaDados.question("Digite o nome do professor: \n", function (professorNome) {
            let nomeProfessor = professorNome

            entradaDados.question("Escolha o gênero do professor: \n 1 - Masculino \n 2 - Feminino \n", function (professorGenero) {
                let generoProfessor = professorGenero
                let definicaoProfessor

                entradaDados.question("Digite o curso do aluno: \n", function (alunoCurso) {
                    let curso = alunoCurso

                    entradaDados.question("Digite a disciplina: \n", function (alunoDisciplina) {
                        let disciplina = alunoDisciplina

                        entradaDados.question("Digite a primeira nota: \n", function (notaUm) {
                            let nota1 = notaUm

                            entradaDados.question("Digite a segunda nota: \n", function (notaDois) {
                                let nota2 = notaDois

                                entradaDados.question("Digite a terceira nota: \n", function (notaTres) {
                                    let nota3 = notaTres

                                    entradaDados.question("Digite a quarta nota: \n", function (notaQuatro) {
                                        let nota4 = notaQuatro

                                        let media = Number();

                                        if (generoAluno == 1) {
                                            definicaoAluno = " O Aluno ";
                                        } else if (generoAluno == 2) {
                                            definicaoAluno = " A Aluna ";
                                        } else if (generoAluno > 2) {
                                            console.log("ERRO: Você digitou um número inválido para o gênero do aluno(a)")
                                        } else 

                                            if (generoProfessor == 1) {
                                                definicaoProfessor = " Professor: ";
                                            } else if (generoProfessor == 2) {
                                                definicaoProfessor = " Professora: ";
                                            } else if (generoProfessor > 2) {
                                                console.log("ERRO: Você digitou um número inválido para o gênero do professor(a)")
                                            } else

                                                media = calcularMedia.getCalculadora(nota1, nota2, nota3, nota4)

                                        if (media >= 70) {
                                            console.log(definicaoAluno + nomeAluno + " teve a média de " + media, "então foi APROVADO! na disciplina" + disciplina)
                                            console.log(" Curso: " + curso)
                                            console.log(definicaoProfessor + nomeProfessor)
                                            console.log(" Notas do Aluno: Nota 1:" + nota1 + " Nota 2:" + nota2 + " Nota 3:" + nota3 + " Nota 4:" + nota4)
                                            console.log(" Média Final: " + media)

                                        } else if (media > 50 && media < 70) {
                                            console.log(definicaoAluno + nomeAluno + " teve a média de " + media, " está de EXAME!")
                                            console.log(" Curso: " + curso)
                                            console.log(definicaoProfessor + nomeProfessor)
                                            console.log(" Notas do Aluno: Nota 1:" + nota1 + " Nota 2:" + nota2 + " Nota 3:" + nota3 + " Nota 4:" + nota4)

                                        } else if (media < 50) {
                                            console.log(definicaoAluno + nomeAluno + " teve a média de " + media, "então foi REPROVADO!")
                                            console.log(" Curso: " + curso)
                                            console.log(definicaoProfessor + nomeProfessor)
                                            console.log(" Notas do Aluno: Nota 1:" + nota1 + " Nota 2:" + nota2 + " Nota 3:" + nota3 + " Nota 4:" + nota4)
                                            console.log(" Média Final: " + media)
                                        
                                        }
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