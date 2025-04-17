
document.addEventListener('DOMContentLoaded', () => {
    const historialBody = document.getElementById('historial-body');

    const reservas = [
        {
            direccion: "Av. Providencia 1234",
            fecha: "2025-04-10",
            inicio: "08:00",
            fin: "10:00",
            tarifa: "$2.000"
        },
        {
            direccion: "Los Leones 456",
            fecha: "2025-04-14",
            inicio: "13:00",
            fin: "15:00",
            tarifa: "$1.800"
        }
    ];

    reservas.forEach(reserva => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${reserva.direccion}</td>
            <td>${reserva.fecha}</td>
            <td>${reserva.inicio}</td>
            <td>${reserva.fin}</td>
            <td>${reserva.tarifa}</td>
        `;
        historialBody.appendChild(row);
    });
});
