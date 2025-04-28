
function mostrarContacto() {
   
   
     /*swal({
        title: "¡Contáctanos!",
        text: "Puedes llamarnos al +58 212 555-1234 o enviarnos un correo a info@estacionamientointeligente.com",
        button: "Cerrar",
    });*/
}

document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
        event.preventDefault();

        let hasErrors = false;

        const nombre = document.getElementById("nombre").value.trim();
        const apellido = document.getElementById("apellido").value.trim();
        const telefono = document.getElementById("telefono").value.trim();
        const email = document.getElementById("email").value.trim();
        const mensaje = document.getElementById("mensaje").value.trim();

        const nombreError = document.getElementById("nombre-error");
        const apellidoError = document.getElementById("apellido-error");
        const telefonoError = document.getElementById("telefono-error");
        const emailError = document.getElementById("email-error");
        const mensajeError = document.getElementById("mensaje-error");

        nombreError.style.display = "none";
        apellidoError.style.display = "none";
        telefonoError.style.display = "none";
        emailError.style.display = "none";
        mensajeError.style.display = "none";

        if (nombre === "") {
            nombreError.textContent = "Por favor, ingrese su nombre.";
            nombreError.style.display = "block";
            hasErrors = true;
        }

        if (apellido === "") {
            apellidoError.textContent = "Por favor, ingrese su apellido.";
            apellidoError.style.display = "block";
            hasErrors = true;
        }

        if (telefono === "") {
            telefonoError.textContent = "Por favor, ingrese su teléfono.";
            telefonoError.style.display = "block";
            hasErrors = true;
        } else if (!/^\d{3}-\d{3}-\d{4}$/.test(telefono)) {
            telefonoError.textContent =
                "Formato de teléfono inválido. Use el formato XXX-XXX-XXXX.";
            telefonoError.style.display = "block";
            hasErrors = true;
        }

        if (email === "") {
            emailError.textContent =
                "Por favor, ingrese su correo electrónico.";
            emailError.style.display = "block";
            hasErrors = true;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            emailError.textContent = "Formato de correo electrónico inválido.";
            emailError.style.display = "block";
            hasErrors = true;
        }

        if (mensaje === "") {
            mensajeError.textContent = "Por favor, ingrese su mensaje.";
            mensajeError.style.display = "block";
            hasErrors = true;
        }

        if (!hasErrors) {
            swal({
                title: "¡Mensaje Enviado!",
                text: "Gracias por contactarnos. Nos pondremos en contacto contigo pronto.",
                icon: "success",
                button: "Cerrar",
            }).then(() => {
                document.getElementById("contact-form").reset();
            });
        }
    });