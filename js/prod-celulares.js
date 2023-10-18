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
