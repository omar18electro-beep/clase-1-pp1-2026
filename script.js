// Función para mostrar los lugares
function mostrarLugares() {
    document.getElementById("respuesta").innerHTML =
    "<b>📍 Lugares para visitar</b><br><br>" +
    "• Laguna Salada Grande.<br>" +
    "• Museo Tuyú Mapu.<br>" +
    "• Museo Histórico del Tuyú.<br>" +
    "• Parque Juan Anchorena.";
   
    alternarMenu(true);
}


// Función para mostrar las actividades
function mostrarActividades() {
    document.getElementById("respuesta").innerHTML =
    "<b>🎉 Actividades</b><br><br>" +
    "• Pescar en la Laguna Salada Grande.<br>" +
    "• Degustar vinos en Bodega Gamboa.<br>" +
    "• Ver fósiles en el Museo Tuyú Mapu.<br>" +
    "• Hacer un picnic en el Paseo Los Horcones.";
   
    alternarMenu(true);
}


// Función para mostrar la gastronomía
function mostrarGastronomia() {
    document.getElementById("respuesta").innerHTML =
    "<b>🍔 Gastronomía</b><br><br>" +
    "• ⁠Bodegón Los Ruau.<br>" +
    "• ⁠Las Mil Copas.<br>" +
    "• ⁠Parrilla El Recreo.<br>" +
    "• Bocata Café Restó.<br>" +
    "• La Italiana.";
   
    alternarMenu(true);
}


// Función para mostrar el alojamiento
function mostrarAlojamiento() {
    document.getElementById("respuesta").innerHTML =
    "<b>🏨 Alojamiento</b><br><br>" +
    "• ⁠Hotel San Carlos.<br>" +
    "• ⁠Hotel London.<br>" +
    "• Cabañas El Recreo.<br>" +
    "• Cabañas Chacra de los Sueños.";
   
    alternarMenu(true);
}


// Función para mostrar los eventos
function mostrarEventos() {
    document.getElementById("respuesta").innerHTML =
    "<b>📅 Eventos</b><br><br>" +
    "• ⁠Fiesta Nacional del Gaucho.<br>" +
    "• ⁠Fiesta del Talar.<br>" +
    "• Pasión Según San Juan.<br>" +
    "• Rally Pagos del Tuyú.";
   
    alternarMenu(true);
}


// Función para mostrar el contacto
function mostrarContacto() {
    document.getElementById("respuesta").innerHTML =
    "<b>📞 Contacto</b><br><br>" +
    "Oficina de Turismo<br>" +
    "Teléfono: (02267) 551058<br>" +
    "Whats App: (02267) 15419157<br>" +
    "Email: turismo@madariaga.gob.ar<br>" +
    "Dirección: Calle Arturo Illia y Av. Pellegrini.<br>" +
    "HORARIO DE ATENCIÓN:<br>" +
    "Lunes, mircoles, jueves y viernes de 8 a 18 hs<br>" +
    "Martes de 8 a 14 hs.<br>" +
    "Sábado, domingo y feriados de 10 a 18 hs<br>";


    alternarMenu(true);
}


// Función para volver al inicio
function volver() {
    document.getElementById("respuesta").innerHTML =
    "👋 Hola. ¿En qué puedo ayudarte?<br><br>Elegí una opción.";
   
    alternarMenu(false);
}


// Función auxiliar para simplificar el cambio de visibilidad
function alternarMenu(opcionElegida) {
    const menu = document.getElementById("menu");
    const botonVolver = document.getElementById("boton-volver");
   
    if (opcionElegida) {
        menu.style.display = "none";
        botonVolver.style.display = "block";
    } else {
        menu.style.display = "flex";
        botonVolver.style.display = "none";
    }
}
