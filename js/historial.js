
document.addEventListener("DOMContentLoaded", function () {
    const historialContainer = document.getElementById("historial-container");

    // Simulación de datos de historial
    const historial = [
        { fecha: "2024-04-01", direccion: "Av. Providencia 1234", tarifa: 2000 },
        { fecha: "2024-04-10", direccion: "Los Leones 456", tarifa: 1800 }
    ];

    if (historial.length === 0) {
        historialContainer.innerHTML = "<p>No hay reservas registradas.</p>";
    } else {
        const lista = document.createElement("ul");
        historial.forEach(item => {
            const li = document.createElement("li");
            li.textContent = `Fecha: ${item.fecha}, Dirección: ${item.direccion}, Tarifa: $${item.tarifa}`;
            lista.appendChild(li);
        });
        historialContainer.appendChild(lista);
    }
});
