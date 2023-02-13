/*
 * 1 - Objetivo: Calcular a média de uma universidade
 * 2 - Data: 10/02/2023
 * 3 - Autor: Oswaldo Barbosa 
 * 4 - Versão: 1.0
 */

const getCalculadora = function(numero1, numero2, numero3, numero4) {

   let nota1 = Number(numero1);
   let nota2 = Number(numero2);
   let nota3 = Number(numero3);
   let nota4 = Number(numero4);
   // let notas = nota1, nota2, nota3, nota4;
   let media;
   let mediaExame;

   if (nota1 == "" || nota2 == "" || nota3 == "" || nota4 == "") {
      console.log("ERRO: Você esqueceu de digitar algum valor")
   } else if (nota1 > 100 || nota2 > 100 || nota3 > 100 || nota4 > 100) {
      console.log("ERRO: Você digitou uma nota maior do que 100")
   } else if (nota1 < 0 || nota2 < 0 || nota3 < 0 || nota4 < 0) {
      console.log("ERRO: Você digitou uma nota menor do que 0")
   } else {

      media = (nota1 + nota2 + nota3 + nota4) / 4;
      return media

   } 
   
}

module.exports  = {
   getCalculadora
}



