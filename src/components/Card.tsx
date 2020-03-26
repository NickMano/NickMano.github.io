import React from 'react'
import '../assets/styles/components/Card.scss'
import '../assets/styles/components/Badge.scss'

const Card = ({title, badge, description, imageUrl}) => {
    return(
        <a className="card" href="https://github.com/NickMano/JIRA-to-Sheet">
            <figure className="card__imageContainer">
                <img className="card__imageContainer--image" src={imageUrl} alt={title} />
            </figure>
            <div className="card__details">
                <h3 className="card__title">{title}</h3>
                <h4 className="badge-container">
                    <label className="badge">
                        <label className="badge">
                            {badge}
                        </label>
                    </label>
                </h4>
                <p className="project-description">{description}</p>
            </div>
        </a>
    )
}

export default Card