import React from 'react';
import PropTypes from 'prop-types';
import '../styles/components/InitialImage.scss';

const InitialImage = (props) => {
  const { url, isInitialImage } = props;
  const classImage = isInitialImage ? 'initial-image' : 'collection-image';
  return (
    <section className="initial-image-container">
      <img className={classImage} src={`${url}`} alt={classImage} />
    </section>
  );
};

InitialImage.propTypes = {
  url: PropTypes.string.isRequired,
  isInitialImage: PropTypes.bool,
};

InitialImage.defaultProps = {
  isInitialImage: false,
};

export default InitialImage;
