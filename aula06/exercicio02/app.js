/*
 * 1 - Objetivo: fazer uma tabuada do 2 á 100
 * 2 - Data: 17/02/2023
 * 3 - Autor: Oswaldo BArbosa
 * 4 - Versão: 1.0
 */

//Importe da biblioteca readline
var readline = require('readline')

var calcularTabuada = require('./modulo/calcularTabuada.js')


var entradadados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradadados.question('Digite a tabuada inicial: \n', function (inicialTabuada) {
    let tabuadaInicial = inicialTabuada

    entradadados.question('Digite a tabuada final: \n', function (finaltabuada) {
        let tabuadaFinal = finaltabuada

        entradadados.question('Digite o mínimo multiplicador: \n', function (minMultiplicador) {
            let minimoMultiplicador = minMultiplicador

            entradadados.question('Digite o maximo multiplcador: \n', function (maxMultiplicador) {
                let maximoMultiplicador = maxMultiplicador

                if (tabuadaInicial == "") {
                    console.log(`ERRO: Você esqueceu de digitar um valor na tabuada inicial`)
                    entradadados.close()
                } else if (isNaN(tabuadaInicial)) {
                    console.log(`ERRO: Você digitou uma letra na tabuada inicial`)
                    entradadados.close()
                } else if (tabuadaFinal == "") {
                    console.log(`ERRO: Você esquceu de digitar um valor na tabuada final`)
                    entradadados.close()
                } else if (isNaN(tabuadaFinal)) {
                    console.log(`ERRO: Você digitou uma letra na tabuada final`)
                    entradadados.close()
                } else if (minMultiplicador == "") {
                    console.log(`ERRO: Você esqueceu de digitar um valor no mínimo multiplicador`)
                } else if (isNaN(minimoMultiplicador)) {
                    console.log(`ERRO: Você digitou uma letra no mínimo multiplicador`)
                    entradadados.close()
                } else if (maximoMultiplicador == "") {
                    console.log(`ERRO: Você deixou de digitar um número no maximo multiplicador`)
                    entradadados.close()
                } else if (isNaN(maximoMultiplicador)) {
                    console.log(`ERRO: Você digitou uma letra no maximo multiplicador`)
                    entradadados.close()
                } else {

                    let tabuada = Number()

                    tabuada = calcularTabuada.getTabuada(tabuadaInicial, tabuadaFinal, minimoMultiplicador, maximoMultiplicador)

                    entradadados.close()

                }
            })
        })
    })
})