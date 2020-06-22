import React from 'react';
import '../assets/styles/App.scss';

const SimpleMessage = ({message}) => (
        <>
            <h1 className="fullScreen">{message}</h1>
        </>
)

export default SimpleMessage
