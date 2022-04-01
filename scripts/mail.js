let btn = document.querySelector('#button');
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    btn.value = 'ENVIANDO...'
    emailjs.sendForm('service_96ng8fg', 'service_96ng8fg', this)
        .then(function () {
            btn.value = 'ENVIAR';
            notifier.success(`= Se le contactara a la brevedad =`, {
                durations: {
                    success: 3000
                },
                labels: {
                    success: 'Mail enviado exitosamente'
                }
            })
            console.log('Mail status: success');
        }, function (error) {
            btn.value = 'ENVIAR';
            notifier.alert(`El mail no pudo ser enviado, intente de nuevo mas tarde`, {
                durations: {
                    alert: 3000
                }
            })
            console.log('Mail status: failed', error);
        });
});