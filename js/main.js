function activarMenuH() {

    let paginas = document.getElementsByClassName("paginas")[0];

    if (paginas.style.display === "flex") {
        paginas.style.display = "none";
    } else {
        paginas.style.display = "flex";
    }

}