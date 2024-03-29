/**************************************************************************************
 * 1 - Objetivo - API para integração entre back e banco de dados (GET, POST, PUT, DELETE)
 * 2 - Data - 14/04/2023
 * 3 - Autor - Oswaldo Barbosa
 * 4 - Versão - 1.0
 **************************************************************************************
 */

//importe das bibliotecas para a API
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { request, response } = require('express');

//cria o objeto app conforme a classe do express
const app = express();

//definir as permições do cors
app.use((request, response, next) => {
    //defini quem poderá acessar a API (* - todos)
    response.header('Access-Control-Allow-Origin', '*')
    response.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')

    //atribui as permissões ao cors
    app.use(cors())

    next()
})

//CRUD - CREATE, READ, UPDATE, DELETE

/************************************************************************************
 * 1 - Objetivo: API de controle de ALUNOS
 * 2 - Data: 14/4/2023
 * 3 - Autor: Oswaldo Barbosa
 * 4 - Versão: 1.0
 ************************************************************************************
 */


/**
 * instalação do PRISMA no projeto (biblioteca para conexão com o banco de dados )
 * 
 * npm install prisma --save
 * npx prisma
 * npx prisma init
 * npm install @prisma/client --save
 * 
 * npx prisma migrate dev - serve para realizar a sincronização entre o prisma e banco de dados
 */

//Importe do arquivo de mensagens
var message = require('./controller/modulo/config.js')

//importe da controller do aluno
var controllerAlunos = require('./controller/controller_aluno.js');
const { json } = require('body-parser');

//defini que os dados que irão chegar no body da requisição será no padrão json
const bodyParserJSON = bodyParser.json()

/******************************************************************* ENDPOINTS ********************************************************************/

//endpoint: retorna todos os dados de alunos
app.get('/v1/lion-school/aluno/', cors(), async function (request, response) {

    //recebe os dados da controller do aluno
    let dadosAlunos = await controllerAlunos.getAlunos()

    response.status(dadosAlunos.status)
    response.json(dadosAlunos)

})


//endpoint: retorna o aluno filtrando pelo ID
app.get('/v1/lion-school/aluno/:id', cors(), async function (request, response) {

    //recebe o ID do aluno pelo parametro
    let idAluno = request.params.id

    //recebe os dados da controller do aluno
    let dadosAlunos = await controllerAlunos.getBuscarAlunoId(idAluno)

    response.status(dadosAlunos.status)
    response.json(dadosAlunos)

})


//endpoint: retorna o aluno filtrando pelo nome
app.get('/v1/lion-school/aluno/nome/:nome', cors(), async function (request, response) {

    //recebe o nome do aluno pelo parametro
    let nomeAluno = request.params.nome

    //recebe os dados da controller do aluno
    let dadosAlunos = await controllerAlunos.getBuscarAlunoNome(nomeAluno)

    response.status(dadosAlunos.status)
    response.json(dadosAlunos)

})


//endpoint: insere um dado novo
app.post('/v1/lion-school/aluno/', cors(), bodyParserJSON, async function (request, response) {

    let contentType = request.headers['content-type']

    //Validação para receber dados apenas no formato JSON
    if (String(contentType).toLowerCase() == 'application/json') {

        //recebe os dados do aluno encaminhado no corpo da requisição
        let dadosBody = request.body

        //encaminha os dados para controller
        let resultadoDadosAlunos = await controllerAlunos.novoAluno(dadosBody)

        response.status(resultadoDadosAlunos.status)
        response.json(resultadoDadosAlunos)
    } else {
        response.status(message.ERROR_INVALID_CONTENT_TYPE.status)
        response.json(message.ERROR_INVALID_CONTENT_TYPE)
    }

})


//endpoint: atualiza um aluno existente filtrando pelo ID
app.put('/v1/lion-school/aluno/:id', cors(), bodyParserJSON, async function (request, response) {

    let contentType = request.headers['content-type']

    //Validação para receber dados apenas no formato JSON
    if (String(contentType).toLowerCase() == 'application/json') {

        //recebe o id do aluno pelo parametro
        let idAluno = request.params.id

        //recebe os dados do aluno encaminhado no corpo da requisição
        let dadosBody = request.body

        //encaminha os dados para controller
        let resultadoDadosAlunos = await controllerAlunos.atualizarAluno(dadosBody, idAluno)

        response.status(resultadoDadosAlunos.status)
        response.json(resultadoDadosAlunos)
    } else {
        response.status(message.ERROR_INVALID_CONTENT_TYPE.status)
        response.json(message.ERROR_INVALID_CONTENT_TYPE)
    }

})


//endpoint: deleta um aluno existente filtrando pelo ID
app.delete('/v1/lion-school/aluno/:id', cors(), async function (request, response) {

    //recebe o id do aluno pelo parametro
    let idAluno = request.params.id

    //recebe os dados da controller do aluno
    let resultadoDadosAlunos = await controllerAlunos.deletarAluno(idAluno)

    response.status(resultadoDadosAlunos.status)
    response.json(resultadoDadosAlunos)

})

/******************************************************************* ENDPOINTS ********************************************************************/


app.listen(8080, function () {
    console.log('Servidor aguardando requisições na pota 8080')
})