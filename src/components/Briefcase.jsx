import React from 'react';
import PropTypes from 'prop-types';
import '../styles/components/Briefcase.scss';

const Briefcase = ({ title, children }) => (
  <section id={title} className="briefcase">
    <p className="text--subtitle" style={{ padding: '0 0 16px' }}>{title}</p>
    <div className="briefcase">
      {children}
    </div>
  </section>
);

Briefcase.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default Briefcase;
