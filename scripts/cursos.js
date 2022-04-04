const begginer = document.querySelector(`#begginer`)
const intermediate = document.querySelector(`#intermediate`)
const advanced = document.querySelector(`#advanced`)
const noSe = document.querySelector(`#noSe`)
const divInfo = document.createElement(`div`)
const courses = document.querySelector(`#courses`)

let myInit = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    },
    mode: 'no-cors',
    cache: 'default'
};


let url = "./infoCursos.json";
let myRequest = new Request(url, myInit);
// console.log(myRequest);

fetch(myRequest)
.then((res) => res.json())
.then((data) => console.log(data))
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