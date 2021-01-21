import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../styles/components/Card.scss';

const Card = ({ category, card, loading }) => {
  if (loading) {
    return (
      <div className="card" />
    );
  }

  return (
    <Link
      // eslint-disable-next-line no-underscore-dangle
      to={`/${category}/${card._id}`}
      className="card"
      style={{ backgroundImage: `url(${card.imageUrl})` }}
    />
  );
};

Card.propTypes = {
  card: PropTypes.shape({
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
  }).isRequired,
  category: PropTypes.string.isRequired,
};

Card.propTypes = {
  category: PropTypes.string.isRequired,
  card: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
  }),
  loading: PropTypes.bool,
};

Card.defaultProps = {
  category: '',
  card: {},
  loading: false,
};

export default Card;
