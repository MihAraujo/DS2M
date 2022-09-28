'use strict'

function mostrarResultado(){

    const nome = document.getElementById('nome').value
    const altura = parseFloat(document.getElementById('altura').value) 
    const peso = parseFloat(document.getElementById('peso').value)
    const imcForm = document.getElementById('imc-form')
    const resultado = document.getElementById('result')

    if (imcForm.reportValidity()){
        const valorIMC = (peso/altura ** 2)
        let classificacao = ''

        if (valorIMC < 18.5){
            classificacao = 'abaixo do peso.'
        }else if (valorIMC < 25){
            classificacao = 'peso ideal. <span class="verde">Parabéns!</span>'
        }else if (valorIMC < 30){
            classificacao = 'levemente acima do peso.'
        }else if (valorIMC < 35){
            classificacao = 'obesidade grau I'
        }else if (valorIMC < 40){
            classificacao = 'obesidade grau II'
        }else{
            classificacao = 'obesidade grau III. <span class="vermelho">CAVE SUA COVA!</span>'
        }

        resultado.innerHTML = `${nome} seu IMC é ${valorIMC.toFixed(2)} e você está ${classificacao}`

    }
}
document.getElementById('calcular').addEventListener('click', mostrarResultado)