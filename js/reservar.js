
document.getElementById("reservaForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const direccion = document.getElementById("direccionDestino").value;
    const fecha = document.getElementById("fecha").value;
    const horaInicio = document.getElementById("horaInicio").value;
    const horaFin = document.getElementById("horaFin").value;

    const resultados = document.getElementById("resultados");
    resultados.innerHTML = `
        <h3>Resultados:</h3>
        <p>Buscando estacionamientos cerca de <strong>${direccion}</strong> para el <strong>${fecha}</strong> desde <strong>${horaInicio}</strong> hasta <strong>${horaFin}</strong>.</p>
        <p>Ejemplo: Estacionamiento en Av. Providencia 1234 - Tarifa: $2000</p>
    `;
});
