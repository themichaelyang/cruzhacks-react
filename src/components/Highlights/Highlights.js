import React, { Component } from 'react';
import Highlight from './Highlight';
import highlight1 from '../../assets/highlights/highlight1.jpg';
import highlight2 from '../../assets/highlights/highlight2.jpg';
import highlight3 from '../../assets/highlights/highlight3.jpg';

class Highlights extends Component {
  render() {
    return (
      <div className="highlights-container">
        <Highlight
          title="All inclusive environment"
          text="This year, we’re working even harder to make CruzHacks a diverse and welcoming event for students of all skill levels. Our pre-hack events help newcomers build their first website, and assist seasoned coders in expanding their skill set with new technologies."
          image={highlight1}
        />
        <Highlight
          title="Extend your industry network"
          text="This year, we’re working even harder to make CruzHacks a diverse and welcoming event for students of all skill levels. Our pre-hack events help newcomers build their first website, and assist seasoned coders in expanding their skill set with new technologies."
          image={highlight2}
          reverse
        />
        <Highlight
          title="All inclusive environment"
          text="This year, we’re working even harder to make CruzHacks a diverse and welcoming event for students of all skill levels. Our pre-hack events help newcomers build their first website, and assist seasoned coders in expanding their skill set with new technologies."
          image={highlight3}
        />
      </div>
    );
  }
}

export default Highlights;
