/************************************************************************************************** 
 * Objetivo:        Arquivo que contem todas as funcoes para calculos matematicos
 * Autor:           Milena Araujo de Souza
 * Data de Criacao: 01/08/2022
 * Versao:          1.0
***************************************************************************************************/

//Método tradicional de se criar uma função
function calcular (valor1, valor2, opcaoCalculo)
{
    // Criando variaveis locais para receber o conteudo dos argumentos que foram encaminhados na function
    let numero1 = valor1;
    let numero2 = valor2;
    let operacao = opcaoCalculo.toUpperCase();      ;
    let resultado;
    let erro = false;

    // isNaN - funcao para validar se o conteudo de uma variavel e um numero ou nao
    if(isNaN(numero1) || isNaN(numero2))
    {
        console.log ('\n-----ERRO: Somente sera possivel calcular se forem digitados numeros-----\n')
        erro = true;
        exit();
    }else{

        // if(operacao == 'SOMAR'|| operacao == '+')
        //     resultado = numero1 + numero2;
        // else if(operacao == 'SUBTRAIR'|| operacao == '-')
        //     resultado = numero1 - numero2;
        // else if(operacao == 'MULTIPLICAR' || operacao == '*')
        //     resultado = numero1 * numero2;
        // else if(operacao == 'DIVIDIR' || operacao == '/')
        //     resultado = numero1 / numero2;
        // else
        // {
        //     resultado = '\n----------ERRO: Não foi escolhido uma operação válida!----------\n';
        //     erro = true;
        // }

        switch(operacao)
        {
            case 'SOMAR': case '+':
                resultado = numero1 + numero2;
                break;
            case 'SUBTRAIR': case '-':
                resultado = numero1 - numero2;
                break;
            case 'MULTIPLICAR': case '*':
                resultado = numero1 * numero2;
                break;
            case 'DIVIDIR': case '/':
                if(numero2 == 0)
                {
                    console.log ('\nERRO: Não é possível realizar a divisão por 0');
                    erro = true;
                    exit();
                }
                else
                    resultado = numero1 / numero2;
                break;
            default:
                console.log ('\n----------ERRO: Não foi escolhido uma operação válida!----------\n');
                erro = true;
                exit();
        }
    }
    if (erro)
        return false;
    else
        return resultado;

}