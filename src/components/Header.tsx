import React from 'react'
import '../assets/styles/components/Header.scss'

const Header = (hasHero) => (
    <header className="header">
      <figure className="logo">
        {(hasHero == true) &&
          <a href="#hero" className="link link--header">Nicolas Manograsso</a>
        }
      </figure>
      <nav className="menu">
        <ol className="header__list">
          <li>
            <a className="link link--header" href="#portfoil">Portafolio</a>
          </li>
          <li>
            <a className="link link--header" href="https://github.com/NickMano/">Github</a>
          </li>
        </ol>
      </nav>
    </header>
) 

export default Header