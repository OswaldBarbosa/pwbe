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

//endpoint: retorna todos os dados de alunos
app.get('/v1/lion-school/aluno/', cors(), async function (request, response) {

})

//endpoint: retorna o aluno filtrando pelo ID
app.get('/v1/lion-school/aluno/:id', cors(), async function (request, response) {

})

//endpoint: insere um dado novo
app.post('/v1/lion-school/aluno/', cors(), async function (request, response) {

})

//endpoint: atualiza um aluno existente filtrando pelo ID
app.put('/v1/lion-school/aluno/:id', cors(), async function (request, response) {

})

//endpoint: deleta um aluno existente filtrando pelo ID
app.delete('/v1/lion-school/aluno/:id', cors(), async function (request, response) {

})

app.listen(8080, function () {
    console.log('Servidor aguardando requisições na pota 8080')
})