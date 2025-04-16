document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("login-form");
  const mensaje = document.getElementById("mensaje");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!email || !password) {
      mensaje.textContent = "Por favor completa todos los campos.";
      mensaje.style.color = "red";
      return;
    }

    // Simulación de verificación de login
    if (email === "test@correo.com" && password === "1234") {
      mensaje.textContent = "¡Inicio de sesión exitoso!";
      mensaje.style.color = "green";
    } else {
      mensaje.textContent = "Credenciales incorrectas.";
      mensaje.style.color = "red";
    }
  });
});
