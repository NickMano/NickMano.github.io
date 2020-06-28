import React from 'react'
import '../assets/styles/components/InitialImage.scss'

const InitialImage = props => {
    const {url, isInitialImage} = props
    const classImage = isInitialImage ? 'initial-image' : 'collection-image'
    const route = require.context('../assets/static', true);
    let image = route(`${url}`)
    return(
        <section className='initial-image-container'>
            <img className={classImage} src={image} />
        </section>
    )
}

export default InitialImage