import React, {Component} from 'react';
import Member from './Member';

class Team extends Component {
  render() {
    return (
      <div className="team">
        <span className="team__title">Meet Our Team</span>
        <div className="team__row">
          <Member
            name="Amit Saxena"
            bg="amit"
            title="President – Sponsorship"
            linkedin="https://www.linkedin.com/in/amitsa1/"
            link="http://karthikmanickam.com/"
          />
          <Member
            name="Greg Wolff"
            bg="greg"
            title="President – Design"
            linkedin="https://www.linkedin.com/in/gregwwolff/"
            link="http://karthikmanickam.com/"
          />
          <Member
            name="Karthik Manickam"
            bg="karthik"
            title="President – Development"
            linkedin="https://www.linkedin.com/in/karthik-manickam/"
            link="http://karthikmanickam.com/"
          />
        </div>
        <div className="team__row"></div>
      </div>
    );
  }
}

export default Team;
