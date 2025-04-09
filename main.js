//INDEX
if (document.getElementById('guardarBtn')) {
    document.getElementById('guardarBtn').addEventListener('click', () => {
      const nombre = document.getElementById('nombre').value; 
  
      // Espacios
      if (nombre.trim() !== '') {
        localStorage.setItem('nombreUsuario', nombre); 
        window.location.href = 'welcome.html'; 
      } else {
        alert('Por favor ingresa un nombre.'); // Si hay algo vacio
      }
    });
  }
  
