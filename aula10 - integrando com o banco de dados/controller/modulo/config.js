/************************************************************************************
 * 1 - Objetivo: Arquivo responsável por padronizar as mensagens de erro, mensagens de sucesso, funções, variáveis para  o projeto.
 * 2 - Data: 28/4/2023
 * 3 - Autor: Oswaldo Barbosa
 * 4 - Versão: 1.0
 ************************************************************************************
 */

//quando usar const e querer diferenciar de variável para constante fica assim: quando for variável o nome é escrito em minusculo,
//quando for constante o nome é escrita em maiusculo.

/******************************************************** MENSAGENS DE ERRO ********************************************************/

const ERROR_REQUIRED_FIELDS = {status: 400, message: 'Campos obrigatórios não foram preenchidos.'}

const ERROR_INTERNAL_SERVER = {status: 500, message: 'Devido a um erro interno no servidor, não foi possível processar a requisição.'}

/******************************************************** MENSAGENS DE SUCESSO ********************************************************/

const SUCCESS_CREATE_ITEM = {status:201, message: 'Item criado com sucesso.'}

module.exports = {
    ERROR_REQUIRED_FIELDS,
    SUCCESS_CREATE_ITEM,
    ERROR_INTERNAL_SERVER
}