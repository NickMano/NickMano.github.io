import React from 'react';
import '../assets/styles/components/Portfoil.scss';

interface PortfoilProps {
    title: string,
    children: any
}

const Portfoil = ({children}:PortfoilProps) => (
    <section id="portfoil" className="portfoil">
        {children}
    </section>
) 

export default Portfoil