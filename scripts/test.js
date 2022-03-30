
// EJECUCION

// login

inicio()
// ingresar

inputMail.addEventListener('keyup', function (e) {
    var keycode = e.keyCode || e.which;
    keycode == 13 && introTest();
});

ingresar.addEventListener("click", () =>{
    introTest()
});

// mostrar test
start.addEventListener("click", function () {
    comenzarTest()
});


