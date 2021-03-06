import React, { Component } from 'react';

import Hero from './Hero';
import Mission from './Mission';
import CTA from './CTA';
import Highlights from './Highlights';
import Sponsors from './Sponsors';
import FAQ from './FAQ';
import Team from './Team';
import Footer from './Footer';

class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <Hero />
        <Mission />
        <CTA />
        <Highlights />
        <FAQ />
        <Sponsors />
        <Team />
        <Footer />
      </div>
    );
  }
}

export default Landing;
