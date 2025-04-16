document.getElementById('registroForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const tipo = document.getElementById('tipo').value;
    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const contrasena = document.getElementById('contrasena').value;

    const data = { tipo, nombre, correo, contrasena };

    fetch('https://easyparking-backend.onrender.com/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (response.ok) {
            alert('Registro exitoso');
            window.location.href = 'login.html';
        } else {
            alert('Error en el registro');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Error en la conexión');
    });
});
