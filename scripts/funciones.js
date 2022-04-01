// variables
const body = document.body;
const main = document.getElementById("mainTest");
const start = document.createElement("button");
// left
const left = document.createElement("div");
left.setAttribute("class", "left");
// right
const right = document.createElement("div");
right.setAttribute("class", "right");
const divLog = document.querySelector(`.divLog`);
const inputNombre = document.querySelector(`.inputNombre`);
const inputMail = document.querySelector(`.inputMail`);

// INTRO TEST
function introTest() {
    // divLog.remove()
    // contenedor
    const contenedor = document.createElement(`div`);
    contenedor.setAttribute("class", "contenedor")
    main.append(contenedor)

    // left
    contenedor.append(left)
    const text = document.createElement(`p`);
    text.innerText = ("Este test solo te llevara 10 minutos. Te recomendamos que lo hagas a tu tiempo, lee bien las preguntas y selecciona la opción correcta. Al finalizar sabrás que nivel de inglés tienes.");
    left.append(text);
    // right
    contenedor.append(right);

    // start button
    right.append(start);
    start.setAttribute("class", "start")
    start.innerText = ("START");

    // ver resultado anterior
    const resultadoAnterior = document.createElement(`button`);
    resultadoAnterior.innerText = ("VER RESULTADO ANTERIOR")
    resultadoAnterior.setAttribute("class", "resultadoAnterior")
    right.append(resultadoAnterior)
    resultadoAnterior.addEventListener("click", function () {
        start.remove()
        resultadoAnterior.style.marginTop = ("10em")
        resultadoAnterior.style.marginLeft = ("15em")
        // operador O
        const resultado = JSON.parse(localStorage.getItem("respuestaStorage")) || comenzarTest()
        // if (resultado == null) {
        //     resultadoAnterior.innerText = ("REALIZA EL TEST PARA SABER TU NIVEL")
        //     const start2 = document.createElement(`button`)
        //     start2.setAttribute("class", "start2")
        //     start2.innerText=("START!")
        //     resultadoAnterior.append(start2)
        //     start2.addEventListener("click", function(){
        //         comenzarTest()
        //     })
        // } else
        if (resultado.length < 20) {
            resultadoAnterior.innerText = ("Tuviste " + resultado.length + " respuestas correctas! Tu nivel es Elementary")
        } else if (resultado.length > 20 && resultado.length <= 29) {
            resultadoAnterior.innerText = ("Tuviste " + resultado.length + " respuestas correctas! Tu nivel es Begginer")
        } else if (resultado.length >= 30 && resultado.length <= 39) {
            resultadoAnterior.innerText = ("Tuviste " + resultado.length + " respuestas correctas! Tu nivel es Intermediate")
        } else {
            resultadoAnterior.innerText = ("Tuviste " + resultado.length + " respuestas correctas! Tu nivel es Advanced")
        }
    })
}

const respuestasUsuario = []
const respuestasIncorrectas = []
console.log(respuestasIncorrectas)


