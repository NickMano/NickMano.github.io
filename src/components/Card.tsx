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
        <a className="card" href={link}>
            <figure className="card__imageContainer">
                <img className="card__imageContainer--image" src={imageUrl} alt={title} />
            </figure>
            <div className="card__details">
                <h3 className="card__title">{title}</h3>
                { (badge != "") &&
                    <h4 className="badge-container">
                        <label className="badge">
                            <label className="badge">
                                {(title == 'Team Manager') ? `${getMonthDiff()} ${badge}` : badge}
                            </label>
                        </label>
                    </h4>
                }
                <p className="project-description">{description}</p>
            </div>
        </a>
    )
}

export default Card