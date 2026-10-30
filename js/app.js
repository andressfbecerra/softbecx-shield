
const nombreSistema = "SoftBecX Shield";

const alertas = [
    {
        id: 1,
        nombre: "Correo sospechoso",
        tipo: "phishing",
        descripcion: "Posible intento de phishing",
        nivelRiesgo: "alto",
        puntajeRiesgo: 90,
        imagen: "img/phishing.png"
    },
    {
        id: 2,
        nombre: "Enlace sospechoso",
        tipo: "url",
        descripcion: "URL que requiere verificacion",
        nivelRiesgo: "medio",
        puntajeRiesgo: 60,
        imagen: "img/enlace.png"
    },
    {
        id: 3,
        nombre: "Actividad inusual",
        tipo: "acceso",
        descripcion: "Acceso que requiere verificacion",
        nivelRiesgo: "bajo",
        puntajeRiesgo: 25,
        imagen: "img/actividad.png"
    },
    {
        id: 4,
        nombre: "Malware detectado",
        tipo: "malware",
        descripcion: "Archivo potencialmente malicioso",
        nivelRiesgo: "alto",
        puntajeRiesgo: 95,
        imagen: "img/malware.png"
    },
    {
        id: 5,
        nombre: "Intentos de acceso fallidos",
        tipo: "acceso",
        descripcion: "Autenticacion que requiere revision",
        nivelRiesgo: "medio",
        puntajeRiesgo: 55,
        imagen: "img/acceso-fallido.png"
    },
    {
        id: 6,
        nombre: "Transaccion sospechosa",
        tipo: "transaccion",
        descripcion: "Operacion financiera por revisar",
        nivelRiesgo: "alto",
        puntajeRiesgo: 85,
        imagen: "img/transaccion.png"
    }
];

function filtrarAlertas(lista, nivelRiesgo, tipo) {
    return lista.filter(function(alerta) {
        const coincideNivel = nivelRiesgo === "" || alerta.nivelRiesgo === nivelRiesgo;
        const coincideTipo = tipo === "" || alerta.tipo === tipo;

        return coincideNivel && coincideTipo;
    });
}

function calcularPuntajeTotal(lista) {
    return lista.reduce(function(total, alerta) {
        return total + alerta.puntajeRiesgo;
    }, 0);
}

function mostrarAlertas(lista) {
    const contenedorAlertas = document.querySelector("#alertas");

    contenedorAlertas.textContent = "";

    lista.forEach(function(alerta) {
        const tarjeta = document.createElement("article");
        tarjeta.setAttribute("class", "producto");
        tarjeta.setAttribute("data-nivel-riesgo", alerta.nivelRiesgo);
        tarjeta.setAttribute("data-tipo", alerta.tipo);

        const imagen = document.createElement("img");
        imagen.setAttribute("src", alerta.imagen);
        imagen.setAttribute("alt", alerta.nombre);

        const titulo = document.createElement("h2");
        titulo.textContent = alerta.nombre;

        const descripcion = document.createElement("p");
        descripcion.textContent = "Tipo: " + alerta.descripcion;

        const riesgo = document.createElement("p");
        riesgo.setAttribute("class", "nivel-riesgo");
        riesgo.textContent = "Riesgo " + alerta.nivelRiesgo;

        tarjeta.appendChild(imagen);
        tarjeta.appendChild(titulo);
        tarjeta.appendChild(descripcion);
        tarjeta.appendChild(riesgo);

        contenedorAlertas.appendChild(tarjeta);
    });
}

function aplicarFiltros() {
    const nivelRiesgo = document.querySelector("#filtro-riesgo").value;
    const tipo = document.querySelector("#filtro-tipo").value;

    const alertasFiltradas = filtrarAlertas(alertas, nivelRiesgo, tipo);

    const tarjetas = document.querySelectorAll("#alertas .producto");

    tarjetas.forEach(function(tarjeta) {
        const coincideNivel = nivelRiesgo === "" || tarjeta.dataset.nivelRiesgo === nivelRiesgo;
        const coincideTipo = tipo === "" || tarjeta.dataset.tipo === tipo;

        tarjeta.classList.toggle("oculto", !(coincideNivel && coincideTipo));
    });
}

function limpiarFiltros() {
    document.querySelector("#filtro-riesgo").value = "";
    document.querySelector("#filtro-tipo").value = "";

    aplicarFiltros();
}

mostrarAlertas(alertas);

document.querySelector("#filtro-riesgo").addEventListener("change", aplicarFiltros);
document.querySelector("#filtro-tipo").addEventListener("change", aplicarFiltros);
document.querySelector("#limpiar-filtros").addEventListener("click", limpiarFiltros);

const alertasAltoRiesgo = filtrarAlertas(alertas, "alto", "");
const alertasPhishing = filtrarAlertas(alertas, "", "phishing");
const puntajeTotal = calcularPuntajeTotal(alertas);

console.log("Sistema:", nombreSistema);
console.log("Todas las alertas:", alertas);
console.log("Alertas de riesgo alto:", alertasAltoRiesgo);
console.log("Alertas de phishing:", alertasPhishing);
console.log("Cantidad de alertas:", alertas.length);
console.log("Puntaje total de riesgo:", puntajeTotal);
