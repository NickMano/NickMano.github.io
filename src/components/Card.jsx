import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/components/Card.scss'

const Card = ({title, imageUrl, category}) => (
    <Link to={`/${category}/${title}`} className="card" style={{backgroundImage: `url(${imageUrl})`}} />
)

export default Card