import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../styles/components/Card.scss';

const Card = ({ category, card }) => (
  <Link
    to={`/${category}/${card._id}`}
    className="card"
    style={{ backgroundImage: `url(${card.imageUrl})` }}
  />
);

Card.propTypes = {
  card: PropTypes.shape({
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
  }).isRequired,
  category: PropTypes.string.isRequired,
};

export default Card;
