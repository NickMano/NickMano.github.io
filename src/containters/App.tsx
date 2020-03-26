import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Portfoil from '../components/Portfoil'
import Card from '../components/Card'
import Footer from '../components/Footer'
import {setCertificates, setPortfoil} from '../modules.js';

import '../assets/styles/App.scss'

const APICertificates = ''

const App: React.FC = () => {

    return(
        <div className="App">
            <Header />
            <Hero />
            <Portfoil title='Portafolios ( y Proyectos Destacados)'>
                {setPortfoil().map( card => <Card key={card.title} {...card}/>)}
            </Portfoil>
            
            <Portfoil title='Certificados'>
                {/* {setCertificates()} */}
            </Portfoil>

            <Footer></Footer>
        </div>
)}

export default App