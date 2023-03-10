/**
 * 1 - Objetivo: exercicio sobre json e array
 * 2 - Data: 03/05/2023
 * 3 - Autor: Oswaldo Barbosa
 * 4 - Versão: 1.0
 */

//importe do arquivo JSON
var varEstadosCidades = require("../modulo/estados_cidades.js");

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
    if (status) {
        return listaDeEstadosJson
    } else {
        return false
    }
}

const getDadosEstados = function (estadoSigla) {
        //Entrada de Dados
        let siglaEstado = estadoSigla.toUpperCase()
        let listaInformacoesDosEstados
        let status

        if (siglaEstado == ""){
            return false
        } else {

        //Processamento da Função
        varEstadosCidades.estadosCidades.estados.forEach(function (estado) {
            if (estado.sigla == siglaEstado) {
                listaInformacoesDosEstados = {
                    uf: estado.sigla,
                    descricao: estado.nome,
                    capital: estado.capital,
                    regiao: estado.regiao
                }
                status = true
            }
        })

        //Saída
        if (status == true) {
            return listaInformacoesDosEstados
        } else {
            return false
        }
    }
}

const getCapitalEstado = function (estadoSigla) {

    if (estadoSigla == "") {
        return false
    } else {

        //Entrada de Dados
        let siglaEstado = estadoSigla.toUpperCase()
        let listaInformacoesDosEstados
        let status

        //Processamento da Função
        varEstadosCidades.estadosCidades.estados.forEach(function (estado) {
            if (estado.sigla == siglaEstado) {
                listaInformacoesDosEstados = {
                    uf: estado.sigla,
                    descricao: estado.nome,
                    capital: estado.capital
                }
                status = true
            }
        })

        if (status) {
            return listaInformacoesDosEstados
        } else {
            return false
        }
    }
}

const getEstadosRegiao = function (regiaoEstado) {
    //Entrada de Dados
    let regiao = regiaoEstado
    let listaDeRegiaoJSON = {}
    let listaDeEstadosARRAY = []
    let status

    //Processamento da Função
    varEstadosCidades.estadosCidades.estados.forEach(function (estado) {
        if (estado.regiao == regiao) {
            listaDeRegiaoJSON.regiao = estado.regiao
            let listaDeEstadoJSON = {}
            listaDeEstadoJSON.uf = estado.sigla
            listaDeEstadoJSON.descricao = estado.nome
            listaDeEstadosARRAY.push(listaDeEstadoJSON)
        }
        status = true
    })

    //Saída
    if (status) {
        listaDeRegiaoJSON.estados = listaDeEstadosARRAY
        return listaDeRegiaoJSON
    } else {
        return false
    }
}

const getCapitalPais = function () {
    //Entrada de Dados
    let listaDeCapitalJSON = {}
    let listaDeCapitalARRAY = []

    //Processamento da Função
    varEstadosCidades.estadosCidades.estados.forEach(function (estado) {
        let listaInformacoesDasCidadesJSON = {}
        if (estado.capital_pais != undefined) {
            listaInformacoesDasCidadesJSON.capital_atual = estado.capital_pais.capital
            listaInformacoesDasCidadesJSON.uf = estado.sigla
            listaInformacoesDasCidadesJSON.descricao = estado.nome
            listaInformacoesDasCidadesJSON.capital = estado.capital
            listaInformacoesDasCidadesJSON.capital_pais_ano_inicio = estado.capital_pais.ano_inicio
            listaInformacoesDasCidadesJSON.capital_pais_ano_fim = estado.capital_pais.ano_fim
            listaDeCapitalARRAY.push(listaInformacoesDasCidadesJSON)
        }
        status = true
    })

    //Saída
    if (status) {
        return listaDeCapitalJSON.capitais = listaDeCapitalARRAY
    } else {
        return false
    }
}

const getCidades = function (estadoSigla) {
    if (siglaEstado == "") {
        return false
    } else {

        //Entrada de Dados
        let siglaEstado = estadoSigla
        let listaInformacoesCidadesJSON = {}
        let listaDeCidadesARRAY = []
        let status

        //Processamneto da Função
        varEstadosCidades.estadosCidades.estados.forEach(function (estado) {
            if (estado.sigla == siglaEstado) {
                listaInformacoesCidadesJSON.uf = estado.sigla
                listaInformacoesCidadesJSON.descricao = estado.nome
                listaInformacoesCidadesJSON.quantidade_cidades = estado.cidades.length
                estado.cidades.forEach(function (estadoCidade) {
                    listaDeCidadesARRAY.push(estadoCidade.nome)
                })
                listaInformacoesCidadesJSON.cidades = listaDeCidadesARRAY
            }
            status = true
        })

        //Saída
        if (status) {
            return listaInformacoesCidadesJSON
        } else {
            return false
        }
    }
}

module.exports = {
    getListaDeEstados,
    getDadosEstados,
    getCapitalEstado,
    getEstadosRegiao,
    getCapitalPais,
    getCidades
}