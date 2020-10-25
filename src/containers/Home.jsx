import React from 'react'
import { connect } from 'react-redux'
import Hero from '../components/Hero'
import Portfoil from '../components/Portfoil'
import Card from '../components/Card'

const Home = props => {
    const {websites, games, others} = props
    return(
        <>
            <Hero />
            <div id="portfoil">
                <Portfoil title='- 🖥 Websites -'>
                    {websites.map( card => <Card key={card.title} {...card} category='websites'/>)}
                </Portfoil>
                <Portfoil title='- 🕹 Games -'>
                    {games.map( card => <Card key={card.title} {...card} category='games'/>)}
                </Portfoil>
                <Portfoil title='- 📱 More -'>
                    {others.map( card => <Card key={card.title} {...card} category='others'/>)}
                </Portfoil>
            </div>
        </>
)}

const mapStateToProps = state => {
    return {
        websites: state.websites,
        games: state.games,
        others: state.others,
    }
}

export default connect(mapStateToProps, null)(Home)