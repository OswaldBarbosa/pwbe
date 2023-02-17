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

        definicaoAluno = calcularMedia.getDefinicaoDoGeneroDoAluno(generoAluno)

        entradaDados.question("Digite o nome do professor: \n", function (professorNome) {
            let nomeProfessor = professorNome

            entradaDados.question("Escolha o gênero do professor: \n 1 - Masculino \n 2 - Feminino \n", function (professorGenero) {
                let generoProfessor = professorGenero
                let definicaoProfessor

                definicaoProfessor = calcularMedia.getDefinicaoDoGeneroDoProfessor(generoProfessor)

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

                                        if (nomeAluno == "") {
                                            console.log("ERRO: Você esqueceu de digitar o nome do aluno!")
                                            entradaDados.close()
                                        } else if (!isNaN(nomeAluno)) {
                                            console.log("ERRO: Você digitou um número no nome do aluno")
                                            entradaDados.close()
                                        } else if (nomeProfessor == "") {
                                            console.log("ERRO: Você esqueceu de digitar o nome do professor!")
                                            entradaDados.close()
                                        } else if (!isNaN(nomeProfessor)) {
                                            console.log("ERRO: Você digitou um número no nome do professor")
                                            entradaDados.close()
                                        } else if (curso == "") {
                                            console.log("ERRO: Você esqueceu de digitar o curso!")
                                            entradaDados.close()
                                        } else if (!isNaN(curso)) {
                                            console.log("ERRO: Você digitou um número no curso!")
                                            entradaDados.close()
                                        } else if (disciplina == "") {
                                            console.log("ERRO: Você esquceu de digitar a discplina!")
                                            entradaDados.close()
                                        } else if (!isNaN(disciplina)) {
                                            console.log("ERRO: Você digitou um número na disciplina!")
                                            entradaDados.close()
                                        } else {

                                            let notas = Number(nota1, nota2, nota3, nota4)

                                            if (notas == "") {
                                                console.log("ERRO: Você esqueceu de digitar alguma nota")
                                                entradaDados.close()
                                            } else if (isNaN(notas)) {
                                                console.log("ERRO: Você digitou uma letra em alguma das notas")
                                                entradaDados.close()
                                            } else if (notas > 100 || notas < 0) {
                                                console.log("ERRO: Você digitou uma nota fora do escopo de 0 á 100")
                                                entradaDados.close()
                                            } else {

                                                let media = Number()

                                                media = calcularMedia.getCalculadora(nota1, nota2, nota3, nota4)

                                                let statusAluno

                                                if (media >= 70) {
                                                    statusAluno = "APROVADO"
                                                    console.log(`${definicaoAluno} ${nomeAluno} foi ${statusAluno} na disciplina ${disciplina}`)
                                                    console.log(`Curso: ${curso}`)
                                                    console.log(`${definicaoProfessor} ${nomeProfessor}`)
                                                    console.log(`Notas do aluno: Nota 1: ${nota1}, Nota 2: ${nota2}, Nota 3: ${nota3}, Nota 4: ${nota4}`)
                                                    console.log(`Média Final: ${media}`)
                                                    entradaDados.close()
                                                } else if (media < 50) {
                                                    statusAluno = "REPROVADO"
                                                    console.log(`${definicaoAluno} ${nomeAluno} foi ${statusAluno} na disciplina ${disciplina}`)
                                                    console.log(`Curso: ${curso}`)
                                                    console.log(`${definicaoProfessor} ${nomeProfessor}`)
                                                    console.log(`Notas do aluno: Nota 1: ${nota1}, Nota 2: ${nota2}, Nota 3: ${nota3}, Nota 4: ${nota4}`)
                                                    console.log(`Média Final: ${media}`)
                                                    entradaDados.close()
                                                } else {
                                                    statusAluno = "EXAME"
                                                    console.log(`${definicaoAluno} ${nomeAluno} está de ${statusAluno} na disciplina ${disciplina}`)
                                                    entradaDados.question("Digite a nota do exame: \n", function (notaDoExame) {
                                                        let notaExame = notaDoExame
                                                        let mediaExame

                                                        mediaExame = calcularMedia.getExame(media, notaExame)

                                                        if (mediaExame > 60) {
                                                            statusAluno = "APROVADO NO EXAME"
                                                            console.log(`${definicaoAluno} ${nomeAluno} foi ${statusAluno} na disciplina ${disciplina}`)
                                                            console.log(`Curso: ${curso}`)
                                                            console.log(`${definicaoProfessor} ${nomeProfessor}`)
                                                            console.log(`Notas do aluno: Nota 1: ${nota1}, Nota 2: ${nota2}, Nota 3: ${nota3}, Nota 4: ${nota4}, Nota do Exame: ${notaExame}`)
                                                            console.log(`Média Final: ${mediaExame.toFixed(2)}`)
                                                            entradaDados.close()
                                                        } else {
                                                            statusAluno = "REPROVADO"
                                                            console.log(`${definicaoAluno} ${nomeAluno} foi ${statusAluno} na disciplina ${disciplina}`)
                                                            console.log(`Curso: ${curso}`)
                                                            console.log(`${definicaoProfessor} ${nomeProfessor}`)
                                                            console.log(`Notas do aluno: Nota 1: ${nota1}, Nota 2: ${nota2}, Nota 3: ${nota3}, Nota 4: ${nota4}, Nota do Exame: ${notaExame}`)
                                                            console.log(`Média Final: ${mediaExame.toFixed(2)}`)
                                                            entradaDados.close()
                                                        }
                                                    })
                                                }
                                            }
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
