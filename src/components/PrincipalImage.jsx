import React from 'react';
import '../styles/components/PrincipalImage.scss';

const PrincipalImage = ({ url }) => (
  <>
    <img className="principal-image" src={url} />
  </>
);

export default PrincipalImage;
