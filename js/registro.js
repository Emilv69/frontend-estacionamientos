document.getElementById('register-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const nombre = document.getElementById('nombre').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const tipoUsuario = document.getElementById('tipo-usuario').value;

  if (!nombre || !email || !password || !tipoUsuario) {
    alert('Por favor completa todos los campos.');
    return;
  }

  // Simula registro exitoso
  alert(`¡Registro exitoso para ${nombre} como ${tipoUsuario}!`);
});
