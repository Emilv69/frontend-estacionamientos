document.addEventListener("DOMContentLoaded", function () {
  const historial = [
    {
      direccion: "Av. Providencia 1234",
      fecha: "2025-04-10",
      horaInicio: "08:00",
      horaFin: "10:00",
      tarifa: "$2.000"
    },
    {
      direccion: "Los Leones 456",
      fecha: "2025-04-14",
      horaInicio: "13:00",
      horaFin: "15:00",
      tarifa: "$1.800"
    }
  ];

  const tbody = document.getElementById("historial-body");
  historial.forEach(item => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${item.direccion}</td>
      <td>${item.fecha}</td>
      <td>${item.horaInicio}</td>
      <td>${item.horaFin}</td>
      <td>${item.tarifa}</td>
    `;
    tbody.appendChild(row);
  });
});
