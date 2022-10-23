import React from 'react';
import PropTypes from 'prop-types';
import '../styles/components/Briefcase.scss';
import { useTheme } from '../hooks/useTheme';

const Briefcase = ({ title, children }) => {
  const { mode } = useTheme()
  
  return(
    <section id={title} className={`briefcase ${mode}`}>
      <p className={`text--subtitle ${mode}`} style={{ padding: '0 0 16px' }}>{title}</p>
      <div className={`briefcase ${mode}`}>
        {children}
      </div>
    </section>
  )
};

Briefcase.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default Briefcase;
