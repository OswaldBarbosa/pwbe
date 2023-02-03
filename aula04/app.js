/*
1 - Objetivo: projeto para realizar calculos matématicos somar, subtrair, multiplicar e dividir 
2 - Data: 03/02/2023
3 - Autor: Oswaldo Barbosa
4 - Versão: 1.0
*/

//Importe da biblioteca readline
var readline = require("readline");

//importe da bibloteca da calculadora
var matematica = require("./modulo/calculadora.js");

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDados.question("Valor1: \n", function (numero1) {

    let valor1 = numero1.replace(",", ".");

    entradaDados.question("Valor2: \n", function (numero2) {

        let valor2 = numero2.replace(",", ".");

        //algumas exemplos de métodos da classe String
        //replace, substring, length, upercase, lowercase, indexof, trie

        entradaDados.question("Escolha a operação matemática: [SOMAR | SUBTRAIR | MULTIPLICAR | DIVIDIR] \n", function (tipoCalc) {

            let operacao = tipoCalc.toUpperCase();

            let resultado;

            //Validação para entrada de dados vazio
            if (valor1 == "" || valor2 == "" || operacao == "") {
                console.log("ERRO: Não é possível calculaar se algum dado estiver vazio");

                //Validação para entrada de dados não numéricos
            } else if (isNaN(valor1) || isNaN(valor2)) {
                console.log("ERRO: Não é possível calcular se o valor digitado não for um número")
            } else {

                //toUpperCase() - converte uma String em maiusculo
                //toLowerCase() - converte uma String em minusculo

                //else if (typeof(valor1) != "number")
                //typeof() - identifica o tipo de dados de um elemento
                // o isNaN - identifica o tipo de conteúdo independente do tipo de dados.

                resultado = matematica.calculadora(valor1, valor2, operacao);
                if (resultado != false) {
                    console.log(resultado);
                }else{
                    entradaDados.close();
                }
            }

        })
    })
})