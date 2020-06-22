import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/styles/components/Card.scss'
import '../assets/styles/components/Badge.scss'

const Card = ({title, link, imageUrl, category}) => (
    <Link to={`/${category}/${title}`} className="card" style={{backgroundImage: `url(${imageUrl})`}} />
)

export default Card