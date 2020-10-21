import React from 'react'
import {Link} from "react-router-dom";
import '../styles/components/Header.scss'

const Header = ({hasLink}) => (
    <header className="header">
      <figure className="logo">
        { (hasLink == true) 
          ? <Link to="/" className="link--header">NICO MANO</Link>
          : <></>
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