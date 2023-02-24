/*
 * 1 - Objetivo: Aprender sobre Array
 * 2 - Data: 24/02/2023
 * 3 - Autor: Oswaldo Barbosa
 * 4 - Versão: 1.0
 */

// [ ] - Representa um objeto do tipo array
// { } - Representa um objeo do tipo JSON

const listaNomes = ['José', 'Maria', 'Luiz', 'Antônio', 'Ana', 'Carlos']
const listaProdutos = ['Teclado', 'Mouse', 'Monitor', 'Gabinete', 'HD', 'Memória']

const exibindoDados = function () {
    //Verifica o tipo de dados do elemento listaNomes
    console.log(typeof (listaNomes))

    //Verifica o tipod de dados dos itens do array
    console.log(typeof (listaNomes[0]))

    //Exibe o conteúdo do indice 
    console.log(listaNomes[1])

    //Exibe todos os itens do array
    console.log(listaNomes)

    //TABLE - PERMITE VISUALIZAR O CONTEÚDO DO ARRAY EM FORMATO DE TABELA
    console.table(listaNomes)

    console.log(`O nome do aluno é: ${listaNomes[1]}`)

    //length - retorna a quantidade de itens de um array
    console.log(listaNomes.length)

    console.log('\n')
    console.log('--------------------')

    //Percorrendo o array com o WHILE
    console.log('Exemplo com o WHILE')
    let contador = 0
    let quantidadeItens = (listaNomes.length)

    while (contador < quantidadeItens) {
        console.log(`O nome do aluno é: ${listaNomes[contador]}`)
        contador += 1
    }
    console.log('--------------------')
    console.log('\n')

    //Percorrendo o array com o FOR
    console.log('Exemplo com o FOR')
    for (let contador = 0; contador < quantidadeItens; contador += 1) {
        console.log(`O nome do aluno é: ${listaNomes[contador]}`)
    }
    console.log('--------------------')
    console.log('\n')

    //Percorrendo o array com o FOREACH
    console.log('Exemplo com o FOREACH')
    listaNomes.forEach(function (nome) {
        console.log(`O nome do aluno é: ${nome}`)
    })
}

const manipulandoDados = function () {
    //push - adiciona novos itens no final do array, preservando os elementos anteriores
    listaProdutos.push('Memória', 'WebCam', 'Gabinete', 'Fone')
    console.table(listaProdutos)

    // unshift - adiciona novos itens no inicio do array, reorganizando todos os elementos
    listaProdutos.unshift('HD', 'Placa Mãe', 'SSD')
    console.table(listaProdutos)

    //pop - remove o último item do array, preservando os elementos anteriores
    listaProdutos.pop()
    console.table(listaProdutos)

    //shift - remove o primeiro item do array, reorganizando os elementos sucessores
    listaProdutos.shift()
    console.table(listaProdutos)

    //slice - permite criar uma cópia de um array
    const novosProdutos = listaProdutos.slice()
    console.table(novosProdutos)

    //indexOf - permite buscar dentro de um array um item
    //se o retorno for -1, o item não foi encontrado
    //se o retorno for maior ou igual 0, o item foi encontrado e ele retorna o indice do item
    console.log(listaProdutos.indexOf('Processador'))

    //Exemplo de utilização do indexOf

    if (listaProdutos.indexOf('Gabinete') >= 0) {
        console.log('ITEM ENCONTADO')
    } else {
        console.log('ITEM NÃO ENCONTRADO')
    }
}

const removerProdutos = function (nomeProduto) {
    let nome = nomeProduto
    let indice = listaProdutos.indexOf(nome)
    let status

    //splice - permite apagar um ou mais itens de um array atavés do imdice
    //se for encaminahando somente o indice ele irá apagar todos os itens para baixo
    // para limita a quantidade de itens a ser apagado, devemos informar como segundo parametro
    if (indice >= 0) {
        listaProdutos.splice(indice, 1)
        status = true
    } else {
        status = false
    }

    return status

}
