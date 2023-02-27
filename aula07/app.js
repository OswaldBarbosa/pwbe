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

/**
 * 
 *  JSON é composto por chave (atributo) e valor
 *  chave    valor  chave    valor        chave  valor
 *  [nome : 'José', celular: 11998898989, email: jose@gmail.com]
 * 
 */

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

const removerItem = function (nomeItem, array) {
    //Entrada de Dados
    let nome = nomeItem
    let novoArray = array.slice()
    let indice = novoArray.indexOf(nome)
    let status

    //Procesamento da Função
    if (indice >= 0) {
        novoArray.splice(indice, 1)
        status = true
    } else {
        status = false
    }

    //Saída
    if (status == true) {
        return novoArray
    } else {
        return false
    }
}

const listagemProdutos = function () {
    //Forma número um de criar um JSON e já atribuir chaves e valores
    //let listProdutosJSON = {produtos: listaProdutos, clientes: listaNomes}

    //Forma número dois de criar um JSON, onde as chaves e os valores são atriibuidos no decorrer do projeto
    // let listProdutosJSON = {}

    // listProdutosJSON.produtos = listaProdutos

    // listProdutosJSON.clientes = listaNomes

    //Extraindo valores de um JSON e ARRAY
    // console.log(listProdutosJSON)
    // console.log(listProdutosJSON.produtos[1])
    // console.log(listProdutosJSON.clientes[5])

    let listProdutosJSON = {}
    let listProdutosARRAY = [
        { nome: 'Monitor', quantidade: 300, marca: 'DELL', valor: 1000, descricao: 'Monitr DELL', codigo: 1 },
        { nome: 'Monitor', quantidade: 200, marca: 'LG', valor: 1300, descricao: 'Monitr LG', codigo: 2 },
        { nome: 'Teclado', quantidade: 800, marca: 'DELL', valor: 200, descricao: 'Teclado DELL', codigo: 3 },
        { nome: 'Teclado', quantidade: 900, marca: 'Logitech', valor: 400, descricao: 'Teclado Logitech', codigo: 4 },
        { nome: 'Teclado', quantidade: 990, marca: 'Razen', valor: 500, descricao: 'Teclado Razen', codigo: 5 },
        { nome: 'Teclado', quantidade: 340, marca: 'Logitech', valor: 750, descricao: 'Teclado Logitech', codigo: 6 },
        { nome: 'Mouse', quantidade: 150, marca: 'DELL', valor: 115, descricao: 'Mouse DELL', codigo: 7 },
        { nome: 'Mouse', quantidade: 300, marca: 'Razer', valor: 250, descricao: 'Mouse Razer', codigo: 8 }
    ]

    //ARRAYS para cores
    let listCoresDellArray = ['Preto', 'Branco', 'Cinza']
    let listCoresLgArray = ['Preto', 'Cinza']
    let listCoresTecladoArray = ['Preto', 'Branco', 'Cinza', 'Rosa', 'Azul']
    let listCoresMouseArray = ['Preto', 'Branco', 'Cinza', 'Rosa', 'Azul', 'Verde', 'Amarelo', 'Roxo']

    //ARRAYS para modelos
    let listModelosMonitor = ['LCD', 'LED', 'OLED', '4K']
    let listModelosTeclado = ['Mecânico', 'Semi-Mecânico', 'Membrana', 'Óptico']

    //Adicione o ARRAY de produtos dentro de um JSON
    listProdutosJSON.produtos = listProdutosARRAY

    //Adiionar cores ao monitor dell
    listProdutosJSON.produtos[0].cores = listCoresDellArray

    //Adiionar cores ao monitor LG
    listProdutosJSON.produtos[1].cores = listCoresLgArray

    //Adiionar cores ao teclado dell
    listProdutosJSON.produtos[2].cores = listCoresDellArray

    //Adiciona cores aos teclados
    listProdutosJSON.produtos[3].cores = listCoresTecladoArray
    listProdutosJSON.produtos[4].cores = listCoresTecladoArray
    listProdutosJSON.produtos[5].cores = listCoresTecladoArray

    //Adiionar cores ao mouse dell
    listProdutosJSON.produtos[6].cores = listCoresDellArray

    //Adiconar cores aos mouses
    listProdutosJSON.produtos[7].cores = listCoresMouseArray

    //Adiionar modelos aos monitores
    listProdutosJSON.produtos[0].modelos = listModelosMonitor
    listProdutosJSON.produtos[1].modelos = listModelosMonitor

    //Adiciona modelos aos teclados
    listProdutosJSON.produtos[2].modelos = listModelosTeclado
    listProdutosJSON.produtos[3].modelos = listModelosTeclado
    listProdutosJSON.produtos[4].modelos = listModelosTeclado
    listProdutosJSON.produtos[5].modelos = listModelosTeclado

    // console.log('Nome: ' + listProdutosJSON.produtos.nome)
    // console.log('Marca: ' + listProdutosJSON.produtos.marca)
    // console.log('Valor: ' + listProdutosJSON.produtos.valor)
    // console.log('Cor: ' + listProdutosJSON.produtos.cores)
    // console.log('Modelo: ' + listProdutosJSON.produtos.modelos)

    listProdutosARRAY.forEach(function(produto){
        console.log('Nome: ' + produto.nome + ' Marca: ' + produto.marca + ' Valor: ' + produto.valor + ' Cores: ' + produto.cores + ' Modelo: ' + produto.modelos)
    })
}

listagemProdutos()