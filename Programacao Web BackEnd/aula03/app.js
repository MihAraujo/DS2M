console.log('\n---------- CALCULADORA SIMPLES ----------\n');

const { exit } = require('process');
//Import da biblioteca de entrada de dados
var readline = require('readline');

//Instancia do objeto entradDados
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Entrada do valor1 
entradaDados.question('Digite o numero 1: \n\t', function  (valor1){
    //Declarando a variavel e convertendo o valor digitado pelo usuario em float 
    let numero1 = parseFloat(valor1);

    //typrof() - verifica qual tipo de dados de uma variavel ou um objeto 
        //console.log(typeof(numero1))

    entradaDados.question('Digite o numero 2: \n\t' , function (valor2){
        let numero2 = parseFloat(valor2);

            entradaDados.question('\nEscolha a operação a ser calculada: somar[+], subtrair[-], multiplicar[*], dividir[/]: ', function(opcao){
            //Declarando a variavel que vai receber o tipo de operacao matematica e convertendo em textyo digitado em MAIUSCULO
                // toUpperCase() - converte em  MAIUSCULO
                // toLowerCase() - converte em minusculo

            let operacao = opcao.toUpperCase();
            let resultado;

            // Chama a função que realizará os cálculos matemáticos
            if (resultado = calcular(numero1, numero2, operacao))
            {
                console.log('O resultado é: \n' + resultado);
                //Permite sair do nodeJS
                exit();
            }
        });
    });        
});