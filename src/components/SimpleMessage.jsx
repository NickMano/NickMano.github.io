import React from 'react';
import { useTheme } from '../hooks/useTheme';
import '../styles/components/SimpleMessage.scss';

const SimpleMessage = ({ message }) => {
  const { mode } = useTheme()

  return(
      <h1 className={`fullScreen ${mode}`}>{message}</h1>
  )
};

export default SimpleMessage;
