
document.addEventListener('DOMContentLoaded', function () {
    const totalReservas = 34;
    const gananciasTotales = 152000;

    document.getElementById('totalReservas').textContent = totalReservas;
    document.getElementById('gananciasTotales').textContent = gananciasTotales;

    const ctx = document.getElementById('graficoGanancias').getContext('2d');
    const grafico = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'],
            datasets: [{
                label: 'Ganancias Mensuales',
                data: [12000, 16000, 24000, 32000, 48000],
                backgroundColor: 'rgba(54, 162, 235, 0.6)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});
