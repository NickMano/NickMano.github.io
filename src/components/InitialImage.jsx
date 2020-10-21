import React from 'react'
import '../styles/components/InitialImage.scss'

const InitialImage = props => {
    const {url, isInitialImage} = props
    const classImage = isInitialImage ? 'initial-image' : 'collection-image'
    return(
        <section className='initial-image-container'>
            <img className={classImage} src={`${url}`} />
        </section>
    )
}

export default InitialImage