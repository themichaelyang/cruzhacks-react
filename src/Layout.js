import React, { Component } from 'react';
import Hero from './components/Hero';
import Mission from './components/Mission';
import CTA from './components/CTA';
import Highlights from './components/Highlights';
import Team from './components/Team';
import Footer from './components/Footer';
import './styles/css/base.css';

class Layout extends Component {
  render() {
    return (
      <div className="layout">
        <Hero />
        <Mission />
        <CTA />
        <Highlights />
        <Team />
        <Footer />
      </div>
    );
  }
}

export default Layout;
