function obtenerPersonas() {
    fetch("https://randomuser.me/api/?results=3")
    .then((results) => {
        return results.json();
    })
    .then((data) => {
        let infoPersons = data.results;
        let elementsHTMLInfo;
        let containers = document.getElementsByClassName("container-person");
        
        for (let i=0; i<infoPersons.length; i++) {
            let person = infoPersons[i];
            let fullName = person.name.first + " " + person.name.last;
            let email = person.email;
            let phone = person.phone;
            let location = person.location.city + ", " + person.location.state + " (" + person.location.country + ")" ;
            let image = person.picture.large;
            let id = person.id.name + ": " + person.id.value;

            elementsHTMLInfo = `
                                <div class="image-person imghvr-slide-down">
                                    <img src="${image}" alt="">
                                    <figcaption>
                                        <p>Identificación<br>${id}</p>
                                    </figcaption>
                                </div>
                                <div class="info-person">
                                    <h2 class="name-person${(i+1)}">${fullName}</h2>
                                    <p class="cargo-person${(i+1)}">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis sunt labore itaque, ipsum voluptatibus optio porro est placeat dolor aut.</p>
                                    <p class="email-person${(i+1)}"><i class="bi bi-envelope-at-fill"></i>${email}</p>
                                    <p class="phone-person${(i+1)}"><i class="bi bi-telephone-fill"></i>${phone}</p>
                                    <p class="location-person${(i+1)}"><i class="bi bi-geo-alt-fill"></i>${location}</p>
                                </div>
                                `;

            containers[i].innerHTML = elementsHTMLInfo;
        }
    })
    .catch(function (error) {
        console.log("Hubo un problema con la petición fetch a la API Random User:" + error.message);
    });
}

obtenerPersonas();