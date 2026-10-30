
const formulario = document.querySelector(".formulario");
const campoCorreo = document.querySelector("#correo");
const campoContrasena = document.querySelector("#contrasena");
const mensaje = document.querySelector("#mensaje-login");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const correo = campoCorreo.value.trim();
    const contrasena = campoContrasena.value;

    if (correo === "" || contrasena === "") {
        mensaje.textContent = "Por favor, completa todos los campos.";
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

    mensaje.textContent = "Validación completada. La autenticación real aún no está disponible.";
    mensaje.classList.remove("mensaje-error");
    mensaje.classList.add("mensaje-exito");

    formulario.reset();
});
