
const formulario = document.querySelector(".formulario");

const campoNombres = document.querySelector("#nombres");
const campoApellidos = document.querySelector("#apellidos");
const campoDocumento = document.querySelector("#documento");
const campoCorreo = document.querySelector("#correo");
const campoTelefono = document.querySelector("#telefono");
const campoContrasena = document.querySelector("#contrasena");
const campoConfirmarContrasena = document.querySelector("#confirmar-contrasena");
const campoTerminos = document.querySelector("#aceptar-terminos");

const mensaje = document.querySelector("#mensaje-registro");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const nombres = campoNombres.value.trim();
    const apellidos = campoApellidos.value.trim();
    const documento = campoDocumento.value.trim();
    const correo = campoCorreo.value.trim();
    const telefono = campoTelefono.value.trim();
    const contrasena = campoContrasena.value;
    const confirmarContrasena = campoConfirmarContrasena.value;

    if (
        nombres === "" ||
        apellidos === "" ||
        documento === "" ||
        correo === "" ||
        telefono === ""
    ) {
        mensaje.textContent = "Por favor, completa todos los campos obligatorios.";

        mensaje.classList.remove("mensaje-exito");
        mensaje.classList.add("mensaje-error");

        return;
    }

    if (contrasena.length < 8) {
        mensaje.textContent = "La contraseña debe tener mínimo 8 caracteres.";

        mensaje.classList.remove("mensaje-exito");
        mensaje.classList.add("mensaje-error");

        return;
    }

    if (contrasena !== confirmarContrasena) {
        mensaje.textContent = "Las contraseñas no coinciden.";

        mensaje.classList.remove("mensaje-exito");
        mensaje.classList.add("mensaje-error");

        return;
    }

    if (!campoTerminos.checked) {
        mensaje.textContent = "Debes aceptar las condiciones para continuar.";

        mensaje.classList.remove("mensaje-exito");
        mensaje.classList.add("mensaje-error");

        return;
    }

    mensaje.textContent = "Validación completada. Tu solicitud de registro está lista para ser procesada.";

    mensaje.classList.remove("mensaje-error");
    mensaje.classList.add("mensaje-exito");

    formulario.reset();
});
