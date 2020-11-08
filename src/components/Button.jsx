import React from 'react';
import '../styles/components/Button.scss';
import PropTypes from 'prop-types';

const Button = ({ link }) => {
  const textButton = 'See More';
  return (
    <div className="button-container">
      <a className="button" href={link} target="_blank" rel="noreferrer">{textButton}</a>
    </div>
  );
};

Button.propTypes = {
  link: PropTypes.string.isRequired,
};

export default Button;
