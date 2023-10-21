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

// Imagenes y precios (celulares, tablets, laptops)

let images = {  "Redmi Note 12 Pro": ["img/celulares/redmi12pro-1.jpg", "img/celulares/redmi12pro-2.jpg", "img/celulares/redmi12pro-3.jpg"],
                "Samsung Galaxy S21 FE": ["img/celulares/samsung-galaxy-S21.jpg", "img/celulares/samsung-galaxy-S21-2.jpg", "img/celulares/samsung-galaxy-S21-3.jpg"],
                "Huawei P50 Pro": ["img/celulares/HuaweiP50Pro-1.jpg", "img/celulares/HuaweiP50Pro-2.jpg","img/celulares/HuaweiP50Pro-3.jpg"],
                "iPhone 15 Pro": ["img/celulares/iphone15pro-1.jpg", "img/celulares/iphone15pro-2.jpg", "img/celulares/iphone15pro-3.jpg"],
                "Huawei Nova 10 Pro": ["img/celulares/huawei-nova10-pro.png", "img/celulares/huawei-nova10-pro-2.png", "img/celulares/huawei-nova10-pro-3.png"],
                "Motorola Razr 40 Ultra": ["img/celulares/motorola40ultra-1.png", "img/celulares/motorola40ultra-2.png", "img/celulares/motorola40ultra-3.png"],
                "Motorola Edge 40 Neo": ["img/celulares/motorolag84-1.png", "img/celulares/motorolag84-2.png", "img/celulares/motorolag84-3.png"],
                "Samsung Galaxy Z Flip5": ["img/celulares/galaxy-flip5-1.jpg", "img/celulares/galaxy-flip5-2.jpg", "img/celulares/galaxy-flip5-3.jpg"],
                "Samsung Galaxy S22 Ultra": ["img/celulares/galaxy-s22-ultra-1.jpg", "img/celulares/galaxy-s22-ultra-2.jpg", "img/celulares/galaxy-s22-ultra-3.jpg"],
            
                "Huawei MatePad SE": ["img/tablets/huawei-matepad-se-1.jpg", "img/tablets/huawei-matepad-se-2.jpg", "img/tablets/huawei-matepad-se-3.jpg"],
                "Huawei MatePad 11": ["img/tablets/huawei-matepad-11-1.jpg", "img/tablets/huawei-matepad-11-2.jpg", "img/tablets/huawei-matepad-11-3.jpg"],
                "Xiaomi Pad 5": ["img/tablets/xiaomi-pad5-1.jpeg", "img/tablets/xiaomi-pad5-2.jpeg", "img/tablets/xiaomi-pad5-3.jpeg"],
                "iPad Pro": ["img/tablets/ipad-pro-1.jpg", "img/tablets/ipad-pro-2.jpg", "img/tablets/ipad-pro-3.jpg"],
                "iPad Air": ["img/tablets/ipad-air-1.jpeg", "img/tablets/ipad-air-2.jpeg", "img/tablets/ipad-air-3.jpeg"],
                "Samsung Galaxy Tab S9": ["img/tablets/galaxy-tab-s9-1.jpg", "img/tablets/galaxy-tab-s9-2.jpg", "img/tablets/galaxy-tab-s9-3.jpg"],
                "Samsung Galaxy Tab A8": ["img/tablets/galaxy-tab-a8-1.jpg", "img/tablets/galaxy-tab-a8-2.jpg", "img/tablets/galaxy-tab-a8-3.jpg"], 
                "Lenovo P11": ["img/tablets/lenovo-p11-1.jpg", "img/tablets/lenovo-p11-2.jpg", "img/tablets/lenovo-p11-3.jpg"],
            
                "Razer Blade 17": ["img/computadores/razer-blade-17-1.jpg", "img/computadores/razer-blade-17-2.jpg", "img/computadores/razer-blade-17-3.jpg"],
                "Razer Blade 14": ["img/computadores/razer-blade-14-1.jpg", "img/computadores/razer-blade-14-2.jpg", "img/computadores/razer-blade-14-3.jpg"],
                "": [],
                "": [],
                "": [],
                "": [],
                "": [],
                "": [],
                "": [],
                "": []}

let precios = { "Redmi Note 12 Pro": '$ 3.256.000',
                "Samsung Galaxy S21 FE": '$ 2.599.920',
                "Huawei P50 Pro": '$ 2.900.000',
                "iPhone 15 Pro": '$ 4.343.000',
                "Huawei Nova 10 Pro": '$ 3.299.900',
                "Motorola Razr 40 Ultra": '$ 5.999.900',
                "Motorola Edge 40 Neo": '$ 3.560.000',
                "Samsung Galaxy Z Flip5": '$ 5.599.920',
                "Samsung Galaxy S22 Ultra": '$ 5.799.500',
            
                "Huawei MatePad SE": "$ 932.900",
                "Huawei MatePad 11": "$ 1.650.000",
                "Xiaomi Pad 5": "$ 4.567.000",
                "iPad Pro": "$ 6.899.000",
                "iPad Air": "$ 4.539.000",
                "Samsung Galaxy Tab S9": "$ 5.099.900",
                "Samsung Galaxy Tab A8": "$ 892.900",
                "Lenovo P11": "$ 1.899.000",
            
                "Razer Blade 17": "$ 8.465.000",
                "Razer Blade 14": "$ 7.614.000",
                "": "$ ",
                "": "$ ",
                "": "$ ",
                "": "$ ",
                "": "$ ",
                "": "$ ",
                "": "$ ",
                "": "$ "}

const imagenesProds = document.getElementsByClassName("img-slide");

for (let i=0; i<imagenesProds.length; i++) {
    imagenesProds[i].src = images[nombre][i];
}

const precioProd = document.getElementById("precio-prod");
precioProd.innerText = precios[nombre];