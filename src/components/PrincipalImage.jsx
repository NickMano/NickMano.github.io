import React from 'react'
import '../assets/styles/components/PrincipalImage.scss'

const PrincipalImage = ({url}) => (
    <>
        <img className='principal-image' src={url} />
    </>
)


export default PrincipalImage