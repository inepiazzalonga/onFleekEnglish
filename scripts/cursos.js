const begginer = document.querySelector(`#begginer`)
begginer.innerText=("BEGGINER")
const intermediate = document.querySelector(`#intermediate`)
const advanced = document.querySelector(`#advanced`)
const noSe = document.querySelector(`#noSe`)


// let myInit = {
//     method: 'GET',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     mode: 'no-cors',
//     cache: 'default'
// };


let url = "./infoCursos.json";

fetch(url)
    .then((resp) => resp.json())
    .then((infoCursos) => {
        begginer.addEventListener("click", () => {
            begginer.innerText=""
            begginer.style.transform="none"
            begginer.style.transitionDuration="1s"
            courses.style.height = "max-content"
            begginer.style.width = "90em"
            begginer.style.height = "45em"
            begginer.style.lineHeight="normal"
            intermediate.remove()
            advanced.remove()
            noSe.remove()
            begginer.innerHTML += `
            <button class="XX" id="X1">X</button>
            <h2 class="nombreCurso">Curso ${infoCursos[0].nombre}</h2>
            <h3 class="precioCurso">Precio: ${infoCursos[0].precio}</h3>
            <p class="infoCurso">${infoCursos[0].info}</p>
            <p class="duracionCurso">Duración: ${infoCursos[0].duracion}</p>
            <p class="modCurso">Modalidad: ${infoCursos[0].modalidad}</p>
            <button id="contacto1">Contacto</button>
            <p class="mas">*Ponte en contacto para reservar un curso</p>`
            const X1 = document.querySelector(`#X1`)
            X1.addEventListener("click",()=>{
                window.location.reload()="../index.html#courses"
            })
            const contacto1 = document.querySelector(`#contacto1`)
            contacto1.addEventListener("click", () => {
               window.location="/contacto.html"
            })
        }, {
            once: true
        });
        intermediate.addEventListener("click", () => {
            intermediate.style.transitionDuration="1s"
            intermediate.style.transform="none"
            intermediate.innerText=""
            courses.style.height = "max-content"
            intermediate.style.width = "90em"
            intermediate.style.height = "45em"
            intermediate.style.lineHeight="normal"
            begginer.remove()
            advanced.remove()
            noSe.remove()
            intermediate.innerHTML += `
            <button class="XX" id="X2">X</button>
            <h2 class="nombreCurso">Curso ${infoCursos[1].nombre}</h2>
            <h3 class="precioCurso">Precio: ${infoCursos[1].precio}</h3>
            <p class="infoCurso">${infoCursos[1].info}</p>
            <p class="duracionCurso">Duración: ${infoCursos[1].duracion}</p>
            <p class="modCurso">Modalidad: ${infoCursos[1].modalidad}</p>
            <button id="contacto2">Contacto</button>
            <p class="mas">*Ponte en contacto para reservar un curso</p>`
            const X2 = document.querySelector(`#X2`)
            X2.addEventListener("click",()=>{
                window.location.reload()="../index.html#courses"
            })
            const contacto2 = document.querySelector(`#contacto2`)
            contacto2.addEventListener("click", () => {
                window.location="/contacto.html"
            })
        }, {
            once: true
        })
        advanced.addEventListener("click", () => {
            advanced.style.transitionDuration="1s"
            advanced.style.transform="none"
            advanced.innerText=""
            courses.style.height = "max-content"
            advanced.style.width = "90em"
            advanced.style.height = "45em"
            advanced.style.lineHeight="normal"
            intermediate.remove()
            begginer.remove()
            noSe.remove()
            advanced.innerHTML += `
            <button class="XX" id="X3">X</button>
            <h2 class="nombreCurso">Curso ${infoCursos[2].nombre}</h2>
            <h3 class="precioCurso">Precio: ${infoCursos[2].precio}</h3>
            <p class="infoCurso">${infoCursos[2].info}</p>
            <p class="duracionCurso">Duración: ${infoCursos[2].duracion}</p>
            <p class="modCurso">Modalidad: ${infoCursos[2].modalidad}</p>
            <button id="contacto3">Contacto</button>
            <p class="mas">*Ponte en contacto para reservar un curso</p>`
            const X3 = document.querySelector(`#X3`)
            X3.addEventListener("click",()=>{
                window.location.reload()="../index.html#courses"
            })
            const contacto3 = document.querySelector(`#contacto3`)
            contacto3.addEventListener("click", () => {
                window.location="/contacto.html"
            })
        }, {
            once: true
        })
       
        
    })
    .catch(err => console.log(err));






// begginer.addEventListener("click", () => {
//     intermediate.remove(),
//         advanced.remove()
//     noSe.remove()
//     courses.append(divInfo)
//     divInfo.innerHTML = `
//     <h2>${nombre}</h2>`

// })
// intermediate.addEventListener("click", () => {
//     begginer.remove(),
//         advanced.remove()
//     noSe.remove()
// })
// advanced.addEventListener("click", () => {
//     intermediate.remove(),
//         begginer.remove()
//     noSe.remove()
// })