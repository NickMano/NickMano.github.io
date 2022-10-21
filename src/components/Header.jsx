import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { withRouter } from 'react-router';
import '../styles/components/Header.scss';
import { useTheme } from '../hooks/useTheme';

const Header = () => {
  const hasLink = useLocation().pathname !== '/';
  const { color } = useTheme()

  return (
    <nav className="header" style={{background: color}}>
      <figure className="logo">
        { (hasLink === true)
          ? <Link to="/" className="link--header">NICO MANO</Link>
          : <></>}

      </figure>
      <section className="menu">
        <ol className="header__list">
          <li>
            <Link to="/" className="link--header">Works</Link>
          </li>
          <li>
            <Link to="/about" className="link--header">About</Link>
          </li>
          <li style={{ display: 'none' }}>
            <Link to="/culture" className="link--header">Culture</Link>
          </li>
          <li>
            <a className="link--header" target="_blank" rel="noreferrer" href="https://github.com/NickMano/">Github</a>
          </li>
        </ol>
      </section>
    </nav>
  );
};
export default withRouter(Header);
