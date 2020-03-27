import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Portfoil from '../components/Portfoil'
import Card from '../components/Card'
import Footer from '../components/Footer'
import useInitialState from "../hooks/useInitialState.js";
import setPortfoil from '../modules.js';

import '../assets/styles/App.scss'

const APICertificates = 'https://platzi-user-api.jecsham.com/api/v1/getUserSummary/@NicoMano'

const App: React.FC = () => {


    return(
        <div className="App">
            <Header />
            <Hero />
            <Portfoil title='Proyectos Mas Destacados'>
                {setPortfoil().map( card => <Card key={card.title} {...card}/>)}
            </Portfoil>
            
            <Portfoil title='Certificados'>
                {    useInitialState(APICertificates).map( card => <Card key={card.id} {...card}/>) }

            </Portfoil>

            <Footer></Footer>
        </div>
)}

export default App