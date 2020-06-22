import React from 'react'
import { connect } from 'react-redux'
import '../assets/styles/App.scss'
import NotFound from './NotFound'

const ProjectDetail = props => {
    const category = props.match.params.category
    const projectName = props.match.params.name
    const projects = props.projects[props.match.params.category]
    let notFound = false
    let project
    if (projects === undefined) {
        notFound = true
    } else {
        project = projects.find( p => p.title == projectName)
    }
    
    console.log("project", project)

    return(
        notFound
        ? <NotFound />
        : <>
            <img className="hero" src={project.hero} />
        </>    
    )
}

const mapStateToProps = state => {
    return {
        projects: state,
    }
}

export default connect(mapStateToProps, null)(ProjectDetail)