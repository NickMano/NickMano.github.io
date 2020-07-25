import React from 'react'
import Header from '../components/Header'
import '../assets/styles/App.scss'
import SimpleMessage from '../components/SimpleMessage'

const WIP = () => {
    return(
        <>
            <Header hasLink/>
            <SimpleMessage message='🚗 Work in Progress...' />
        </>
)}

export default WIP