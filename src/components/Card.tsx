import React from 'react'
import '../assets/styles/components/Card.scss'
import '../assets/styles/components/Badge.scss'

const Card = ({link, imageUrl}) => {
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
        style={{backgroundImage: `url(${imageUrl})`}}
        />
    )
}

export default Card