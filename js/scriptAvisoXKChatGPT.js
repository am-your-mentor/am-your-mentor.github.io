function guardarInformacionPorUnaSemana() {
  const informacion = {
    datos: "La información que quieres guardar",
    expiracion: obtenerFechaDeExpiracion(7)
  };
  
  const informacionJSON = JSON.stringify(informacion);
  
  localStorage.setItem("claveUnica", informacionJSON);
}

function obtenerInformacionGuardada() {
  const informacionJSON = localStorage.getItem("claveUnica");
  
  if (!informacionJSON) return;
  
  const informacion = JSON.parse(informacionJSON);
  
  if (haExpirado(informacion.expiracion)) {
    eliminarInformacionGuardada();
  } else {
    mostrarInformacionGuardada(informacion.datos);
  }
}

function obtenerFechaDeExpiracion(dias) {
  const fechaActual = new Date();
  return new Date(fechaActual.getTime() + (dias * 24 * 60 * 60 * 1000)).getTime();
}

function haExpirado(fechaExpiracion) {
  const fechaActual = new Date();
  return fechaActual.getTime() > fechaExpiracion;
}

function eliminarInformacionGuardada() {
  localStorage.removeItem("claveUnica");
}

function mostrarInformacionGuardada(datos) {
  console.log("La información guardada es: " + datos);
}