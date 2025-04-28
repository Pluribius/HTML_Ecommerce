document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    let nombre = document.getElementById('nombre').value.trim();
    let apellido = document.getElementById('apellido').value.trim();
    let telefono = document.getElementById('telefono').value.trim();
    let email = document.getElementById('email').value.trim();
    let mensaje = document.getElementById('mensaje').value.trim();

    let nombreError = document.getElementById('nombre-error');
    let apellidoError = document.getElementById('apellido-error');
    let telefonoError = document.getElementById('telefono-error');
    let emailError = document.getElementById('email-error');
    let mensajeError = document.getElementById('mensaje-error');

    let isValid = true;

    if (nombre === '') {
        nombreError.textContent = 'Por favor, ingrese su nombre.';
        nombreError.classList.remove('hidden');
        isValid = false;
    } else {
        nombreError.classList.add('hidden');
    }

    if (apellido === '') {
        apellidoError.textContent = 'Por favor, ingrese su apellido.';
        apellidoError.classList.remove('hidden');
        isValid = false;
    } else {
        apellidoError.classList.add('hidden');
    }

    if (telefono === '') {
        telefonoError.textContent = 'Por favor, ingrese su teléfono.';
        telefonoError.classList.remove('hidden');
        isValid = false;
    } else if (!/^\d{3}-\d{4}$/.test(telefono) && !/^\d{4}-\d{7}$/.test(telefono)) {
        telefonoError.textContent = 'Ingrese un teléfono válido (ej: 123-4567 o 1234-5678901).';
        telefonoError.classList.remove('hidden');
        isValid = false;
    } else {
        telefonoError.classList.add('hidden');
    }

    if (email === '') {
        emailError.textContent = 'Por favor, ingrese su correo electrónico.';
        emailError.classList.remove('hidden');
        isValid = false;
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
        emailError.textContent = 'Ingrese un correo electrónico válido.';
        emailError.classList.remove('hidden');
        isValid = false;
    } else {
        emailError.classList.add('hidden');
    }

    if (mensaje === '') {
        mensajeError.textContent = 'Por favor, ingrese su mensaje.';
        mensajeError.classList.remove('hidden');
        isValid = false;
    } else {
        mensajeError.classList.add('hidden');
    }

    if (isValid) {
        // Aquí puedes agregar la lógica para enviar el formulario (por ejemplo, usando fetch)
        alert('Formulario enviado correctamente. ¡Gracias!');
        document.getElementById('contact-form').reset(); // Opcional: resetear el formulario
    }
});