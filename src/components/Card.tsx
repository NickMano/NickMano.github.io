import React from 'react'
import '../assets/styles/components/Card.scss'
import '../assets/styles/components/Badge.scss'

const Card = ({title, badge, link, description, imageUrl}) => {
    const getMonthDiff = () => {
        const TM = new Date(2019, 9, 3)
        const today = new Date()
        let months = (today.getFullYear() - TM.getFullYear()) * 12
        months -= TM.getMonth();
        months += today.getMonth() + 1;
        return months;
    }

    return(
        <a className="card" href={link} 
        // style={{backgroundImage: `url(${imageUrl})`}}
        >
            <div className="card__details" >
                <h3 className="text--title">{title}</h3>
                <p className="text--subtitle">{badge}</p>
            </div>
        </a>
    )
}

export default Card