// Carrusel de imagenes con Splide

let splide = new Splide( '.splide', {
    type  : 'fade',
    rewind: true,
} );

splide.mount();


// Frases aleatorias sin repetir

let frases1 = [ "Batería al más alto nivel", 
                "Pura potencia, desde la instantánea hasta la edición", 
                "Resolución digna de sorprender",
                "Fotografía y juego ultra rápido",
                "Toma tus mejores selfies nocturnas",
                "Poca luz. Cámara. Acción",
                "Simplicidad inspirada",
                "Captura tus increíbles momentos con múltiples cámaras",
                "Graba videos increíbles con facilidad",
                "Brillante y claro, incluso a la luz del sol",
                "Sonido amplificado y enriquecido",
                "Duración de la batería de todo el día"
              ]

function getRandomInt() {
    return Math.floor(Math.random() * frases1.length);
}

const itemsList = document.getElementsByClassName("frases");
let indices = [];

for (const element of itemsList) {
    let indice = getRandomInt();
    
    while (indices.find((element) => element == indice) == indice) {
        indice = getRandomInt();
    }
    
    indices.push(indice);
    element.innerHTML = frases1[indice];
    
}
indices = [];


// Unidades producto

const unidades = document.getElementById("unidades-cel");
let contadorUnidades = 1;
unidades.innerText = contadorUnidades;
sessionStorage.setItem("contUnidades", contadorUnidades);

function aumentarUnidad() {
    contadorUnidades = Number(sessionStorage.getItem("contUnidades"));
    contadorUnidades += 1;
    unidades.innerText = contadorUnidades;
    sessionStorage.setItem("contUnidades", contadorUnidades);
}

function disminuirUnidad() {
    contadorUnidades = Number(sessionStorage.getItem("contUnidades"));
    if (contadorUnidades > 1) {
        contadorUnidades -= 1;
        unidades.innerText = contadorUnidades;
        sessionStorage.setItem("contUnidades", contadorUnidades);
    }
}


// Nombre del producto

const tituloProd = document.getElementById("nombre-producto");
let nombre;

if (sessionStorage.getItem("nombreProd")) {
    nombre = sessionStorage.getItem("nombreProd");
    tituloProd.innerText = nombre;
}

// Imagenes y precios celulares

let images = {"Redmi Note 12 Pro": ["img/redmi12pro-1.jpg", "img/redmi12pro-2.jpg", "img/redmi12pro-3.jpg"],
              "Samsung Galaxy S21 FE": ["img/samsung-galaxy-S21.jpg", "img/samsung-galaxy-S21-2.jpg", "img/samsung-galaxy-S21-3.jpg"],
              "Huawei P50 Pro": ["img/HuaweiP50Pro-1.jpg", "img/HuaweiP50Pro-2.jpg","img/HuaweiP50Pro-3.jpg"],
              "iPhone 15 Pro": ["img/iphone15pro-1.jpg", "img/iphone15pro-2.jpg", "img/iphone15pro-3.jpg"],
              "Huawei Nova 10 Pro": ["img/huawei-nova10-pro.png", "img/huawei-nova10-pro-2.png", "img/huawei-nova10-pro-3.png"],
              "Motorola Razr 40 Ultra": ["img/motorola40ultra-1.png", "img/motorola40ultra-2.png", "img/motorola40ultra-3.png"],
              "Motorola Edge 40 Neo": ["img/motorolag84-1.png", "img/motorolag84-2.png", "img/motorolag84-3.png"],
              "Samsung Galaxy Z Flip5": []}

let precios = { "Redmi Note 12 Pro": '',
                "Samsung Galaxy S21 FE": '$ 2.599.920',
                "Huawei P50 Pro": '$ 2.900.000',
                "iPhone 15 Pro": '',
                "Huawei Nova 10 Pro": '$ 3.299.900',
                "Motorola Razr 40 Ultra": '$ 5.999.900',
                "Motorola Edge 40 Neo": '$ 3.560.000',
                "Samsung Galaxy Z Flip5": '$ 5.599.920',
                "Samsung Galaxy S22 Ultra": }

const imagenesProds = document.getElementsByClassName("img-slide");

for (let i=0; i<imagenesProds.length; i++) {
    imagenesProds[i].src = images[nombre][i];
}

const precioProd = document.getElementById("precio-prod");
precioProd.innerText = precios[nombre];