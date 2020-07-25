import React from 'react'
import Header from '../components/Header'
import '../assets/styles/App.scss'
import SimpleMessage from '../components/SimpleMessage'

const NotFound = () => {
    return(
        <>
            <Header hasLink />
            <SimpleMessage message='🤯 Page not found' />
        </>
)}

export default NotFound