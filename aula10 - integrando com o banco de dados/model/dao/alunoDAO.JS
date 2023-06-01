/************************************************************************************
 * 1 - Objetivo: responsavel pela manipulação dos alunos no banco de dados
 * 2 - Data: 14/4/2023
 * 3 - Autor: Oswaldo Barbosa
 * 4 - Versão: 1.0
 ************************************************************************************
 */

//Importe da biblioteca do prisma client para poder acessar o banco
var { PrismaClient } = require('@prisma/client')

//Instancia da classe PrismaClient
var prisma = new PrismaClient()

//inserir dados do aluno no banco de dados
const selectAllAluno = async () => {
    //Script para buscar todos os itens do banco de dados
    let sql = 'select * from tbl_aluno'

    //$queryRawUnsafe() - permite interpretar uma variável sendo um script SQL
    //$queryRaw('select * from tbl_alunos' - permite interpretar o script sql direto no método) 
    let rsAlunos = await prisma.$queryRawUnsafe(sql)

    //Valida se o banco de dados retornou algum registro
    if (rsAlunos.length > 0) {
        return rsAlunos
    } else {
        return false
    }

}

//retorna dados do aluno no banco de dados pelo id
const selectAlunoById = async (id) => {
    let idAluno = id

    //Script para filtar os alunos pelo id
    let sql = `select * from tbl_aluno where id = ${idAluno}`

    let rsAlunos = await prisma.$queryRawUnsafe(sql)

    //Valida se o banco de dados retornou algum registro
    if (rsAlunos.length > 0) {
        return rsAlunos
    } else {
        return false
    }
}

//retorna dados do aluno no banco de dados pelo nome
const selectAlunoByName = async (nome) => {
    let nomeAluno = nome

    //Script para filtar o aluno pelo nome
    let sql = `select * from tbl_aluno where nome like '%${nomeAluno}%'`

    let rsAlunos = await prisma.$queryRawUnsafe(sql)

    //Valida se o banco de dados retornou algum registro
    if (rsAlunos.length > 0) {
        return rsAlunos
    } else {
        return false
    }

}

//inserir dados do aluno no banco de dados
const insertAluno = async (dadosAluno) => {

    //script para inserir dados'
    let sql = `insert into tbl_aluno (
        nome,
        rg,
        cpf,
        data_nascimento,
        email
        ) values (      
        '${dadosAluno.nome}',
        '${dadosAluno.rg}',
        '${dadosAluno.cpf}',
        '${dadosAluno.data_nascimento}',
        '${dadosAluno.email}'
        )`

    //executa o script sql no banco de dados
    let resultStatus = await prisma.$executeRawUnsafe(sql)

    if (resultStatus) {
        return true
    } else {
        return false
    }
}

//retorna o ultitmo ID inserido na banco de dados
const selectLastId = async () => {

    //script para pegar o ultimo ID inserido na tabela de alunos
    let sql = `select * from tbl_aluno order by id desc limit 1;`

    //executa o script sql no banco de dados
    let resultStatus = await prisma.$queryRawUnsafe(sql)

    if (resultStatus.length > 0) {
        return resultStatus
    } else {
        return false
    }
}

//atualizar dados do aluno no banco de dados
const updateAluno = async (dadosAluno) => {
    //Script para atualizar dados
    let sql = `update tbl_aluno set
        nome = '${dadosAluno.nome}',
        rg = '${dadosAluno.rg}',
        cpf = '${dadosAluno.cpf}',
        data_nascimento = '${dadosAluno.data_nascimento}',
        email = '${dadosAluno.email}'
    where id = ${dadosAluno.id}`

    //Executa o script sql no banco de dados
    let resultStatus = await prisma.$executeRawUnsafe(sql)

    if (resultStatus) {
        return true
    } else {
        return false
    }
}

//deletar dados do aluno no banco de dados
const deleteAluno = async (id) => {
    let idAluno = id
    //Script para deletar dados
    let sql = 'delete from tbl_aluno where id =' + idAluno

    //Executa o script sql no banco de dados
    let resultStatus = await prisma.$queryRawUnsafe(sql)

    if (resultStatus) {
        return true
    } else {
        return false
    }
}

module.exports = {
    selectAllAluno,
    selectAlunoById,
    selectAlunoByName,
    insertAluno,
    selectLastId,
    updateAluno,
    deleteAluno
}