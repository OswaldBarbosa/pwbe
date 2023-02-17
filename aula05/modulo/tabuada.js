 /*
1 - Objetivo: Arquivo de funções para calcular uma tabuada
2 - Data: 06/02/2023
3 - Autor: Oswaldo Barbosa
4 - Versão: 1.0
*/

//Função que  gera uma tabuada até um contador específico
const getTabuada = function (multiplicando, maxMultiplicador) {

    let tabuada = Number(String(multiplicando).replace(",", "."));
    let tabuadaContador = Number(String(maxMultiplicador).replace(",", ".")
    );
    let status = true;
    let resultado;
    let contador = 0; //start da repetição

    if (tabuada == "" || tabuadaContador == "") {
        status = false;

    } else if (isNaN(tabuada) || isNaN(tabuadaContador)) {
        status = false;

    } else {

        //While
        while (contador <= tabuadaContador) {
            //2 x 0 = 0
            resultado = tabuada * contador;
            console.log(`${tabuada} x ${contador} = ${resultado}`);
            contador += 1;
        }

        For
        for (let contador = 0; contador <= tabuadaContador; contador++) {
            //2 x 0 = 0
            resultado = tabuada * contador;
            console.log(tabuada + "x" + contador + " = " + resultado);
            contador += 1;
        }

    }
    return status;
}
getTabuada(7.8, 18);

module.exports = {
    getTabuada
}