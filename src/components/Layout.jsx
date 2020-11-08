import React from 'react';
import PropTypes from 'prop-types';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
