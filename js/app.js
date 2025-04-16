// Función base para cargar datos de estacionamientos
fetch('https://backend-estacionamientos.onrender.com/api/parkings')
    .then(res => res.json())
    .then(data => {
        const cont = document.getElementById('parking-container');
        if (cont) cont.innerHTML = data.map(p => `<p>${p.direccion} - $${p.tarifa}</p>`).join('');
    });