console.log('\n----------EXERCÍCIO PARA CALCULAR A MÉDIA----------');

//Import da biblioteca readline (permite interagir com o usuario)
var readline = require('readline');

//Instancia o objeto para criar a interacao com o usuario
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

/******
 *  Variaveis
 *      var - permite criar uma variavel de escopo global no projeto
 *          A variavel criada com var, tera existencia em todas as partes do projeto, ou seja, todas as funcoes terao acesso a esta variavel
 * 
 *      let - permite criar uma variavel de escopo local
 *          A variavel criada com let, tera existencia somente na funcao que esta sendo utilizada 
 * 
 ******/

//Entrada do nome do aluno
entradaDados.question('\nDigite o nome do(a) aluno(a): ', function (nome){
    //Declaracao de variavel local (let) e atribuindo valor 
    let nomeAluno = nome;
    //console.log('Nome do aluno: '+nomeAluno);

    //Entrada da Nota 1
    entradaDados.question('\nEntrar com o valor da nota 1: ', function(valor1){
        let nota1= valor1;

        //Entrada da nota 2
        entradaDados.question('\nEntrar com o valor da nota 2: ', function(valor2){
            let nota2 = valor2;

            //Entrada da nota 3
            entradaDados.question('\nEntrar com o valor da nota 3: ', function(valor3){
                let nota3 = valor3;

                //Entrada da nota 4
                entradaDados.question('\nEntrar com o valor da nota 4: ', function(valor4){
                    let nota4 = valor4;
                    let media;
                    let statusAluno;

                    /**
                     *  OPERADORES DE COMPARACAO
                     *      == (comparacao de teste logico)
                     *      != (diferenca de teste logico)
                     *      <  (menor)
                     *      >  (maior)
                     *      <= (menor igual)
                     *      >= (maior igual)
                     * 
                     *  OPERADORES LOGICOS
                     *      E           &&          AND
                     *      OU          ||          OR
                     *      NEGACAO     !           NOT
                    **/

                    //Validacao para o nome do aluno
                    if(nomeAluno == '')
                    {
                        console.log('Nome do aluno deve ser informado.');
                        entradaDados.close();
                    //Validacao para as notas
                    }else if(nota1 == ''|| nota2 == ''|| nota3 == ''|| nota4 == ''){
                        console.log('É necessário mostrar todas as notas para o cálculo.')
                        entradaDados.close();

                    }else{
                        //Para converter uma string e valor, podemos utilizar a parseInt ou parseFloat
                        //parseInt      - converte para inteiro
                        //parseFloat    - converte para real
                        media = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3)+ parseFloat(nota4))/4;

                    }if(media >= 7.0){
                        statusAluno = 'APROVADO';
                    }else if(media >= 4.0 && media <=6.9){
                        statusAluno = 'EXAME';
                    }else{
                        statusAluno = 'REPROVADO';
                    }

                    //toFixed() - Permite limitar a quantidade de casas decimais

                    console.log('\n\nO(A) aluno(a) ['+ nomeAluno + '], teve media '+ media.toFixed(1) + '\n\tO(A) aluno(a) esta: '+ statusAluno)

                    //Fecha o objeto entradDados
                    entradaDados.close();
                });
            });
        });
    });
    
});