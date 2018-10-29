import React, {Component} from 'react';
import Member from './Member';
import amit from 'assets/team/amit_saxena.jpg';
import greg from 'assets/team/greg_wolff.jpg';
import karthik from 'assets/team/karthik_manickam.jpg';


class Team extends Component {
  render() {
    return (
      <div className="team">
        <span className="team__title">Meet Our Team</span>
        <div className="team__row">
          <Member
            name="Amit Saxena"
            img={amit}
            title="President – Sponsorship"
            linkedin="https://www.linkedin.com/in/amitsa1/"
            link="mailto:amsaxena@ucsc.edu"
          />
          <Member
            name="Greg Wolff"
            img={greg}
            title="President – Design"
            linkedin="https://www.linkedin.com/in/gregwwolff/"
            link="mailto:gregwwolff@gmail.com"
          />
          <Member
            name="Karthik Manickam"
            img={karthik}
            title="President – Development"
            linkedin="https://www.linkedin.com/in/karthik-manickam/"
            link="http://karthikmanickam.com/"
            target="_blank"
          />
        </div>
        <div className="team__row">

        </div>
      </div>
    );
  }
}

export default Team;
