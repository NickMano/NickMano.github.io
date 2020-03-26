import React from 'react';
import '../assets/styles/components/Portfoil.scss';

interface PortfoilProps {
    title: string,
    children: any
}

const Portfoil = ({title, children}:PortfoilProps) => (
    <section id="portfoil" className="portfoil">
      <h2 className="portfoil__title">{title}</h2>
      <div className="portfoil__container" id="prjt">
        {children}
      </div>
    </section>
) 

export default Portfoil