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

const cards = document.getElementsByClassName("card-celular");
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