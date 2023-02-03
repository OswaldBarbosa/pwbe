/*
Objetivo: Arquivo de funções para calculos matemática
Data: 03/02/2023
Autor: Oswaldo Barbosa
Versão: 1.0
*/

//Função para realizar calculo matemático [SOMAR , SUBTRAIR, MULTIPLICAR E DIVIDIR]
function calculadora(numero1, numero2, tipoCalculo) {

    let valor1 = Number(numero1);
    let valor2 = Number(numero2);
    let operacao = tipoCalculo.toUpperCase();
    let resultado;

    if (operacao == "SOMAR") {
        resultado = valor1 + valor2;

    } else if (operacao == "SUBTRAIR") {
        resultado = valor1 - valor2;

    } else if (operacao == "MULTIPLICAR") {
        resultado = valor1 * valor2;

    } else if (operacao == "DIVIDIR") {
        if (valor2 == 2) {
            console.log("ERRO: Não é possível dividir por zero")

        } else {
            resultado = valor1 / valor2;
        }
    } else {
        console.log("ERRO: operação selecionada inválida")

        //Finaliza o callback do objeto de entreda de dados (sai da programação)
        entradaDados.close();
    }

    //toFixed - para escolher a quantidade de casas decimais

    //Validação para tratar quando a variável resultado não for processada por algum problema
    if (resultado == undefined || Infinity) {
        return false;
    } else {
        return resultado;
    }

}

//Permite adicionar uma function no escopo global (public)
//As function que não estiverem aqui no export, serão tratas apenas como escopo local (private)
module.exports = {
    calculadora
}