// COMENZAR TEST
function comenzarTest(e) {
    start.remove();
    for (let i = 0; i < preguntas.length; i++) {
        right.style.backgroundColor = "transparent";
        let questionsDiv = document.createElement(`div`);
        questionsDiv.setAttribute("class", "questionsDiv");
        questionsDiv.setAttribute("id", "preguntasDiv");
        right.append(questionsDiv);
        questionsDiv.style.backgroundColor = " #fff";
        let h3 = document.createElement("h3");
        let h4 = document.createElement("h4");
        let divOptions = document.createElement(`div`);
        divOptions.setAttribute("class", "divOptions");
        let option1 = document.createElement("button");
        option1.setAttribute("class", "btn");
        let option2 = document.createElement("button");
        option2.setAttribute("class", "btn");
        let option3 = document.createElement("button");
        option3.setAttribute("class", "btn");
        let option4 = document.createElement("button");
        option4.setAttribute("class", "btn");
        divOptions.append(option1, option2, option3, option4);
        const next = document.createElement(`button`);
        next.setAttribute("class", "next")
        questionsDiv.append(next)

        next.addEventListener("click", function () {
            scroll()
            respuestasIncorrectas.push("Sin responder")
            Toastify({
                text: "X",
                duration: 3000,
                style: {
                    background: "#ec4a3f",
                }

            }).showToast();
        })


        function scroll() {
            right.style.scrollSnapType = "y mandatory",
                questionsDiv.style.scrollSnapAlign = "start"
            right.scrollBy(0, 500)
        }

        h3.innerHTML = `Pregunta nro. ${preguntas[i].number} de 60`;
        h4.innerHTML = `${preguntas[i].text}`;
        option1.innerHTML = `${preguntas[i].options[0]}`;
        option2.innerHTML = `${preguntas[i].options[1]}`
        option3.innerHTML = `${preguntas[i].options[2]}`
        option4.innerHTML = `${preguntas[i].options[3]}`
        questionsDiv.appendChild(h3);
        questionsDiv.appendChild(h4);
        questionsDiv.append(divOptions);



        option1.addEventListener("click", function (e) {
            e.preventDefault()
            scroll()
            option1.style.backgroundColor = "#fff"
            option1.style.borderColor = "#ff2"
            // operador ternario
            // option1.innerHTML === preguntas[i].answer && respuestasUsuario.push(option1.innerHTML), localStorage.setItem("respuestaStorage", JSON.stringify(respuestasUsuario))
            // option1 != preguntas[i].answer && respuestasIncorrectas.push(option1.innerHTML)
            if (option1.innerHTML === preguntas[i].answer) {
                option1.style.backgroundColor = "#85ED3E",
                    respuestasUsuario.push(option1.innerHTML)
                localStorage.setItem("respuestaStorage", JSON.stringify(respuestasUsuario))
                Toastify({
                    text: "Correct!",
                    duration: 3000,
                    style: {
                        background: "#85ED3E",
                    }

                }).showToast();
            } else {
                option1.style.backgroundColor = "#ec4a3f",
                    respuestasIncorrectas.push(option1.innerHTML)
                Toastify({
                    text: "Incorrect!",
                    duration: 3000,
                    style: {
                        background: "#ec4a3f",
                    }
                }).showToast();
            }
        })
        option2.addEventListener("click", function (e) {
            e.preventDefault()
            option2.style.backgroundColor = "#fff"
            option2.style.borderColor = "#ff2"
            scroll()
            // option2.innerHTML === preguntas[i].answer && respuestasUsuario.push(option2.innerHTML), localStorage.setItem("respuestaStorage", JSON.stringify(respuestasUsuario))
            // option2 != preguntas[i].answer && respuestasIncorrectas.push(option2.innerHTML)
            if (option2.innerHTML === preguntas[i].answer) {
                option2.style.backgroundColor = "#85ED3E",
                    respuestasUsuario.push(option2.innerHTML),
                    localStorage.setItem("respuestaStorage", JSON.stringify(respuestasUsuario))
                Toastify({
                    text: "Correct!",
                    duration: 3000,
                    style: {
                        background: "#85ED3E",
                    }
                }).showToast();
            } else {
                option2.style.backgroundColor = "#ec4a3f",
                    respuestasIncorrectas.push(option2.innerHTML)
                Toastify({
                    text: "Incorrect!",
                    duration: 3000,
                    style: {
                        background: "#ec4a3f",
                    }
                }).showToast();
            }
        })
        option3.addEventListener("click", function (e) {
            e.preventDefault()
            option3.style.backgroundColor = "#fff"
            option3.style.borderColor = "#ff2"
            scroll()
            // option3.innerHTML === preguntas[i].answer && respuestasUsuario.push(option3.innerHTML), localStorage.setItem("respuestaStorage", JSON.stringify(respuestasUsuario))
            // option3 != preguntas[i].answer && respuestasIncorrectas.push(option3.innerHTML)
            if (option3.innerHTML === preguntas[i].answer) {
                option3.style.backgroundColor = "#85ED3E",
                    respuestasUsuario.push(option3.innerHTML),
                    localStorage.setItem("respuestaStorage", JSON.stringify(respuestasUsuario))
                Toastify({
                    text: "Correct!",
                    duration: 3000,
                    style: {
                        background: "#85ED3E",
                    }
                }).showToast();
            } else {
                option3.style.backgroundColor = "#ec4a3f",
                    respuestasIncorrectas.push(option3.innerHTML)
                Toastify({
                    text: "Incorrect!",
                    duration: 3000,
                    style: {
                        background: "#ec4a3f",
                    }
                }).showToast();
            }
        })
        option4.addEventListener("click", function (e) {
            e.preventDefault()
            option4.style.backgroundColor = "#fff";
            option4.style.borderColor = "#ff2";
            scroll()
            // option4.innerHTML === preguntas[i].answer && respuestasUsuario.push(option4.innerHTML), localStorage.setItem("respuestaStorage", JSON.stringify(respuestasUsuario))
            // option4 != preguntas[i].answer && respuestasIncorrectas.push(option4.innerHTML)
            if (option4.innerHTML === preguntas[i].answer) {
                option4.style.backgroundColor = "#85ED3E",
                    respuestasUsuario.push(option4.innerHTML),
                    localStorage.setItem("respuestaStorage", JSON.stringify(respuestasUsuario))
                Toastify({
                    text: "Correct!",
                    duration: 3000,
                    style: {
                        background: "#85ED3E",
                    }
                }).showToast();
            } else {
                option4.style.backgroundColor = "#ec4a3f",
                    respuestasIncorrectas.push(option4.innerHTML)
                Toastify({
                    text: "Incorrect!",
                    duration: 3000,
                    style: {
                        background: "#ec4a3f",
                    }
                }).showToast();
            }
        })
    }
    nivel()
}

