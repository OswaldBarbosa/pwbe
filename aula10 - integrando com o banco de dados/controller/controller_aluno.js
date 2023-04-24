/************************************************************************************
 * 1 - Objetivo: responsável pela regra de negocio referente ao CRUD de ALUNOS
 * 2 - Data: 14/4/2023
 * 3 - Autor: Oswaldo Barbosa
 * 4 - Versão: 1.0
 ************************************************************************************
 */



//retorna a lista de todos os alunos
const getAlunos = async () => {
    let dadosAlunosJSON = {}

    //Importe do arquivo DAO para acessar dados do aluno no banco de dados
    let alunoDAO = require('../model/DAO/alunoDAO.js')

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

    //Importe do arquivo DAO para acessar dados do aluno no banco de dados
    let alunoDAO = require('../model/DAO/alunoDAO.js')

    //Chama a função do arquivo DAO que irá retorna todos os registros do banco de dados
    let dadosAlunos = await alunoDAO.selectByIdAluno(idAluno)

    if (dadosAlunos) {
        dadosAlunosJSON.quantidade = dadosAlunos.length
        dadosAlunosJSON.aluno = dadosAlunos
        return dadosAlunosJSON
    } else {
        return false
    }

}

//insere um novo aluno
const novoAluno = (dadosAluno) => {

}

//atualiza um aluno existente
const atualizarAluno = (dadosAluno) => {

}

//deleta um novo aluno existente
const deletarAluno = (id) => {

}

module.exports = {
    getAlunos,
    getBuscarAlunoId
}