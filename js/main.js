// Menu hamburguesa

function activarMenuH() {
    let paginas = document.getElementsByClassName("paginas")[0];

    if (paginas.style.display === "flex") {
        paginas.style.display = "none";
    } else {
        paginas.style.display = "flex";
    }

}

// Hover carrito

const cards = document.getElementsByClassName("card-producto");
const carritos = document.getElementsByClassName("little-car");

for (let i=0; i<cards.length; i++) {
    cards[i].addEventListener("mouseout",
                                (event) => {
                                    carritos[i].style.display = "none";
                                },
                                false,);

    cards[i].addEventListener("mouseover",
                                (event) => {
                                    carritos[i].style.display = "flex";
                                },
                                false,);
}

// Numero de productos en carrito

const textoCarrito = document.getElementById("cont-carrito");
let contadorProductos;

if (sessionStorage.getItem("contProductos")) {
    contadorProductos = Number(sessionStorage.getItem("contProductos"));
    textoCarrito.innerText = contadorProductos;
} else {
    contadorProductos = 0;
    textoCarrito.innerText = contadorProductos;
    sessionStorage.setItem("contProductos", contadorProductos);
}

function agregarCarrito() {
    contadorProductos = Number(sessionStorage.getItem("contProductos"));
    contadorProductos += 1;
    textoCarrito.innerText = contadorProductos;
    sessionStorage.setItem("contProductos", contadorProductos);
}

function borrarCarrito() {
    contadorProductos = 0;
    textoCarrito.innerText = contadorProductos;
    sessionStorage.setItem("contProductos", contadorProductos);
}

// Guardar nombre producto con sessionStorage

const botonesComprar = document.getElementsByClassName("btn-comprar-prod");
for (const element of botonesComprar) {
    element.addEventListener("onclick", guardarNombre);
}

function guardarNombre(id) {
    let nombreProducto = document.getElementById(id.slice(4)).innerText;
    sessionStorage.setItem("nombreProd", nombreProducto);
}

// Guardar nombre de usuario

const usuarioElemento = document.getElementById("nombre-usuario");
usuarioElemento.addEventListener("onclick", guardarUsuario);

if (sessionStorage.getItem("nombreUser")) {
    usuarioElemento.innerText = sessionStorage.getItem("nombreUser");
}

function guardarUsuario() {
    let name = prompt("Ingrese su nombre de usuario: ")
    sessionStorage.setItem("nombreUser", name)
    usuarioElemento.innerText = sessionStorage.getItem("nombreUser");
}

// Guardar tipo de producto para mostrar info en comprar-prod

const botonesInfo = document.getElementsByClassName("btn-info-prod");
for (const element of botonesInfo) {
    element.addEventListener("onclick", guardarTipoInfo);
}

function guardarTipoInfo(id) {
    let tipoProducto = id.slice(11, 14);
    sessionStorage.setItem("tipoProducto", tipoProducto);

    let nombreProducto = document.getElementById(id.slice(4)).innerText;
    sessionStorage.setItem("nombreProd", nombreProducto)
}