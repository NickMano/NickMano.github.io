import React from 'react'
import '../assets/styles/components/PrincipalImage.scss'

const PrincipalImage = ({url}) => {
    const route = require.context('../assets/static', true);
    let image = route(`${url}`)
    return(
        <>
            <img className='principal-image' src={image} />
        </>
    )
}

export default PrincipalImage