import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../styles/components/Card.scss';

const Card = ({ title, imageUrl, category }) => (
  <Link to={`/${category}/${title}`} className="card" style={{ backgroundImage: `url(${imageUrl})` }} />
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Card;
