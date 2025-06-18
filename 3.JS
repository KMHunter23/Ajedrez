

function manejarClick(celda) {
  const fila = parseInt(celda.dataset.fila);
  const col = parseInt(celda.dataset.col);
  const contenido = celda.textContent;

  if (!piezaSeleccionada) {
    // Solo permitimos seleccionar peones blancos (♙)
    if (contenido === "♙") {
      piezaSeleccionada = celda;
      celda.style.outline = "3px solid yellow"; // marcar la celda
    }
  } else {
    // Intentamos mover el peón
    const filaOrigen = parseInt(piezaSeleccionada.dataset.fila);
    const colOrigen = parseInt(piezaSeleccionada.dataset.col);

    // Movimiento válido: 1 fila hacia arriba, misma columna, y destino vacío
    if (
      fila === filaOrigen - 1 &&
      col === colOrigen &&
      contenido === ""
    ) {
      // Hacer el movimiento
      celda.textContent = "♙";
      piezaSeleccionada.textContent = "";
    }

    // Limpiar selección (si se mueve o no)
    piezaSeleccionada.style.outline = "none";
    piezaSeleccionada = null;
  }
}




for (let fila = 0; fila < 8; fila++) {
  for (let col = 0; col < 8; col++) {
    const celda = document.createElement("div");

    // Resto del código...

    celda.addEventListener("click", () => manejarClick(celda));

    tablero.appendChild(celda);
  }
}
