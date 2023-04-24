/************************************************************************************
 * 1 - Objetivo: responsavel pela manipulação dos alunos no banco de dados
 * 2 - Data: 14/4/2023
 * 3 - Autor: Oswaldo Barbosa
 * 4 - Versão: 1.0
 ************************************************************************************
 */

//inserir dados do aluno no banco de dados
const selectAllAluno = async () => {
    //Importe da biblioteca do prisma client
    let { PrismaClient } = require('@prisma/client')

    //Instancia da classe PrismaClient
    let prisma = new PrismaClient()

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
const selectByIdAluno = async (id) => {
    //Importe da biblioteca do prisma client
    let { PrismaClient } = require('@prisma/client')

    //Instancia da classe prisma client
    let prisma = new PrismaClient()

    let idAluno = id

    //Script para filtar os alunos pelo id
    let sql = 'select * from tbl_aluno where id =' + idAluno

    let rsAlunos = await prisma.$queryRawUnsafe(sql)

    //Valida se o banco de dados retornou algum registro
    if (rsAlunos.length > 0) {
        return rsAlunos
    } else {
        return false
    }

}

//inserir dados do aluno no banco de dados
const insertAluno = () => {

}

//atualizar dados do aluno no banco de dados
const updateAluno = () => {

}

//deletar dados do aluno no banco de dados
const deleteAluno = (id) => {

}

module.exports = {
    selectAllAluno,
    selectByIdAluno
}