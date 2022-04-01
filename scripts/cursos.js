let myInit = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    },
    mode: 'no-cors',
    cache:'default'
};
let myRequest = new Request ("../infoCursos.json", myInit)


// const infoCursos = ("../infoCursos.json")
const divCursos = document.getElementById(`cursos`)

fetch(myRequest)
    .then((res) => res.json())
    .then((data) => {
        data.forEach((curso) => {

            divCursos.innerHTML += `
    <h2>Curso ${curso.nombre}</h2>
    <h3>Precio ${curso.precio}</h3>
    <p>${curso.info}</p>
    <h4>Duración: ${curso.duracion}</h4>
    <h5>Modalidad: ${curso.modalidad}</h5>`
        })
    })
    .catch(error=>console.error('Error', error))
