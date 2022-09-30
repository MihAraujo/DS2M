'use strict'

const pesquisaCachorro = async (raca) => {
    const url = `https://dog.ceo/api/breed/${raca}/images`

    //Variavel que recebe a resposta da requisição
    const response = await fetch(url)

    const listaCachorros = await response.json()

    return listaCachorros.message
}



export{
    pesquisaCachorro
}