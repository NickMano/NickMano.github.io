import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { withRouter } from 'react-router';
import { useTheme } from '../hooks/useTheme';
import ThemeButton from './ThemeButton';
import '../styles/components/Header.scss';

const Header = () => {
  const hasLink = useLocation().pathname !== '/';
  const { mode } = useTheme()

  return (
    <nav className={`header ${mode}`}>
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
          <li>
            <ThemeButton />
          </li>
        </ol>
      </section>
    </nav>
  );
};
export default withRouter(Header);
