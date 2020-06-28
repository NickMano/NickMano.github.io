import React from 'react'
import {Link} from "react-router-dom";
import '../assets/styles/components/Header.scss'

const Header = (hasHero) => (
    <header className="header">
      <figure className="logo">
        {(hasHero == true) &&
          <a href="#hero" className="link--header">Nicolas Manograsso</a>
        }
      </figure>
      <nav className="menu">
        <ol className="header__list">
          <li>
            <Link to="/" className="link--header">Works</Link>
          </li>
          <li>
            <Link to="/about" className="link--header">About</Link>
          </li>
          <li style={{display: `none`}}>
            <Link to="/culture" className="link--header">Culture</Link>
          </li>
          <li>
            <a className="link--header" target='_blank' href="https://github.com/NickMano/">Github</a>
          </li>
        </ol>
      </nav>
    </header>
) 

export default Header