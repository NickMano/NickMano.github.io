const data = {
    "projets": [
        {
            "title": "Team Manager",
            "tech": "meses",
            "description": "Lidero proyectos y gestiono el trabajo dentro del equipo del proyecto, orientándolo hacia la satisfacción del cliente externo y la mejora continua del servicio ofrecido.",
            "imageUrl": "images/wolox.jpeg",
            "imageAlt": "Wolox" 
        },
        {
            "title": "JIRA to Sheet",
            "tech": "Python 3",
            "repo": "https://github.com/NickMano/JIRA-to-Sheet",
            "description": "Creacion y automatizacion de Metricas en Poyectos que utilizan Jira Software.",
            "imageUrl": "images/python.jpg",
            "imageAlt": "Python" 
        },
        {
            "title": "Hangman Pokemon",
            "tech": "Python 3",
            "repo": "https://github.com/NickMano/Hangman-Pokemon",
            "description": "El juego del Ahorcado con los 151 pokemons de la primera generacion.",
            "imageUrl": "images/hangmanpkm.png",
            "imageAlt": "Pokeball" 
        },
        {
            "title": "The Legend of Nickest (En desarrollo)",
            "tech": "Unity 2D / RPG",
            "repo": "https://github.com/NickMano/The-Legend-Of-Nickest",
            "description": "Juego de plataforma, RPG y aventura. Inspirados en los juegos de Mario, Zelda y Metroid",
            "imageUrl": "images/TLON.png",
            "imageAlt": "The Legend of Nickest" 
        },
        {
            "title": "Nickest Jump",
            "tech": "Unity 2D / Mobile",
            "repo": "https://github.com/NickMano/Nickest-Jump",
            "description": "Inspirado en el Dinausaurio de Chrome.",
            "imageUrl": "images/NickestJump.png",
            "imageAlt": "Nickest Jump Hero" 
        },
        {
            "title": "Simon Says",
            "tech": "Javascript",
            "repo": "https://github.com/NickMano/Simon",
            "description": "El famoso juego de la seguir la secuencia de colores en el navegador hecho con JavaScript.",
            "imageUrl": "images/simon.png",
            "imageAlt": "Simon Says Logo" 
        }
    ]
}

const section = document.getElementById("prjt");

const getMonthDiff = () => {
    const TM = new Date(2019, 9, 3)
    const today = new Date()
    let months = (today.getFullYear() - TM.getFullYear()) * 12
    months -= TM.getMonth();
    months += today.getMonth() + 1;
    return months <= 0 ? 0 : months;
} 

var max = data.projets.length
for (let i= 0; i < max; i++) {
    let item = data.projets[i]

    let article = setSection('article', 'portfoil-card')
    let divDetails = setSection('div', 'portfoil-card__details')
    let title = setSection('h3', 'project-title', `${item.title}`)
    let tech = setSection('h5', 'project-couser', `${item.tech}`)
    let desc = setSection('p', 'project-description', `${item.description}`)
    
    let figure = setSection('figure', 'portfoil-card__imageContainer')
    let img = setImage('portfoil-card__imageContainer--image', item.imageUrl, item.imageAlt)
    
    if(item.title == 'Team Manager') {
        tech = setSection('h5', 'project-couser', `${getMonthDiff()} ${item.tech}`)
    }

    section.appendChild(article)

    article.appendChild(figure)
    figure.appendChild(img)

    article.appendChild(divDetails)
    divDetails.appendChild(title)
    divDetails.appendChild(tech)
    if (item.repo) {
        let repo = setSection('p', 'project-url', `<strong>Puedes verlo en: </strong><a target="_blank" class="link link--black" href="${item.repo}">GitHub</a>`)
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