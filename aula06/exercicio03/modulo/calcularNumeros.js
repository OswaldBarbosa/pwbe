/*
 * 1 - Objetivo: fazer uma tabuada do 2 á 100
 * 2 - Data: 17/02/2023
 * 3 - Autor: Oswaldo BArbosa
 * 4 - Versão: 1.0
 */

 const getCalcularImparPar = function (inicialNumero, finalNumero) {
     let numeroInicial = Number(String(inicialNumero).replace(",","."))
     let numeroFinal = Number(String(finalNumero).replace(",","."))
     contador = 0
     let resultado

     while (numeroInicial <= numeroFinal) {
         resultado = numeroInicial % 2 == 0
         console.log(` ${resultado}`)
         numeroInicial+=1
     }
     
 }

 getCalcularImparPar(0,10)