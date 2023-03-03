/**
 * 1 - Objetivo: exercicio sobre json e array
 * 2 - Data: 03/05/2023
 * 3 - Autor: Oswaldo Barbosa
 * 4 - Versão: 1.0
 */

//importe do arquivo JSON
var varEstadosCidades = require("../estados_cidades.js");

const getListaDeEstados = function () {
    //Entrada de Dados
    let listaDeEstadosArray = []
    let status

    //Processamento da Função
    varEstadosCidades.estadosCidades.estados.forEach(function (estado) {
        listaDeEstadosArray.push(estado.sigla)
        status = true
    })

    let listaDeEstadosJson = { uf: listaDeEstadosArray, quantidade: listaDeEstadosArray.length }

    //Saída
    if (status == true) {
        return listaDeEstadosJson
    } else {
        return false
    }
}

// console.log(getListaDeEstados())

const getDadosEstados = function(estadoSigla) {
    //Entrada de Dados
    let siglaEstado = estadoSigla 
    let listaDeEstadosArrayUf = []
    let listaDeEstadosArrayDescricao = []
    let listaDeEstadosArrayCapital = []
    let listaDeEstadosArrayRegiao = []


    //Processamento da Função
    varEstadosCidades.estadosCidades.estados.forEach(function(estado) {
        listaDeEstadosArrayUf.push(estado.sigla)
        listaDeEstadosArrayDescricao.push(estado.nome)
        listaDeEstadosArrayCapital.push(estado.capital)
        listaDeEstadosArrayRegiao.push(estado.regiao)
    })

    let listaDeEstadosJson = { uf: listaDeEstadosArrayUf, descricao: listaDeEstadosArrayDescricao, capital: listaDeEstadosArrayCapital, regiao: listaDeEstadosArrayRegiao }

    siglaEstado = listaDeEstadosJson

    return siglaEstado

}

console.log(getDadosEstados("SP"))