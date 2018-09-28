import React, {Component} from 'react';
import Member from './Member';

class Team extends Component {
  render() {
    return (
      <div className="team">
        <span className="team__title">Meet Our Team</span>
        <Member name="Karthik Manickam" title="President – Development"/>
      </div>
    );
  }
}

export default Team;
