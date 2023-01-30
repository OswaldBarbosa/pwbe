/*
1 - Objetivo: Calcular operações matemáticas (Calculadora)
2 - Autor: Oswaldo Barbosa
3 - Data: 30/01/2023
4 - Versão: 1.0
*/

//Importe da biblioteca readline
var readline = require("readline");
const { parse } = require("querystring");

//Cria um objeto para ser especialista em entrada de dados pelo teclado
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

console.log(" Calculadora Master")

entradaDados.question(" Digite o primeiro valor: ", function (primeiroValor) {
    let valor1 = primeiroValor.replace(",", ".");

    entradaDados.question(" Digite o segundo valor: ", function (segundoValor) {
        let valor2 = segundoValor.replace(",", ".");

        entradaDados.question(" 1 - Soma \n 2 - Subtração \n 3 - Multiplicação \n 4 - Divisão \n Digite a operação deseja: ", function (numero) {

            let operacao = numero;
            let soma;
            let subtração;
            let multiplicacao;
            let divisao;

            //Validação para caractere inválido
            if (isNaN(valor1) || isNaN(valor2) || isNaN(operacao)) {
                console.log(" ERRO: caractere inválido")

                //Validação para valor em branco
            } else if (valor1 == "" || valor2 == "") {
                console.log(" ERRO: Você não digitou um valor")

                //Validação para operação em branco
            } else if (operacao == "") {
                console.log(" ERRO: Você não escolheu uma operação")

                //Validação para operação inválida
            } else if (operacao >= 5) {
                console.log(" ERRO: operação não existente")
            }

            if (operacao == 1) {
                soma = parseFloat(valor1) + parseFloat(valor2);
                console.log(" Resultado: " + soma);

            } else if (operacao == 2) {
                subtração = parseFloat(valor1) - parseFloat(valor2);
                console.log(" Resutado: " + subtração);

            } else if (operacao == 3) {
                multiplicacao = parseFloat(valor1) * parseFloat(valor2);
                console.log(" Resutado: " + multiplicacao);
            } else if (operacao == 4) {
                divisao = parseFloat(valor1) / parseFloat(valor2);
                console.log(" Resutado: " + divisao);
            }

        })
    })
})