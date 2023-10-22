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

function getRandomInt(size) {
    return Math.floor(Math.random() * size);
}

const itemsList = document.getElementsByClassName("frases");
let indices = [];

for (const element of itemsList) {
    let indice = getRandomInt(frases1.length);
    
    while (indices.find((element) => element == indice) == indice) {
        indice = getRandomInt(frases1.length);
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
                "Asus Rog Strix G16": ["img/computadores/rog-strix-16-1.png", "img/computadores/rog-strix-16-2.png", "img/computadores/rog-strix-16-3.png"],
                "Asus ROG Zephyrus Duo 16": ["img/computadores/rog-zephyrus-duo16-1.png", "img/computadores/rog-zephyrus-duo16-2.png", "img/computadores/rog-zephyrus-duo16-3.png"],
                "Lenovo Legion 7": ["img/computadores/legion-7-1.jpg", "img/computadores/legion-7-2.jpg", "img/computadores/legion-7-3.jpg"],
                "Lenovo Legion Slim 5": ["img/computadores/legion-slim5-1.jpg", "img/computadores/legion-slim5-2.jpg", "img/computadores/legion-slim5-3.jpg"],
                "MSI Stealth 16 Mercedes-AMG": ["img/computadores/msi-stealth-1.png", "img/computadores/msi-stealth-2.png", "img/computadores/msi-stealth-3.png"],
                "MSI Vector GP78 HX 13V": ["img/computadores/vector-gp78-1.png", "img/computadores/vector-gp78-2.png", "img/computadores/vector-gp78-3.png"],
                "Acer Predator Triton 14": ["img/computadores/predator-triton-14-1.png", "img/computadores/predator-triton-14-2.png", "img/computadores/predator-triton-14-3.png"],
                "Acer Predator Helios Neo 16": ["img/computadores/helios-neo-16-1.png", "img/computadores/helios-neo-16-2.png", "img/computadores/helios-neo-16-3.png"],
                "Asus TUF Gaming A15": ["img/computadores/tuf-a15-1.png", "img/computadores/tuf-a15-2.png", "img/computadores/tuf-a15-3.png"]}

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
                "Asus Rog Strix G16": "$ 11.329.900",
                "Asus ROG Zephyrus Duo 16": "$ 12.999.000",
                "Lenovo Legion 7": "$ 14.999.900",
                "Lenovo Legion Slim 5": "$ 7.199.900",
                "MSI Stealth 16 Mercedes-AMG": "$ 15.350.027",
                "MSI Vector GP78 HX 13V": "$ 16.144.380",
                "Acer Predator Triton 14": "$ 6.726.825",
                "Acer Predator Helios Neo 16": "$ 6.951.052",
                "Asus TUF Gaming A15": "$ 5.869.900"}

const imagenesProds = document.getElementsByClassName("img-slide");

for (let i=0; i<imagenesProds.length; i++) {
    imagenesProds[i].src = images[nombre][i];
}

const precioProd = document.getElementById("precio-prod");
precioProd.innerText = precios[nombre];


// Caracteristicas aleatorias sin repetir

