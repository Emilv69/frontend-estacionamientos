
document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
    container.innerHTML = `
        <h1>Reservar Estacionamiento</h1>
        <form id="reservaForm">
            <label for="direccion">Dirección de destino:</label>
            <input type="text" id="direccion" name="direccion" required>

            <label for="fecha">Fecha:</label>
            <input type="date" id="fecha" name="fecha" required>

            <label for="horaInicio">Hora inicio:</label>
            <input type="time" id="horaInicio" name="horaInicio" required>

            <label for="horaFin">Hora fin:</label>
            <input type="time" id="horaFin" name="horaFin" required>

            <button type="submit">Buscar Estacionamientos</button>
        </form>
    `;
});
