"use strict"

import { cursos } from "./cursos"

let getCursos = await cursos()

const criarContainer = (json) => {
    const container = document.getElementById('cursos')

    const cursos = json

    cursos.array.forEach(element => {
        const div = document.createElement('div')
        div.classList.add('cursos-content')

        const img = document.createElement('img')
        img.classList.add('cusos-icones')
        img.src = element.icone

        const span = documen.createElement('span')
        span.classList.add('cursos-nome')
        img.textContent = element.sigla

        div.appendChild(img)
        div.appendChild(span)
        div.id = element.sigla.tolowerCase()

        container.appendChild(div)

        div.addEventListener('click', (el) => {
            el.preventDefault()
            const curso = div.id
            localStorage.setItem('curso', curso)

            location.href = './assets/pages/student-list.html'
        })
    });
}

criarContainer( getCursos)