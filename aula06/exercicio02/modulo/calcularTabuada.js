/*
 * 1 - Objetivo: fazer uma tabuada do 2 á 100
 * 2 - Data: 17/02/2023
 * 3 - Autor: Oswaldo BArbosa
 * 4 - Versão: 1.0
 */

const getTabuada = function (inicialTabuada, finalTabuada, minMultiplicador, maxMultiplicador) {
    let tabuadaInicial = Number(String(inicialTabuada).replace(",", "."))
    let tabuadaFinal = Number(String(finalTabuada).replace(",", "."))
    let minimoMultiplicador = Number(String(minMultiplicador).replace(",", "."))
    let maximoMultiplicador = Number(String(maxMultiplicador).replace(",", "."))

    if (tabuadaInicial < 2 || tabuadaInicial > 100) {
        console.log(`ERRO: A tabuada mínima é a do 2 e a máxima é a do 100`)
    } else if (tabuadaFinal <= tabuadaInicial || tabuadaFinal > 100) {
        console.log(`ERRO: A tabuada final não pode ser menor ou igual a tabuada inicial`)
    } else if (minimoMultiplicador < 1 || minimoMultiplicador > 50) {
        console.log(`ERRO: O mínimo multiplicador não pode ser menor do que 2 e maior do 50`)
    } else if (maximoMultiplicador < 1 || maximoMultiplicador > 50) {
        console.log(`ERRO: O maximo multiplicador não pode ser menor do que 2 e maior do 50`)
    } else if (maximoMultiplicador <= minimoMultiplicador) {
        console.log(`ERRO: O maximo multiplicar não pode ser menor ou igual a o mínimo multiplicador`)
    } else {

        let resultado

        while (tabuadaInicial <= tabuadaFinal) {
            let minMultiplicador = minimoMultiplicador
            console.log(`Tabuada do: ${tabuadaInicial}`)
            while (minMultiplicador <= maximoMultiplicador) {
                resultado = tabuadaInicial * minMultiplicador
                console.log(`${tabuadaInicial} X ${minMultiplicador} = ${resultado}`)
                minMultiplicador++
            }
            tabuadaInicial++
        }
    }
}

module.exports = {
    getTabuada
}