// DEFINIR NIVEL
function nivel() {
    const verResultado = document.createElement(`button`);
    verResultado.innerText = ("Ver resultado")
    verResultado.setAttribute("class", "verResultado");
    right.style.scrollSnapAlign = "start";
    right.append(verResultado);
    verResultado.addEventListener("click", function () {
        if (respuestasUsuario.length < 20) {
            Swal.fire({
                title: 'Great job!',
                text: "Tuviste " + respuestasUsuario.length + " respuestas correctas! Tu nivel es Elementary",
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Ver Incorrectas🙋'
            }).then((result) => {

                if (result.isConfirmed) {
                    verIncorrectas()
                }
            })
        } else if (respuestasUsuario.length > 20 && respuestasUsuario.length <= 29) {
            Swal.fire({
                title: 'Great job!',
                text: "Tuviste " + respuestasUsuario.length + " respuestas correctas! Tu nivel es Begginer",
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Ver Incorrectas 🙋'
            }).then((result) => {

                if (result.isConfirmed) {
                    verIncorrectas()
                }
            })
        } else if (respuestasUsuario.length >= 30 && respuestasUsuario.length <= 39) {
            Swal.fire({
                title: 'Great job!',
                text: "Tuviste " + respuestasUsuario.length + " respuestas correctas! Tu nivel es Intermediate",
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Ver Incorrectas 🙋'
            }).then((result) => {

                if (result.isConfirmed) {
                    verIncorrectas()
                }
            })
        } else {
            Swal.fire({            
                title: 'Great job!',
                text: "Tuviste " + respuestasUsuario.length + " respuestas correctas! Tu nivel es Advanced",
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Ver Incorrectas 🙋'
            }).then((result) => {

                if (result.isConfirmed) {
                    scroll()
                    verIncorrectas()
                    enviarMail()
                }
            })
        }
    })
}

function verIncorrectas() {
    for (let i = 0; i < preguntas.length; i++) {
        right.style.backgroundColor = "transparent";
        right.style.overflow = ("scroll")
        let questionsDiv = document.createElement(`div`);
        questionsDiv.setAttribute("class", "questionsDiv");
        questionsDiv.setAttribute("id", "preguntasDiv");
        right.append(questionsDiv);
        questionsDiv.style.backgroundColor = " #fff";
        let h3 = document.createElement("h3");
        let h4 = document.createElement("h4");
        let divOptions = document.createElement(`div`);
        divOptions.setAttribute("class", "divOptions");
        let option1 = document.createElement("button");
        option1.setAttribute("class", "btn");
        let option2 = document.createElement("button");
        option2.setAttribute("class", "btn");
        let option3 = document.createElement("button");
        option3.setAttribute("class", "btn");
        let option4 = document.createElement("button");
        option4.setAttribute("class", "btn");
        divOptions.append(option1, option2, option3, option4);
        const next = document.createElement(`button`);
        next.innerHTML = ("Siguiente =>")
        questionsDiv.append(next)
        next.addEventListener("click", function () {
            scroll()
        })

        function scroll() {
            right.style.scrollSnapType = "y mandatory",
                questionsDiv.style.scrollSnapAlign = "start"
            right.scrollBy(0, 500)
        }

        h3.innerHTML = `Pregunta nro. ${preguntas[i].number} de 60`;
        h4.innerHTML = `${preguntas[i].text}`;
        option1.innerHTML = `${preguntas[i].options[0]}`;
        option2.innerHTML = `${preguntas[i].options[1]}`;
        option3.innerHTML = `${preguntas[i].options[2]}`;
        option4.innerHTML = `${preguntas[i].options[3]}`;
        questionsDiv.appendChild(h3);
        questionsDiv.appendChild(h4);
        questionsDiv.append(divOptions);
        // opcion 1
        option1.innerHTML === respuestasIncorrectas[i], "Sin responder" && option1.setAttribute("style", "background-color:red");
        option1.innerHTML === preguntas[i].answer && option1.setAttribute("style", "background-color:green");
        // opcion 2
        option2.innerHTML === respuestasIncorrectas[i], "Sin responder" && option2.setAttribute("style", "background-color:red")
        option2.innerHTML === preguntas[i].answer && option2.setAttribute("style", "background-color:green")
        //opcion 3
        option3.innerHTML === respuestasIncorrectas[i], "Sin responder" && option3.setAttribute("style", "background-color:red");
        option3.innerHTML === preguntas[i].answer && option3.setAttribute("style", "background-color:green")
        //opcion 4
        option4.innerHTML === respuestasIncorrectas[i], "Sin responder" && option4.setAttribute("style", "background-color:red")
        option4.innerHTML === preguntas[i].answer && option4.setAttribute("style", "background-color:green");



    }
}