import {useEffect, useState} from 'react'

const useInitialState = (API) => {
    
    const [cards, setCards] = useState(null)
    useEffect( () => {
        fetch(API)
        .then( response => response.json())
        .then( data => setCards(data))
    }, []);
    if (cards != null) {
        if(cards.status.error == true) {return []}
        
        let courses = cards.userData.courses.sort((c1, c2) => { 
            if (!c1.career) c1.career = ''
            if (!c2.career) c2.career = ''
            return (c1.career).localeCompare(c2.career)
        })
        const URL = 'https://platzi.com'
        courses = courses.map( (course) => ({'id': course.id, 'title': course.title, 'badge': course.career, 'link':`${URL}${course.diploma_link}`, 'description': null, 'imageUrl': course.badge}));
        return courses
    }
    return []
}

export default useInitialState