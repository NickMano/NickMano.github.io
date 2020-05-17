import React from 'react'
import { connect } from 'react-redux'
import Hero from '../components/Hero'
import Portfoil from '../components/Portfoil'
import Card from '../components/Card'
import '../assets/styles/App.scss'

const Home = props => {
    const {projects} = props
    return(
        <>
            <Hero />
            <Portfoil title='Projects'>
                {projects.map( card => <Card key={card.title} {...card}/>)}
            </Portfoil>
        </>
)}

const mapStateToProps = state => {
    return {
        projects: state.projects
    }
}

export default connect(mapStateToProps, null)(Home)