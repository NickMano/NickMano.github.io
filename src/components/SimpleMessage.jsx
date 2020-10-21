import React from 'react';
import '../styles/components/SimpleMessage.scss';

const SimpleMessage = ({message}) => (
        <>
            <h1 className="fullScreen">{message}</h1>
        </>
)

export default SimpleMessage
