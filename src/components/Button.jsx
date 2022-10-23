import React from 'react';
import PropTypes from 'prop-types';
import '../styles/components/Button.scss';
import { useTheme } from '../hooks/useTheme';

const Button = ({ link }) => {
  const { mode } = useTheme()
  const textButton = 'See More';

  return (
    <div className="button-container">
      <a className={`button ${mode}`} href={link} target="_blank" rel="noreferrer">{textButton}</a>
    </div>
  );
};

Button.propTypes = {
  link: PropTypes.string.isRequired,
};

export default Button;
