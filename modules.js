import {cards} from "./cards.js";

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
    let article = setSection('a', 'card')
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
        article.href = cardLink
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
            project.link
            )
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
                `${URL}${course.diploma_link}`)
        });

    } catch (error) {
        console.error(error)
    }
}

export {setCertificates, setPortfoil}