const data = {
    "projets": [
        {
            "title": "Team Manager",
            "tech": "En Wolox",
            "date": "03/09/2019",
            "repo": "https://github.com/NickMano/NickMano.github.io",
            "description": "Lidero proyectos y gestiono el trabajo dentro del equipo del proyecto, orientándolo hacia la satisfacción del cliente externo y la mejora continua del servicio ofrecido.",
            "imageUrl": "images/wolox.jpeg",
            "imageAlt": "Wolox" 
        },
        {
            "title": "The Legend of Nickest (En desarrollo)",
            "tech": "Unity 2D / RPG",
            "date": "13/08/2018",
            "repo": "https://github.com/NickMano/The-Legend-Of-Nickest",
            "description": "Debemos ayudar a Nickest a devolver la paz de su mundo encontrando distintos artefactos misticos que se encuentran dispersados en los templos sagrados.",
            "imageUrl": "images/TLON.png",
            "imageAlt": "The Legend of Nickest" 
        },
        {
            "title": "Hangman Pokemon",
            "tech": "Python 3",
            "date": "16/11/2018",
            "repo": "https://github.com/NickMano/Hangman-Pokemon",
            "description": "El juego del Ahorcado con los 151 pokemons de la primera generacion. Debemos descubrir el nombre del pokemon oculto que es elegido de manera aleatoria a travez de una API.",
            "imageUrl": "images/hangmanpkm.png",
            "imageAlt": "Pokeball" 
        },
        {
            "title": "Nickest Jump",
            "tech": "Unity 2D / Mobile",
            "date": "01/06/2018",
            "repo": "https://github.com/NickMano/Nickest-Jump",
            "description": "Inspirado en el Dinausaurio de Chrome. <br/> Probando interaccion con el usuario, guardado de puntos localmente y generacion de enemigos.",
            "imageUrl": "images/NickestJump.png",
            "imageAlt": "Nickest Jump Hero" 
        },
        {
            "title": "JIRA to Sheet",
            "tech": "Python 3",
            "date": "13/12/2019",
            "repo": "https://github.com/NickMano/JIRA-to-Sheet",
            "description": "Creacion y automatizacion de Metricas en Poyectos que utilizan Jira Software.<br/>Usando como soprte Google Sheet podemos ver el estado de las funcionalidades, los cambios de estado que ocurrió, cuanto tiempo estuvo en cada uno y cuantos retrabajos realizo el equipo",
            "imageUrl": "images/python.jpg",
            "imageAlt": "Python" 
        },
        {
            "title": "Simon Says",
            "tech": "Javascript",
            "date": "01/08/2019",
            "repo": "https://github.com/NickMano/Simon",
            "description": "El famoso juego de la seguir la secuencia de colores en el navegador hecho con JavaScript.",
            "imageUrl": "images/simon.png",
            "imageAlt": "Simon Says Logo" 
        },
        {
            "title": "Este sitio",
            "tech": "HTML / CSS / JS",
            "date": "20/08/2019",
            "repo": "https://github.com/Nick-m96/Nick-m96.github.io",
            "description": "Proyecto hecho desde cero para practicar y mostrar los proyectos mas relevantes.",
            "imageUrl": "images/photo.png",
            "imageAlt": "Este Sitio" 
        }
    ]
}

const section = document.getElementById("prjt");

var max = data.projets.length
for (let i= 0; i < max; i++) {
    let item = data.projets[i]

    let article = setSection('article', 'portfoil-card')
    let divDetails = setSection('div', 'portfoil-card__details')
    let title = setSection('h3', 'project-title', `${item.title}`)
    let tech = setSection('h5', 'project-couser', `${item.tech}`)
    let date = setSection('p', 'project-date', `<strong>Fecha: </strong>${item.date}`)
    let desc = setSection('p', 'project-description', `${item.description}`)
    
    let figure = setSection('figure', 'portfoil-card__imageContainer')
    let img = setImage('portfoil-card__imageContainer--image', item.imageUrl, item.imageAlt)
    
    section.appendChild(article)

    article.appendChild(figure)
    figure.appendChild(img)

    article.appendChild(divDetails)
    divDetails.appendChild(title)
    divDetails.appendChild(tech)
    divDetails.appendChild(date)
    if (item.tech != 'En Wolox') {
        let repo = setSection('p', 'project-url', `<strong>Puedes verlo en: </strong><a target="_blank" href="${item.repo}">GitHub</a>`)
        divDetails.appendChild(repo)
    }
    divDetails.appendChild(desc)
}

function setSection(element, htmlClass, data) {
    let comp = document.createElement(element)
    comp.classList.add(htmlClass)
    if (data) {
        comp.innerHTML = data
    }
    return comp
}

function setImage(htmlClass, src, alt) {
    let comp = document.createElement('img')
    comp.classList.add(htmlClass)
    comp.src = src
    if (alt) {
        comp.alt = alt
    }
    return comp
}