import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/styles/components/Button.scss'

const Button = ({link}) => (
    <div className='button-container'>
        <a className='button' href={link} target='_blank'>Visitar sitio</a>
    </div>
)

export default Button