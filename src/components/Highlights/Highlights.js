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
          title={["Extend your", <br/>, "industry network"]}
          text="Founders and representatives of various startups and industry giants hold workshops and booths at CruzHacks each year; this opportunity allows attendees to build confidence in their intrapersonal skills as well as learn a new product or API!"
          image={highlight2}
          reverse
        />
        {/* <Highlight
          title="Get Hella Free Shirts"
          text="Lorem ipsum dolor sit amet, mea adhuc diceret in. Dicunt ancillae maluisset mei te, id sed veniam oportere rationibus, vel odio mutat ut. Simul signiferumque sit ea. Ut pro aliquam facilis volumus, et est utroque debitis."
          image={highlight3}
        /> */}
      </div>
    );
  }
}

export default Highlights;
