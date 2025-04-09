  //BIENVENIDO
  if (document.getElementById('eliminarBtn')) {
    const mensajeDiv = document.getElementById('mensaje'); 
    const nombre = localStorage.getItem('nombreUsuario'); 
  
    if (nombre) {

      mensajeDiv.innerHTML = `<h4>Hola, <strong>${nombre}</strong>, bienvenido/a de nuevo</h4>`;
    } else {
      mensajeDiv.innerHTML = `<h5>Por favor ve al index e ingresa tu nombre.</h5>`;
    }
  
    
    document.getElementById('eliminarBtn').addEventListener('click', () => {
      localStorage.removeItem('nombreUsuario'); 
      location.reload();
    });
  }