/*
1 - Objetivo: Calcular a media de 4 notas escolares
2 - Autor: Oswaldo Barbosa
3 - Data: 27/01/2023
4 - Versão 1.0
*/

//Importe da biblioteca readline
var readline = require("readline");

//Cria um objetivo para ser especialista em entrada de dados pelo teclado
var entradaDados = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

/*
 * Criação de varaiaveis
    * var - cria um espaço em memória de escopo global para  o projeto, ou seja,
    * essa varaável poderá ser utilizada em qualquer parte do arquivo (várias functions).
    * 
    * let - cria um espaço em memória de escopo local para o projeto, ou seja,
    * essa variável poderá ser utilizada dentro da fuction que foi criada.
    * 
    * const - cria um espaço em memória de espoco local ou global para o projeto, ou seja,
    * essa constante poderá ser utilizada em qualquer parte do projeto e nunca sofrerá alteração.
*/

entradaDados.question("Digite seu nome: \n", function(nome){
    //Recebe o valor que foi digitado
    let nomeAluno = nome;

    //Função de Callback para entrar a nota1
    entradaDados.question("Digite a nota 1: \n", function(nota1){
        let valor1 = nota1;

        //Função de Callback para entrar a nota2
        entradaDados.question("Digite a nota2 \n", function(nota2){
            let valor2 = nota2;

            //Função de Callback para entrar a nota3
            entradaDados.question("Digite a nota3 \n", function(nota3){
                let valor3 = nota3;

                //Função de Callback para entrar a nota4
                entradaDados.question("Digite a nota 4 \n", function(nota4){
                    let valor4 = nota4;
                    
                    let media;

                    /**
                     *  Conversão tipos de dados
                     * 
                     *      parseInt() ou Number.parseInt - converte uma String em inteiro.
                     *      parseFloat() ou Number.parseFloat - converte uma String em real.
                     * 
                     *      Number() - converte uma String para número, conforme a entrada do valor
                     *      o JS define se será inteiro ou real.
                     * 
                     *  Operadores de comparação
                     *      
                     *      == (verifica a igualdade entre conteúdos)
                     *      != (verifica a diferença entre conteúdos)
                     *      < (menor)
                     *      > (maior)
                     *      < (menor ou igual)
                     *      > (maior ou igual)
                     *      === (verifica a igualdade entre conteúdos e tipos de dados)
                     *          Exemplo:
                     *                   0 === 0   V
                     *                   0 === "0" F
                     *                   0 === 0.0 F
                     *                   0 ==   0  V
                     *                   0 == "0"  V
                     *                  "0" == 0   V
                     *      !== (verifica a diferença entre conteúdos e igualdade de tipos de dados)
                     *      ==! (verifica a igualdade entre conteúsodos e a diferença de tipos de dados)
                     *
                     *  Operadores Lógicos
                     * 
                     *      E         &&   AND
                     *      OU        ||   OR
                     *      NEGAÇÃO   !    NOT
                     */

                    //Validação para entrda vazia
                    if(valor1 == "" || valor2 == "" || valor3 == "" || valor4 == "")
                    {
                        console.log("ERRO: Você deixou de entrar com alguma nota")

                    }else if(isNaN(valor1) || isNaN(valor2) || isNaN(valor3) || isNaN(valor4))
                    {
                        console.log("ERRO: você não digitou um número válido")
                        
                    }else{

                        media = (parseFloat(valor1) + parseFloat(valor2) + parseFloat(valor3) + parseFloat(valor4))/4;

                        console.log(nomeAluno + " sua média é: " + media);

                    }
                });
            });
        });
    });
});