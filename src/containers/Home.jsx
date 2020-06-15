import React from 'react'
import { connect } from 'react-redux'
import Hero from '../components/Hero'
import Portfoil from '../components/Portfoil'
import Card from '../components/Card'
import '../assets/styles/App.scss'

const Home = props => {
    const {websites, games, apps, tools} = props
    return(
        <>
            <Hero />
            <div id="portfoil">
                <Portfoil title='- 🖥 Websites -'>
                    {websites.map( card => <Card key={card.title} {...card}/>)}
                </Portfoil>
                <Portfoil title='- 🕹 Games -'>
                    {games.map( card => <Card key={card.title} {...card}/>)}
                </Portfoil>
                <Portfoil title='- 📱 Apps -'>
                    {apps.map( card => <Card key={card.title} {...card}/>)}
                </Portfoil>
                <Portfoil title='- 🛠 Tools -'>
                    {tools.map( card => <Card key={card.title} {...card}/>)}
                </Portfoil>
            </div>
        </>
)}

const mapStateToProps = state => {
    return {
        websites: state.websites,
        games: state.games,
        apps: state.apps,
        tools: state.tools,
    }
}

export default connect(mapStateToProps, null)(Home)