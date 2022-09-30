'use strict'

const numeros = [2, 5, 7, 45, 23, 80, 120, 30]
const nomes = ['ana', 'hugo', 'pedro']
const frutas = ['uva', 'morango', 'banana', 'melancia']

// Problema:  Exibir os elementos do array no layout
// Solução imperativa (while)

// const ultimoIndice = numeros.length -1
// let contador = 0
// while(contador <= ultimoIndice){
//     console.log(numeros[contador])
//     contador ++
// }

// Solução imperativa (FOR)
// const ultimoIndice = numeros.length - 1 
// for (let contador = 0; contador <= ultimoIndice; contador++){
//     console.log(numeros[contador])
// }

//Solução Declarativa

// const mostrarElementos = (numeros) => console.log(numeros)
// numeros.forEach(mostrarElementos)

// Problema: Exibir os elementos do array no layout

// const criarItems = (numeros) => {
//     const ul = document.querySelector('ul')
//     const div = document.createElement('div')
//     div.classList.add('items')
//     div.textContent = numeros
//     ul.appendChild(div)
// }

// numeros.forEach(criarItems)

const criarContainer = (titulo, array) => {
    const main = document.querySelector('main')
    const div = document.createElement('div')
    div.classList.add('array-container')
    div.innerHTML = `
        <h2>${titulo}</h2>
        <ul>
            <li class='items'>
                ${array.join("</li><li class='items'>")}
            </li>
        </ul>
    `
    main.appendChild(div)
}

criarContainer('Problema 1', numeros)
criarContainer('Clientes', nomes)
criarContainer('Produtos', frutas)