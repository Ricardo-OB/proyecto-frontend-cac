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
const cardsHome = document.getElementsByClassName("card-producto-home");
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

for (let i=0; i<cardsHome.length; i++) {
    cardsHome[i].addEventListener("mouseout",
                                (event) => {
                                    carritos[i].style.display = "none";
                                },
                                false,);

    cardsHome[i].addEventListener("mouseover",
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

// Validar formulario contacto

function validarFormulario() {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let email = document.getElementById("email").value;
    let celular = document.getElementById("celular").value;
    let direccion = document.getElementById("direccion").value;
    let descripcion = document.getElementById("descripcion").value;

    if (nombre === "" || apellido === "" || email === "" || celular === "" || direccion === "" || descripcion === "") {
        alert("Por favor, complete todos los campos del formulario.");
        return false;
    }

    let regexNombre = /^[A-Za-z\s]+$/;
    if (!regexNombre.test(nombre) || !regexNombre.test(apellido)) {
        alert("Los campos 'Nombre' y/o 'Apellido' solo pueden contener caracteres alfabéticos y espacios.");
        return false;
    }

    let regexEmail = /^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    if (!regexEmail.test(email)) {
        alert("Por favor, ingrese un correo electrónico válido.");
        return false;
    }

    let regexCelular = /^\+?[0-9]+$/;
    if (!regexCelular.test(celular)) {
        alert("El campo 'Celular' solo puede contener dígitos y un signo de más opcional al principio.");
        return false;
    }

    alert("Formulario enviado correctamente.");
    return true;

}
