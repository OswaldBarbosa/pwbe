/**
 * 1 - Objetivo: Criar uma API para disponipbilizar dados de cidades e estados
 * 2 - Data: 10/03/2023
 * 3 - Autor: Oswaldo Barbosa
 * 4 - Versão: 1.0
 */

/**
 * Express - dependência para realizar requisições de API pelo 
 * procoloco HTTP
 * Para instalar o express usa esse comando - npm install express ---save
 * 
 * Cors - dependência para gerencar permissões de requisições da API
 * Para instalar o cors usa esse comando - npm install cors --save
 * 
 * Body-Parser - dependência que gerencia o corpo das requisições
 * Para instalar o body-parse usa esse comando - npm install body-parser --save
 */

//Importe das dependências do projeto
//Dependência para criar as requisições da API
const express = require('express')
//Dependência para gerenciar as permisssões da API
const cors = require('cors')
//Dependência para gerenciar o corpo das requisições da API
const bodyParser = require('body-parser')

//Importe do arquivo modulo
const estadosCidades = require('./modulo/exercicioJsonArray.js')

//Cria um objeto com as características do express
const app = express()

app.use((request, response, next) => {
    //API publica - fica disponíve para utilização de qualquer aplicação - colocando '*'
    //API privada - somente o IP informado poderá consumir dados da API - colocando o IP do servidor

    //Define se a API será publica ou privada
    response.header('Access-Control-Allow-Origin', '*')

    //Permite definir métodos que poderão ser utilizados nas requisições da API
    response.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')

    //Envia para o cors() as regras de permissões
    app.use(cors())

    next()
})

//EndPoints

//async - estabelece uma status de aguarde, assim que eu processar te devolvo os dados
//OBS - se não usar o async a requisição é perdida,pois o front acha que a API está fora
//do ar 

//EndPoint para listar todos os estados
app.get('/estados', cors(), async function (request, response, next) {
    //Chama a função que vai listar todos os estados
    let estados = estadosCidades.getListaDeEstados()

    //Tratamento para validar o sucesso da requisição
    if (estados) {
        response.status(200)
        response.json(estados)
    } else {
        response.status(500)
    }
})

//EndPoint para listar os dados dos estados filtrando pela sigla
app.get('/estado/:uf', cors(), async function (request, response, next) {
    let statusCode
    let dadosEstado = {}

    //Recebe a sigla do estado que será enviada pela url da requisição
    let siglaEstado = request.params.uf

    //Tratamento para validação de etrada de dados correta
    if (siglaEstado == "" || siglaEstado == undefined || siglaEstado.length != 2 || !isNaN(siglaEstado)) {
        statusCode = 400
        dadosEstado.message = 'Não foi possível processar, pois os dados de entrada (uf) que forão enviados não corresponde algo exigido, confirme o valor, pois não pode estar vazio, precisa ser caracteres e ter 2 digitos.'
    } else {
        //Chama a função para retornar os dados do estado
        let estado = estadosCidades.getDadosEstados(siglaEstado)

        if (estado) {
            statusCode = 200
            dadosEstado = estado
        } else {
            statusCode = 404
        }
    }

    response.status(statusCode)
    response.json(dadosEstado)

})

app.get('/capital/:uf', cors(), async function (request, response, next) {
    let statusCode
    let dadosCapitais = {}

    let siglaEstado = request.params.uf

    if (siglaEstado == "" || siglaEstado == undefined || siglaEstado.length != 2 || !isNaN(siglaEstado)) {
        statusCode = 400
        dadosCapitais.message = 'Não foi possível processar, pois os dados de entrada (uf) que forão enviados não corresponde algo exigido, confirme o valor, pois não pode estar vazio, precisa ser caracteres e ter 2 digitos.'
    } else {
        let capitais = estadosCidades.getCapitalEstado(siglaEstado)

        if (capitais) {
            statusCode = 200
            dadosCapitais = capitais
        } else {
            statusCode = 404
        }
    }

    response.status(statusCode)
    response.json(dadosCapitais)

})

app.get('/regiao/:regiao', cors(), async function (request, response, next) {
    let statusCode
    let dadosRegioes = {}

    let nomeDaRegiao = request.params.regiaogit

    if (nomeDaRegiao == "" || nomeDaRegiao == undefined || !isNaN(nomeDaRegiao)) {
        statusCode = 400
        dadosRegioes.message = 'Não foi possível processar, pois os dados de entrada (região) que forão enviados não corresponde algo exigido, confirme o valor, pois não pode estar vazio, precisa ser caracteres e ter 2 digitos.'
    } else {
        let regiao = estadosCidades.getEstadosRegiao(nomeDaRegiao)

        if (regiao) {
            statusCode = 200
            dadosRegioes = regiao
        } else {
            statusCode = 404
        }
    }

    response.status(statusCode)
    response.json(dadosRegioes)

})

app.get('/capital', cors(), async function (request, response, next) {
    let statusCode
    let dadosCapitais = {}

    let capitalPais = estadosCidades.getCapitalPais()

    if (capitalPais) {
        statusCode = 200
        dadosCapitais = capitalPais
        // response.json(capitalPais)
    } else {
        statusCode = 500
    }

    response.status(statusCode)
    response.json(dadosCapitais)

})

app.get('/cidades/:uf', cors(), async function (request, response, next) {
    let statusCode
    let dadosCidades = {}

    let siglaEstado = request.params.uf

    if (siglaEstado == "" || siglaEstado == undefined || siglaEstado.length != 2 || !isNaN(siglaEstado)) {
        statusCode = 400
        dadosCidades.message = 'Não foi possível processar, pois os dados de entrada (uf) que forão enviados não corresponde algo exigido, confirme o valor, pois não pode estar vazio, precisa ser caracteres e ter 2 digitos.'
    } else {
        let cidades = estadosCidades.getCidades(siglaEstado)

        if (cidades) {
            statusCode = 200
            dadosCidades = cidades
        } else {
            statusCode = 404
        }
    }

    response.status(statusCode)
    response.json(dadosCidades)

})

//Roda o serviço da API para ficar aguardando requisições
app.listen(8080, function () {
    console.log('SERVIDOR AGUARDANDO REQUISIÇÕES NA PORTA 8080.')
})