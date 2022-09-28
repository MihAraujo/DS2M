var cursos = [
    {
        "nome"  :   "001 - Técnico em Desenvolvimento de Sistemas",
        "sigla" :   "DS",
        "icone" :   "https://cdn-icons-png.flaticon.com/512/59/59118.png",
        "carga" :   "1200",
    },
    {
        "nome"  :   "002 - Técnico em Redes de Computadores",
        "sigla" :   "RDS",
        "icone" :   "https://www.flaticon.com/br/icone-gratis/desenvolvedor-de-software_4882466?related_id=4882524&origin=search",
        "carga" :   "1200"
    }
];

//Get dos cursos 
const getCursos = function(){
    let infosCursos = [];
    erro = true

    cursos.forEach(item => {
        infosCursos.push(item)
            erro = false;
     });
    if(erro)
        return false;
    else
        return infosCursos;

}

//Get das siglas dos cursos
const getListCursos = function(){
    let listCursos = [];
    erro = true

    cursos.forEach(item => {
        listCursos.push({
            sigla: item.sigla,
            icone: item.icone
        })
            erro = false;
    });
    if(erro)
        return false;
    else
        return listCursos;
}

module.exports = {
    getCursos,
    getListCursos
}