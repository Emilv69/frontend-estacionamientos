
// js/dashboard.js

document.addEventListener('DOMContentLoaded', () => {
  const totalEstacionamientos = 5;
  const reservasRecientes = 12;
  const gananciasTotales = 124000;

  document.getElementById('total-estacionamientos').textContent = totalEstacionamientos;
  document.getElementById('reservas-recientes').textContent = reservasRecientes;
  document.getElementById('ganancias-totales').textContent = `$${gananciasTotales.toLocaleString()}`;

  const ctx = document.getElementById('earningsChart').getContext('2d');
  const chart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
      datasets: [{
        label: 'Ganancias ($)',
        data: [15000, 20000, 18000, 22000, 25000, 24000],
        backgroundColor: 'rgba(54, 162, 235, 0.7)'
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
});
