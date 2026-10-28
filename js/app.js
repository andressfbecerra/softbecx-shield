
const nombreSistema = "SoftBecX Shield";

const alertas = [
    {
        id: 1,
        nombre: "Correo sospechoso",
        tipo: "phishing",
        nivelRiesgo: "alto",
        puntajeRiesgo: 90
    },
    {
        id: 2,
        nombre: "Enlace sospechoso",
        tipo: "url",
        nivelRiesgo: "medio",
        puntajeRiesgo: 60
    },
    {
        id: 3,
        nombre: "Actividad inusual",
        tipo: "acceso",
        nivelRiesgo: "bajo",
        puntajeRiesgo: 25
    },
    {
        id: 4,
        nombre: "Archivo sospechoso",
        tipo: "malware",
        nivelRiesgo: "alto",
        puntajeRiesgo: 95
    },
    {
        id: 5,
        nombre: "Transacción sospechosa",
        tipo: "transaccion",
        nivelRiesgo: "alto",
        puntajeRiesgo: 85
    }
];

function filtrarAlertas(lista, nivelRiesgo, tipo) {
    return lista.filter(function(alerta) {
        const coincideNivel =
            nivelRiesgo === "" ||
            alerta.nivelRiesgo === nivelRiesgo;

        const coincideTipo =
            tipo === "" ||
            alerta.tipo === tipo;

        return coincideNivel && coincideTipo;
    });
}

function calcularPuntajeTotal(lista) {
    return lista.reduce(function(total, alerta) {
        return total + alerta.puntajeRiesgo;
    }, 0);
}

const alertasAltoRiesgo = filtrarAlertas(
    alertas,
    "alto",
    ""
);

const alertasPhishing = filtrarAlertas(
    alertas,
    "",
    "phishing"
);

const puntajeTotal = calcularPuntajeTotal(alertas);

console.log("Sistema:", nombreSistema);
console.log("Todas las alertas:", alertas);
console.log("Alertas de riesgo alto:", alertasAltoRiesgo);
console.log("Alertas de phishing:", alertasPhishing);
console.log("Cantidad de alertas:", alertas.length);
console.log("Puntaje total de riesgo:", puntajeTotal);