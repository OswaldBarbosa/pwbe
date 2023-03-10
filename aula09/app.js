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
    const estadosCidades = require('./modulo/exercicioJsonArray.js')
    let estados = estadosCidades.getListaDeEstados()
    response.status(200)
    response.json(estados)
})

app.listen(8080, function () {
    console.log('SERVIDOR AGUARDANDO REQUISIÇÕES NA PORTA 8080.')
})