
const alertas = [
    {
        id: 1,
        nombre: "Correo sospechoso",
        puntajeRiesgo: 90
    },
    {
        id: 2,
        nombre: "Enlace sospechoso",
        puntajeRiesgo: 60
    },
    {
        id: 3,
        nombre: "Actividad inusual",
        puntajeRiesgo: 25
    },
    {
        id: 4,
        nombre: "Archivo sospechoso",
        puntajeRiesgo: 95
    },
    {
        id: 5,
        nombre: "Transacción sospechosa",
        puntajeRiesgo: 85
    }
];

function clasificarRiesgo(puntaje) {
    if (puntaje >= 80) {
        return "Alto";
    } else if (puntaje >= 50) {
        return "Medio";
    } else {
        return "Bajo";
    }
}

function mostrarClasificacion(lista) {
    for (let i = 0; i < lista.length; i++) {
        const alerta = lista[i];
        const nivel = clasificarRiesgo(alerta.puntajeRiesgo);

        console.log(
            alerta.nombre + " - Riesgo: " + nivel
        );
    }
}

mostrarClasificacion(alertas);