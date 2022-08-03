'use strict'

function mudarCor (){
    const nomeCor = document.getElementById('cor').value.toUpperCase()
    let cor = 'FFFFFF'
    if(nomeCor == 'VERMELHO')
        cor = 'FF0000'
    else if (nomeCor == 'VERDE')
        cor = '00FF00'
    else if (nomeCor == 'AZUL')
        cor = '0000FF'
    else if (nomeCor == 'AMARELO')
        cor = 'FFFF00'
        
    //document.body.style.backgroundColor = `#$(cor)`
    document.documentElement.style.setProperty('--bg-color', `#${cor}`)

} 

document.getElementById('aplicar').addEventListener('click', mudarCor)