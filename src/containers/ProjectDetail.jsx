import React from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import WIP from './WIP';
import '../styles/components/PrincipalImage.scss';
import InitialImage from '../components/InitialImage';
import Button from '../components/Button';

const ProjectDetail = (props) => {
  const { projects } = props;
  const projectName = useParams().name;
  const category = projects[useParams().category];
  let project;
  let images = [];
  let notFound;

  try {
    project = category.find((p) => p.title === projectName);
    images = project.images;
    notFound = project === undefined || images === undefined;
  } catch (error) {
    notFound = true;
    images = [];
  }

  if (notFound) {
    return <WIP />;
  }

  return (
    <>
      <img className="principal-image" src={project.hero} alt="principal" />
      <h1 className="text--title">{project.title}</h1>
      <h3 style={{ textAlign: 'center' }}>{project.description}</h3>
      <hr className="divider" />
      {images.map((image) => <InitialImage key={image} url={image} />)}
      <Button link={project.link} />
    </>
  );
};

ProjectDetail.propTypes = {
  projects: PropTypes.objectOf(PropTypes.array).isRequired,
};

const mapStateToProps = (state) => ({
  projects: state,
});

export default connect(mapStateToProps, null)(ProjectDetail);
