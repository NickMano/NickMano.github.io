const cards = [
    {
        "title": "Team Manager",
        "badge": "meses",
        "description": "Lidero proyectos y gestiono el trabajo dentro del equipo del proyecto, orientándolo hacia la satisfacción del cliente externo y la mejora continua del servicio ofrecido.",
        "imageUrl": "images/wolox.jpeg",
        "imageAlt": "Wolox" 
    },
    {
        "title": "JIRA to Sheet",
        "badge": "Python 3",
        "repo": "https://github.com/NickMano/JIRA-to-Sheet",
        "description": "Creacion y automatizacion de Metricas en Poyectos que utilizan Jira Software.",
        "imageUrl": "images/python.jpg",
        "imageAlt": "JIRA to Sheet" 
    },
    {
        "title": "PlatziVideo (En desarrollos)",
        "badge": "Web",
        "repo": "https://github.com/NickMano/platziVideo",
        "description": "Plataforma para mirar peliculas.",
        "imageUrl": "images/platziVideo.png",
        "imageAlt": "platziVideo" 
    },
    {
        "title": "Hangman Pokemon",
        "badge": "Python 3",
        "repo": "https://github.com/NickMano/Hangman-Pokemon",
        "description": "El juego del Ahorcado con los 151 pokemons de la primera generacion.",
        "imageUrl": "images/hangmanpkm.png",
        "imageAlt": "Pokeball" 
    },
    {
        "title": "The Legend of Nickest (En desarrollo)",
        "badge": "Unity 2D / RPG",
        "repo": "https://github.com/NickMano/The-Legend-Of-Nickest",
        "description": "Juego de plataforma, RPG y aventura. Inspirados en los juegos de Mario, Zelda y Metroid.",
        "imageUrl": "images/TLON.png",
        "imageAlt": "The Legend of Nickest" 
    },
    {
        "title": "Nickest Jump",
        "badge": "Unity 2D / Mobile",
        "repo": "https://github.com/NickMano/Nickest-Jump",
        "description": "Juego inspirado en el Dinosaurio de Chrome.",
        "imageUrl": "images/NickestJump.png",
        "imageAlt": "Nickest Jump Hero" 
    },
    {
        "title": "Simon Says",
        "badge": "Javascript",
        "repo": "https://github.com/NickMano/Simon",
        "description": "El famoso juego de la seguir la secuencia de colores en el navegador hecho con JavaScript.",
        "imageUrl": "images/simon.png",
        "imageAlt": "Simon Says Logo" 
    },
    {
        "title": "wBooks",
        "badge": "iOS",
        "repo": "https://github.com/NickMano/wBooks-ios",
        "description": "wBooks es una aplicación que gestiona reservas de libros.",
        "imageUrl": "images/wbooks.png",
        "imageAlt": "wBooks" 
    }
]
 
const setSection = (element, htmlClass, data) => {
    let comp = document.createElement(element)
    comp.classList.add(htmlClass)
    if (data) {
        comp.innerHTML = data
    }
    return comp
}

const setImage= (htmlClass, src, alt) => {
    let comp = document.createElement('img')
    comp.classList.add(htmlClass)
    comp.src = src
    if (alt) {
        comp.alt = alt
    }
    return comp
}

const setCard = (section, cardTitle, cardBadge, cardDescription, cardImageUrl, cardImageAlt, cardLink) => {
    let article = setSection('article', 'card')
    section.appendChild(article)
    
    let figure = setSection('figure', 'card__imageContainer')
    let img = setImage('card__imageContainer--image', cardImageUrl, cardImageAlt)
    article.appendChild(figure)
    figure.appendChild(img)

    let divDetails = setSection('div', 'card__details')
    article.appendChild(divDetails)
    
    let title = setSection('h3', 'card__title', `${cardTitle}`)
    divDetails.appendChild(title)

    if (cardBadge) {
        let badge = setSection('h4', 'badge-container', `<label class="badge">${cardBadge}</label>`)
        divDetails.appendChild(badge)
    }
    if (cardLink) {
        let link = setSection('p', 'card__link', `${cardLink}`)
        divDetails.appendChild(link)
    }
    if (cardDescription){
        let desc = setSection('p', 'project-description', `${cardDescription}`)
        divDetails.appendChild(desc)
    }
}

const getMonthDiff = () => {
    const TM = new Date(2019, 9, 3)
    const today = new Date()
    let months = (today.getFullYear() - TM.getFullYear()) * 12
    months -= TM.getMonth();
    months += today.getMonth() + 1;
    return months;
}

const setPortfoil = (section) => {
    cards.forEach( project => {
        setCard(
            section,
            project.title, 
            project.title == 'Team Manager' ? `<label class="badge">${getMonthDiff()} ${project.badge}</label>`: `<label class="badge">${project.badge}</label>`,
            project.description,
            project.imageUrl,
            project.imageAlt,
            project.repo ? `<strong>Source code: </strong><a target="_blank" class="link link--black" href="${project.repo}">GitHub</a>` : null)
    })
}

const getCertificates = async () => {
    try {
        const data = await fetch('https://platzi-user-api.jecsham.com/api/v1/getUserSummary/@NicoMano')
        return data.json()
    } catch(error) {
        return new Error(error)
    } 
}

const setCertificates = async (section) => {
    try {
        const data = await getCertificates()
        if(data.status.error == true) return console.error(`Error: ${data.status.code}`)
        
        const courses = data.userData.courses.sort((c1, c2) => { 
            if (!c1.career) c1.career = ''
            if (!c2.career) c2.career = ''
            return (c1.career).localeCompare(c2.career)
        })

        const URL = 'https://platzi.com'
        
        courses.forEach(course => {
            setCard(section,
                course.title,
                course.career ? `<label class="badge">${course.career}</label>`: null,
                null,
                course.badge,
                'Badge',
                `<strong>Ver diploma: </strong><a target="_blank" class="link link--black" href="${URL}${course.diploma_link}">Diploma</a>`)
        });

    } catch (error) {
        console.error(error)
    }
}

const sectionPortfoil = document.getElementById("prjt");
const sectionCertificates = document.getElementById("crtf");

setPortfoil(sectionPortfoil)
setCertificates(sectionCertificates)
