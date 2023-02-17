/*
 * 1 - Objetivo: Calcular a média de uma universidade
 * 2 - Data: 10/02/2023
 * 3 - Autor: Oswaldo Barbosa 
 * 4 - Versão: 1.0
 */

const getCalculadora = function (notaUm, notaDois, notaTres, notaQuatro) {

   let nota1 = Number(notaUm);
   let nota2 = Number(notaDois);
   let nota3 = Number(notaTres);
   let nota4 = Number(notaQuatro);
   let media;
   let status = true

   media = (nota1 + nota2 + nota3 + nota4) / 4;
   return media

}

const getExame = function (mediaDoAluno, notaDoExame) {
   let notaExame = notaDoExame
   let media = mediaDoAluno
   let mediaExame
   let status = true

   mediaExame = (Number(media) + Number(notaExame)) / 2
   return mediaExame
}

const getDefinicaoDoGeneroDoAluno = function (generoDoAluno) {
   let generoAluno = generoDoAluno
   let definicaoAluno
   let status = true

   if (generoAluno == "") {
      console.log("ERRO: Você esqueceu de digitar o gênero do aluno!")
      status = false
   } else if (isNaN(generoAluno)) {
      console.log("ERRO: Você digitou alguma letra no gênero do aluno!")
      status = false
   } else if (generoAluno > 2 || generoAluno < 1) {
      console.log("ERRO: Você digitou uma opção inválida para o gênero do aluno")
      status = false
   }else if (generoAluno == 1) {
      definicaoAluno = "O Aluno"
      return definicaoAluno
   } else if (generoAluno == 2) {
      definicaoAluno = "A Aluna"
      return definicaoAluno
   }

   return status

}

const getDefinicaoDoGeneroDoProfessor = function (generoDoProfessor) {
   let generoProfessor = generoDoProfessor
   let definicaoProfessor
   let status = true

   if (generoProfessor == "") {
      console.log("ERRO: Você esqueceu de digitar o gênero do professor!")
      status = false
   } else if (isNaN(generoProfessor)) {
      console.log("ERRO: Você digitou alguma letra no gênero do aluno!")
      status = false
   } else if (generoProfessor > 2 || generoProfessor < 1) {
      console.log("ERRO: Você digitou uma opção inválida para o gênero do aluno")
      status = false
   } else if (isNaN(generoDoProfessor)) {
      console.log("ERRO: Você digitou alguma letra no gênero do professor!")
      status = false
   } else if (generoProfessor == 1) {
      definicaoProfessor = "Professor:"
      return definicaoProfessor
   } else if (generoProfessor == 2) {
      definicaoProfessor = "Profesora:"
      return definicaoProfessor
   }

   return status

}

module.exports = {
   getCalculadora,
   getExame,
   getDefinicaoDoGeneroDoAluno,
   getDefinicaoDoGeneroDoProfessor
}