let caractsLaps = [ "<h3>Con Intel disfrutas de los mejores juegos en calidad de PC de escritorio</h3> <p>Con núcleos verdaderamente revolucionarios en rendimiento y eficiencia, los procesadores Intel Core de 12va generación son ideales para streaming, edición, juegos y grabaciones. Un máximo nivel de potencia cuando más lo necesitas.</p>",
                        "<h3>Rendimiento sin precedentes para gamers y creadores</h3> <p>Disfruta de un máximo nivel de rendimiento con lo último en GPU para laptops NVIDIA GeForce RTX 30 Series, especialmente pensadas para gamers y creadores con un nivel de potencia gráfica incomparable. La GPU incorpora un diseño delgado y liviano para gráficos sumamente realistas, con trazado de rayos, funciones y características de avanzada, y la potencia de IA.</p>",
                        "<h3>Desata tu fuerza interior con DDR5</h3> <p>Por fin, DDR5 está aquí. Lleva tu experiencia en juegos al máximo de lo posible con DDR4, que duplica el ancho de banda y aumenta tremendamente la fiabilidad de la velocidad de cuadro y la potencia del sistema. Explota al máximo la optimización en asignación de recursos y duración de batería.</p>",
                        "<h3>Audio realmente envolvente y revolucionario</h3> <p>Con su sonido envolvente 3D y sus características vibrantes, ricas y atractivas, Nahimic Audio mejora drásticamente tu experiencia de juego desde el inicio. También te permite comunicarte fuerte y claro con tus compañeros de equipo para disfrutar de la experiencia perfecta durante el juego. Además, te permite mezclar y compartir transmisión de audio como un profesional con facilidad.</p>",
                        "<h3>Olvida las esperas</h3> <p>A nadie le gusta perder el tiempo contemplando las pantalla de carga. Con PCIe 4.0 todo va más rápido. Carga una nueva misión, instala juegos, trabaja con proyectos grandes y mueve archivos pesados; PCIe 4.0 tiene ancho de banda de sobras para que tu equipo funcione a toda velocidad.</p>",
                        "<h3>Consigue más rendimiento con MUX</h3> <p>Los componentes de primer nivel requieren potencia, especialmente las gráficas de última generación. Este año hemos aumentado el TGP máximo de la GPU NVIDIA GeForce RTX 3080 para portátiles hasta un total de 150W. Obtén el mejor rendimiento de la gráfica y optimiza tu experiencia de juego.</p>",
                        "<h3>Enfría tu PC con metal líquido</h3> <p>La refrigeración es uno de los principales retos a los que se enfrentan los portátiles de gaming, y un campo en el que ROG innova continuamente. Este impulso nos ha levado al metal líquido, un material extremadamente eficaz en la transferencia de energía térmica entre superficies. Reducir la temperatura ayuda a mantener frecuencias más altas y evita que los ventiladores hagan más ruido del necesario.</p>",
                        "<h3>Los nuevos ventiladores Arc Flow mueven más aire y hacen menos ruido</h3> <p>Los nuevos ventiladores Arc Flow tienen unas aspas curvadas que optimizan el flujo de aire y hacen menos ruido. Su grosor variable reduce las turbulencias cuando el ventilador acelera el aire con la fuerza centrífuga y proporciona una experiencia general más silenciosa.</p>",
                        "<h3>NVIDIA DLSS 3</h3> <p>Con la tecnología de los nuevos Tensor Cores de cuarta generación y el acelerador de flujo óptico de las GPU GeForce RTX Serie 40, DLSS 3 utiliza la IA para crear fotogramas adicionales de alta calidad.</p>",
                        "<h3>Trazado de rayos</h3> <p>La arquitectura de Ada da rienda suelta a todo el esplendor del trazado de rayos, simulando cómo se comporta la luz en el mundo real. Experimenta mundos virtuales increíblemente detallados como nunca antes.</p>",
                        "<h3>Enfriamiento perfeccionado</h3> <p>Incluye solo la mejor refrigeración de última generación para que pueda llevar el rendimiento a su máximo potencial. Doble hoja de 89, enfriamiento liquido y optimización del flujo de aire.</p>",
                        "<h3>¿Qué hay en tu teclado?</h3> <p>Haz que tu portátil brille con la tecla por tecla1 Retroiluminación RGB, utilice la tecla de acceso rápido de modo para adaptarse a su situación (tiempo para estar en silencio o tiempo para jugar), abra PredatorSense con un solo clic de una tecla.</p>",
                        "<h3>Sistema de sonido a otro nivel</h3> <p>El Stealth 17 Studio A13V viene con un sistema de sonido envolvente de 6 altavoces con Dynaudio de clase mundial. Equipado con dos pares de altavoces duales con cancelación de fuerza y un par de tweeters para cumplir con las más altas expectativas acústicas.</p>",
                        "<h3>Hercios de competición</h3> <p>Las pantallas rápidas son fundamentales para los juegos competitivos, ya que suavizan las animaciones y facilitan el seguimiento de los enemigos. La Strix G te ayuda no perder de vista el objetivo. Algunos modelos tienen un tiempo de respuesta de 3ms y son compatibles con Dolby Vision HDR para ofrecerte un contraste y una calidad de imagen excepcionales.</p>",
                        "<h3>Golpea con precisión</h3> <p>La tecnología Overstroke mejora la capacidad de respuesta de las teclas cuando trabajas y juegas. Diseñado pensando en los gamers, el teclado cuenta con teclas de función agrupadas que facilitan su identificación y atajos para acceder rápidamente a las acciones más importantes. Los cursores de gran tamaño ofrecen un control más preciso mientras juegas, el gran touchpad facilita la interacción con todas las aplicaciones y la iluminación RGB por tecla te permite personalizar cada tecla con millones de colores.</p>",
                        "<h3>Batería de día a noche</h3> <p>La capacidad de la batería de 99,9 Whr está repleta hasta el límite legal de vuelo. Úselo en cualquier lugar con un tiempo de ejecución más largo.</p>",
                        "<h3>Mejore la experiencia de usuario</h3> <p>Admite USB tipo C, transferencia de datos de alta velocidad, carga PD y se conecta a varios dispositivos simultáneamente. Thunderbolt™ 4 lleva tu experiencia al siguiente nivel.</p>",
                        "<h3>Experiencia Wireless extraordinaria</h3> <p>El último Wi-Fi 6E ofrece una velocidad asombrosa a la vez que mantiene la red fluida y estable incluso cuando se comparte la red con numerosos usuarios.</p>",
                        "<h3>Pantalla mini led 4K 144Hz</h3> <p>Con una resolución ultra alta, la pantalla Mini LED 4K lleva el realismo y los detalles al siguiente nivel. Los colores de alto contraste ofrecen el negro más oscuro y los blancos más brillantes. 1000 NITS proporciona colores más brillantes con precisión en habitaciones con poca luz y uso en exteriores. El nivel más alto de DisplayHDR 1000 proporciona más visibilidad en la gama de colores. Y además de todo eso, una frecuencia de actualización de 144 Hz para un tiempo de respuesta más rápido en el juego.</p>"
                      ]

if (sessionStorage.getItem("tipoProducto")) {
    let tipoProducto = sessionStorage.getItem("tipoProducto");
    const elementsCarac = document.getElementsByClassName("caract");

    switch (tipoProducto) {
        case "lap":
            let indices = [];
            for (const element of elementsCarac) {
                let indice = getRandomInt(caractsLaps.length);
                while (indices.find((element) => element == indice) == indice) {
                    indice = getRandomInt(caractsLaps.length);
                }
                indices.push(indice);
                element.innerHTML = caractsLaps[indice];
            }
            break;

        case "tab":
            break;

        case "cel":
            break;
    }

}