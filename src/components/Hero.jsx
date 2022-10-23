import React from 'react';
import { useTheme } from '../hooks/useTheme';
import '../styles/components/Hero.scss';

const Hero = () => {
  const { mode } = useTheme()

  return(
    <section id="hero" className={`hero ${mode}`}>
      <div className="hero-container">
        <h1 className={`text--title ${mode}`}>🎧 Nicolas Manograsso</h1>
        <h1 className={`text--subtitle ${mode}`}>Mobile Engineering Manager</h1>
      </div>
    </section>
  )
}

export default Hero;

