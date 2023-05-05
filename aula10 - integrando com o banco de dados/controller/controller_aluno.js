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
        dadosAlunosJSON.quantidade = dadosAlunos.length
        dadosAlunosJSON.alunos = dadosAlunos
        return dadosAlunosJSON
    } else {
        return false
    }

}

//retorna o aluno filtrando pelo ID
const getBuscarAlunoId = async (id) => {
    let idAluno = id
    let dadosAlunosJSON = {}

    if (idAluno == "" || idAluno == undefined || isNaN(idAluno)) {
        return message.ERROR_INVALID_ID
    } else {
        //Chama a função do arquivo DAO que irá retorna os alunos pelo id
        let dadosAlunos = await alunoDAO.selectByIdAluno(idAluno)

        if (dadosAlunos) {
            dadosAlunosJSON.quantidade = dadosAlunos.length
            dadosAlunosJSON.aluno = dadosAlunos
            return dadosAlunosJSON
        } else {
            return false
        }
    }
}

const getBuscarAlunoNome = async (nome) => {
    let nomeAluno = nome
    let dadosAlunosJSON = {}

    if (nomeAluno == "" || nomeAluno == undefined || isNaN(nomeAluno)) {
        return message.ERROR_INVALID_ID
    } else {
        //Chama a função do aqruivo DAO que irá retorna todos os alunos pelo nome
        let dadosAlunos = await alunoDAO.selectByNameAluno(nomeAluno)

        if (dadosAlunos) {
            dadosAlunosJSON.quantidade = dadosAlunos.length
            dadosAlunosJSON.aluno = dadosAlunos
            return dadosAlunosJSON
        } else {
            return false
        }
    }
}

//inserir um novo aluno
const novoAluno = async (dadosAluno) => {
    let resultDadosAluno

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
        resultDadosAluno = await alunoDAO.insertAluno(dadosAluno)

        //valida se o banco de dados inseriu corretamente os dados
        if (resultDadosAluno) {
            return message.SUCCESS_CREATE_ITEM
        } else {
            return message.ERROR_INTERNAL_SERVER
        }
    }
}

//atualiza um aluno existente
const atualizarAluno = async (dadosAluno, idAluno) => {
    let resultDadosAluno

    //Validação para tratar campos obrigatórios e quantidade de caracteres
    if (dadosAluno.nome == '' || dadosAluno.nome == undefined || dadosAluno.nome.length > 100 ||
        dadosAluno.rg == '' || dadosAluno.rg == undefined || dadosAluno.rg.length > 15 ||
        dadosAluno.cpf == '' || dadosAluno.cpf == undefined || dadosAluno.cpf.length > 18 ||
        dadosAluno.data_nascimento == '' || dadosAluno.data_nascimento == undefined || dadosAluno.data_nascimento.length > 10 ||
        dadosAluno.email == '' || dadosAluno.email == undefined || dadosAluno.email.length > 255
    ) {
        return message.ERROR_REQUIRED_FIELDS //status code 400
        //Validação de ID incorreto ou não informado
    } else if (idAluno == '' || idAluno == undefined || isNaN(idAluno)) {
        return message.ERROR_INVALID_ID //status code 400
    } else {
        dadosAluno.id = idAluno

        //encaminha os dados para a model do aluno
        resultDadosAluno = await alunoDAO.updateAluno(dadosAluno)

        if (resultDadosAluno) {
            return message.SUCCESS_UPDATE_ITEM //200
        } else {
            return message.ERROR_INTERNAL_SERVER
        }
    }
}

//deleta um novo aluno existente
const deletarAluno = async (id) => {
    let idAluno = id
    let resultDadosAluno

    if (idAluno == "" || idAluno == undefined || isNaN(idAluno)) {
        return message.ERROR_INVALID_ID
    } else {
        resultDadosAluno = await alunoDAO.deleteAluno(idAluno)

        if (resultDadosAluno) {
            return message.SUCCESS_DELETE_ITEM
        } else {
            return message.ERROR_INTERNAL_SERVER
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