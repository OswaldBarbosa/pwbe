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

const ERROR_REQUIRED_FIELDS         = {status: 400, message: 'Campos obrigatórios não foram preenchidos.'}

const ERROR_INVALID_ID              = {status: 400, message: 'O ID informado na requisição não é válido ou não foi encaminhado.'}

const ERROR_INVALID_NAME            = {status: 400, message: 'O nome informado na requisição não é válido ou não foi encaminhado.'}

const ERROR_ID_NOT_FOUND            = {status: 404, message: 'O ID informado é válido, mas não existe.'}

const ERROR_NOT_FOUND               = {status: 404, message: 'Nenhum item encontrado na requisição.'}

const ERROR_INTERNAL_SERVER         = {status: 500, message: 'Devido a um erro interno no servidor, não foi possível processar a requisição.'}

const ERROR_INVALID_CONTENT_TYPE    = {status: 415, message: 'O tipo de mídia Content-type da solicitação não é compatível com o servidor. Tipo aceito:[application/json]'}

/******************************************************** MENSAGENS DE ERRO ********************************************************/

/******************************************************** MENSAGENS DE SUCESSO *****************************************************/

const SUCCESS_CREATE_ITEM   = {status:201, message: 'Item criado com sucesso.'}

const SUCCESS_UPDATE_ITEM   = {status:200, message: 'Item atualizado com sucesso.'}

const SUCCESS_DELETE_ITEM   = {status:200, message: 'Item apagado com sucesso.'}

const SUCCESS_REQUEST       = {status:200, message: 'Requisição bem sucedida.'}

/******************************************************** MENSAGENS DE SUCESSO ******************************************************/

module.exports = {
    ERROR_REQUIRED_FIELDS,
    ERROR_INTERNAL_SERVER,
    ERROR_INVALID_ID,
    ERROR_INVALID_NAME,
    ERROR_INVALID_CONTENT_TYPE,
    ERROR_ID_NOT_FOUND,
    ERROR_NOT_FOUND,
    SUCCESS_CREATE_ITEM,
    SUCCESS_UPDATE_ITEM,
    SUCCESS_DELETE_ITEM,
    SUCCESS_REQUEST
}