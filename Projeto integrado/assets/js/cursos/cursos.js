'use strict'

const cursos = async () => {
    const url = `http://localhost:8080/cursos/`

    const response = await fetch(url)
    const listaCursos = await response.json
    return listaCursos.message
}

export{
    cursos
}