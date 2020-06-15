import React from 'react';
import '../assets/styles/components/Portfoil.scss';

const Portfoil = ({title, children}) => (
    <section id={title} className="portfoil">
        <p className="text--subtitle" style={{padding: `0 0 16px`}}>{title}</p>
        <div className="portfoil">
            {children}
        </div>
    </section>
) 

export default Portfoil