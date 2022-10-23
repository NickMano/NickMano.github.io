import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme'
import WIP from './WIP';
import NotFound from './NotFound';
import '../styles/containers/ProjectDetail.scss';
import '../styles/components/PrincipalImage.scss';
import InitialImage from '../components/InitialImage';
import Button from '../components/Button';

const getProjectById = async (id) => {
  const res = await fetch(`https://fathomless-plateau-37162.herokuapp.com/api/projects/${id}`)
  const data = await res.json()
  const project = data.data
  return project
}

const ProjectDetail = () => {
  const projectId = useParams().name;
  const [project, setProject] = useState({})
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const { mode } = useTheme()

  useEffect(() => {
    setLoading(true)
    getProjectById(projectId)
    .then(data => {
      setLoading(false)
      
      if(Object.entries(data).length === 0 || !data) {
        setError(true)
        console.log('error');
      } else {
        setProject(data)
      }
    })
    
  }, [])

  if (error) {
    return <NotFound />;
  }

  if (project.inProgress === true) {
    return <WIP />
  }

  return (
    <div className={`project-detail ${mode}`}>
      <img className={`principal-image ${mode}`} src={project.hero} alt="principal" />
      <h1 className={`text--title ${mode}`}>{project.title}</h1>
      <h3 className={`text--subtitle ${mode}`}>{project.description}</h3>
      <hr className="divider" />
      {project?.images?.map((image) => <InitialImage key={image} url={image} />)}
      <Button link={project.link} />
    </div>
  );
};

export default ProjectDetail;
