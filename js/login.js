
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    fetch('https://backend-estacionamientos.onrender.com/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ correo: email, contrasena: password })
    })
    .then(response => response.json())
    .then(data => {
        const message = document.getElementById('loginMessage');
        if (data.token) {
            message.textContent = 'Login exitoso.';
            message.style.color = 'green';
        } else {
            message.textContent = 'Credenciales inválidas.';
            message.style.color = 'red';
        }
    })
    .catch(error => {
        document.getElementById('loginMessage').textContent = 'Error al conectar con el servidor.';
        console.error('Error:', error);
    });
});
