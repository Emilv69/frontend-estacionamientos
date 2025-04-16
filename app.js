document.addEventListener('DOMContentLoaded', () => {
    fetch('https://backend-estacionamientos.onrender.com/api/parkings')
        .then(response => response.json())
        .then(data => {
            const list = document.getElementById('parking-list');
            data.forEach(parking => {
                const card = document.createElement('div');
                card.className = 'parking-card';
                card.innerHTML = `
                    <strong>Dirección:</strong> ${parking.direccion}<br>
                    <strong>Número:</strong> ${parking.numero}<br>
                    <strong>Dueño:</strong> ${parking.dueno}<br>
                    <strong>Tarifa:</strong> $${parking.tarifa}<br>
                    <strong>Horario:</strong> ${parking.horario}<br>
                    <strong>Penalización:</strong> $${parking.penalizacion}
                `;
                list.appendChild(card);
            });
        })
        .catch(error => {
            console.error('Error al cargar estacionamientos:', error);
        });
});
