/************************************************************************************
 * 1 - Objetivo: responsável pela regra de negocio referente ao CRUD de ALUNOS
 * 2 - Data: 14/4/2023
 * 3 - Autor: Oswaldo Barbosa
 * 4 - Versão: 1.0
 ************************************************************************************
 */

//Importe do arquivo DAO para acessar dados do aluno no banco de dados
var alunoDAO = require('../model/DAO/alunoDAO.js')

//Importe do arquivo de mensagens
var message = require('./modulo/config.js')

//retorna a lista de todos os alunos
const getAlunos = async () => {
    let dadosAlunosJSON = {}

    //Chama a função do arquivo DAO que irá retorna todos os registros do banco de dados
    let dadosAlunos = await alunoDAO.selectAllAluno()

    if (dadosAlunos) {
        //Criando um JSON com o atributo alunos, para encaminhar um ARRAY de alunos
        dadosAlunosJSON.status = message.SUCCESS_REQUEST.status
        dadosAlunosJSON.message = message.SUCCESS_REQUEST.message
        dadosAlunosJSON.quantidade = dadosAlunos.length
        dadosAlunosJSON.alunos = dadosAlunos
        return dadosAlunosJSON
    } else {
        return message.ERROR_NOT_FOUND
    }
}

//retorna o aluno filtrando pelo ID
const getBuscarAlunoId = async (idAluno) => {

    let dadosAlunosJSON = {}

    //validação do idAluno
    if (idAluno == "" || idAluno == undefined || isNaN(idAluno)) {
        return message.ERROR_INVALID_ID
    } else {

        //Chama a função do arquivo DAO que irá retorna os alunos pelo id
        let dadosAlunos = await alunoDAO.selectAlunoById(idAluno)

        if (dadosAlunos) {
            dadosAlunosJSON.status = message.SUCCESS_REQUEST.status
            dadosAlunosJSON.message = message.SUCCESS_REQUEST.message
            dadosAlunosJSON.aluno = dadosAlunos
            return dadosAlunosJSON
        } else {
            return message.ERROR_NOT_FOUND
        }
    }

}
//retorna o aluno filtrando pelo ID

//retorna o aluno filtrando pelo nome
const getBuscarAlunoNome = async (nomeAluno) => {

    let dadosAlunosJSON = {}

    if (nomeAluno == "" || nomeAluno == undefined || !isNaN(nomeAluno)) {
        return message.ERROR_INVALID_NAME
    } else {

        //chama a função do arquivo DAO que irá retorna um aluno pelo nome
        let dadosAlunos = await alunoDAO.selectAlunoByName(nomeAluno)

        if (dadosAlunos) {

            dadosAlunosJSON.status = message.SUCCESS_REQUEST.status
            dadosAlunosJSON.message = message.SUCCESS_REQUEST.message
            dadosAlunosJSON.aluno = dadosAlunos

            return dadosAlunosJSON

        } else {
            return message.ERROR_NOT_FOUND
        }
    }

}

//inserir um novo aluno
const novoAluno = async (dadosAluno) => {

    //Validação para tratar campos obrigatórios e quantidade de caracteres
    if (dadosAluno.nome == '' || dadosAluno.nome == undefined || dadosAluno.nome.length > 100 ||
        dadosAluno.rg == '' || dadosAluno.rg == undefined || dadosAluno.rg.length > 15 ||
        dadosAluno.cpf == '' || dadosAluno.cpf == undefined || dadosAluno.cpf.length > 18 ||
        dadosAluno.data_nascimento == '' || dadosAluno.data_nascimento == undefined || dadosAluno.data_nascimento.length > 10 ||
        dadosAluno.email == '' || dadosAluno.email == undefined || dadosAluno.email.length > 255
    ) {
        return message.ERROR_REQUIRED_FIELDS
    } else {

        //Envia os dados para a model inserir no banco de dados
        let resultDadosAluno = await alunoDAO.insertAluno(dadosAluno)

        //valida se o banco de dados inseriu corretamente os dados
        if (resultDadosAluno) {

            //chama a função que vai encontar o ID gerado após o insert
            let novoAluno = await alunoDAO.selectLastId()

            let dadosAlunosJSON = {}

            dadosAlunosJSON.status = message.SUCCESS_CREATE_ITEM.status
            dadosAlunosJSON.message = message.SUCCESS_CREATE_ITEM.message
            dadosAlunosJSON.aluno = novoAluno

            return dadosAlunosJSON

        } else {
            return message.ERROR_INTERNAL_SERVER
        }
    }
    
}

//atualiza um aluno existente
const atualizarAluno = async (dadosAluno, idAluno) => {

    //Validação para tratar campos obrigatórios e quantidade de caracteres
    if (dadosAluno.nome == '' || dadosAluno.nome == undefined || dadosAluno.nome.length > 100 ||
        dadosAluno.rg == '' || dadosAluno.rg == undefined || dadosAluno.rg.length > 15 ||
        dadosAluno.cpf == '' || dadosAluno.cpf == undefined || dadosAluno.cpf.length > 18 ||
        dadosAluno.data_nascimento == '' || dadosAluno.data_nascimento == undefined || dadosAluno.data_nascimento.length > 10 ||
        dadosAluno.email == '' || dadosAluno.email == undefined || dadosAluno.email.length > 255
    ) {

        return message.ERROR_REQUIRED_FIELDS //status code 400

        //validação de ID incorreto ou não informado
    } else if (idAluno == '' || idAluno == undefined || isNaN(idAluno)) {

        return message.ERROR_INVALID_ID //status code 400

    } else {

        //adiciona o ID  do aluno no json dos dadosAluno
        dadosAluno.id = idAluno

        let statusId = await alunoDAO.selectAlunoById(idAluno)

        //validação para ver se o ID realmente existe
        if (statusId) {

            //chama a função que vai atualizar o aluno
            let resultDadosAluno = await alunoDAO.updateAluno(dadosAluno)

            if (resultDadosAluno) {

                let dadosAlunosJSON = {}

                dadosAlunosJSON.status = message.SUCCESS_UPDATE_ITEM.status //200
                dadosAlunosJSON.message = message.SUCCESS_UPDATE_ITEM.message
                dadosAlunosJSON.aluno = dadosAluno

                return dadosAlunosJSON

            } else {
                return message.ERROR_INTERNAL_SERVER //500
            }

        } else {
            return message.ERROR_ID_NOT_FOUND //404
        }
    }

}

//deleta um novo aluno existente
const deletarAluno = async (idAluno) => {

    if (idAluno == "" || idAluno == undefined || isNaN(idAluno)) {
        return message.ERROR_INVALID_ID
    } else {

        //chama a função para ver o ID do aluno
        let statusId = await alunoDAO.selectAlunoById(idAluno)

        //validação para ver se o ID realmente existe
        if (statusId) {

            //chama a função que vai apagar o aluno
            let resultDadosAluno = await alunoDAO.deleteAluno(idAluno)

            if (resultDadosAluno) {
                return message.SUCCESS_DELETE_ITEM
            } else {
                return message.ERROR_INTERNAL_SERVER
            }

        } else {
            return message.ERROR_ID_NOT_FOUND
        }
    }

}

module.exports = {
    getAlunos,
    getBuscarAlunoId,
    getBuscarAlunoNome,
    novoAluno,
    atualizarAluno,
    deletarAluno
}
