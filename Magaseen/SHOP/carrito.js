let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const listaCarrito = document.getElementById("listaCarrito");
const totalCarrito = document.getElementById("total");
const contador = document.getElementById("contador");

// Abrir / cerrar carrito
document.getElementById("btnCarrito").addEventListener("click", () => {
  document.getElementById("carrito").classList.toggle("abierto");
});

// Agregar producto
function agregarCarrito(id, nombre, precio) {
  let existe = carrito.find(p => p.id === id);

  if (existe) {
    existe.cantidad++;
  } else {
    carrito.push({ id, nombre, precio, cantidad: 1 });
  }

  guardar();
  actualizar();
}

// Eliminar producto
function eliminar(id) {
  carrito = carrito.filter(p => p.id !== id);
  guardar();
  actualizar();
}

// Actualizar interfaz
function actualizar() {
  listaCarrito.innerHTML = "";
  let total = 0;
  let cantidadTotal = 0;

  carrito.forEach(p => {
    const li = document.createElement("li");
    li.innerHTML = `${p.nombre} x${p.cantidad} - $${p.precio * p.cantidad}
    <button onclick="eliminar('${p.id}')">❌</button>`;
    listaCarrito.appendChild(li);

    total += p.precio * p.cantidad;
    cantidadTotal += p.cantidad;
  });

  totalCarrito.textContent = total;
  contador.textContent = cantidadTotal;
}

// Guardar carrito
function guardar() {
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

// Mostrar datos guardados
actualizar();

const btnCarrito = document.getElementById("btnCarrito");
const cerrarCarrito = document.getElementById("cerrarCarrito");
const divCarrito = document.getElementById("carrito");

// Abrir carrito
btnCarrito.addEventListener("click", () => {
  divCarrito.classList.add("abierto");
});

// Cerrar carrito
cerrarCarrito.addEventListener("click", () => {
  divCarrito.classList.remove("abierto");
});
