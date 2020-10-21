import React from 'react'
import { connect } from 'react-redux'
import WIP from './WIP'
import Header from '../components/Header'
import PrincipalImage from '../components/PrincipalImage'
import InitialImage from '../components/InitialImage'
import Button from '../components/Button'
import '../styles/App.scss'

const ProjectDetail = props => {
    const category = props.match.params.category
    const projectName = props.match.params.name
    const projects = props.projects[props.match.params.category]
    let project
    let images = []
    let notFound

    try {
        project = projects.find( p => p.title == projectName) 
        images = project.images
        notFound = project === undefined || images === undefined
    } catch (error) {
        console.error("error", error)
        notFound = true
        images = []
    }

    return(
        notFound
        ? <WIP />
        : <>
            <Header hasLink={true} />
            <PrincipalImage url={project.hero} />
            <InitialImage url={project.initialImage} isInitialImage/>
            <h1 className='text--title'>{project.title}</h1>
            <h3 style={{textAlign: 'center'}} >{project.description}</h3>
            <hr className='divider' />
            {images.map(image => <InitialImage key={image} url={image}/> )}
            <Button link={project.link}/>
        </>    
    )
}

const mapStateToProps = state => {
    return {
        projects: state,
    }
}

export default connect(mapStateToProps, null)(ProjectDetail)