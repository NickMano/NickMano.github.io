import React from 'react';
import { useTheme } from '../hooks/useTheme';
import '../styles/components/Footer.scss';

const Footer = () => {
  const { mode } = useTheme()

  return(
    <footer className={`footer ${mode}`}>
      <hr />
      <h2 className={ mode }>
        Interested in working together?
        <br />
        Contact me at
        <a 
          className={`link--footer ${mode}`} 
          href='https://www.linkedin.com/in/nicolas-manograsso/'>
            LinkedIn
        </a>
      </h2 >
    </footer>
  )
}

export default Footer;
