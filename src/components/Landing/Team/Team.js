import React, {Component} from 'react';
import Member from './Member';
import amit from 'assets/team/saxy.jpg';
import anisha from 'assets/team/anisha.jpg';
import alex from 'assets/team/alex.jpg';
import greg from 'assets/team/greg.jpg';
import karthik from 'assets/team/karthik_manickam.jpg';
import allston from 'assets/team/allston.jpg';
import catherine from 'assets/team/catherine.jpg';
import daniel from 'assets/team/daniel.jpg';
import eric from 'assets/team/eric.jpg';
import jennifer from 'assets/team/jennifer.jpg';
import justin from 'assets/team/justin.jpg';
import kyle from 'assets/team/kyle.jpg'
import kiran from 'assets/team/kiran.jpg';
import radhika from 'assets/team/radhika.jpg';
import raj from 'assets/team/raj.jpg';
import sherry from 'assets/team/sherry.jpg';
import shreya from 'assets/team/shreya.jpg';
import surya from 'assets/team/surya.jpg';
import tiffany from 'assets/team/tiffany.jpg';
import zain from 'assets/team/zain.jpg';


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
            link="http://karthikmanickam.com"
            target="_blank"
          />
          <Member
            name="Anisha Trivedi"
            img={anisha}
            title="Director of Public Relations"
            linkedin="https://www.linkedin.com/in/anishatrivedi/"
            link=""
            target="_blank"
          />
        </div>        
        <div className="team__row">
          <Member
            name="Daniel Segobiano"
            img={daniel}
            title="Logistics Lead"
            linkedin="https://www.linkedin.com/in/daniel-segobiano/"            
          />
          <Member
            name="Radhika Gathwala"
            img={radhika}
            title="Logistics Lead"
            linkedin="https://www.linkedin.com/in/radhika-gathwala/"
            link=""
          />
          <Member
            name="Jennifer Dutra"
            img={jennifer}
            title="Design Lead"
            linkedin="https://www.linkedin.com/in/jennifer-dutra/"            
            link=""
          />
          <Member
            name="Sherry Huang"
            img={sherry}
            title="Marketing Lead"
            linkedin="https://www.linkedin.com/in/sherry-huang-502018b7/"
            link=""
            target="_blank"
          />          
        </div>
        <div className="team__row">
          <Member
            name="Allston Mickey"
            img={allston}
            title="Development Lead"
            linkedin="https://www.linkedin.com/in/amickey/"            
            link="https://github.com/amicks"
          />
          <Member
            name="Kyle O'Brien"
            img={kyle}
            title="Development Lead"
            linkedin="https://www.linkedin.com/in/kyle1668/"
            link="http://kyleobrien.io/"
          />
          <Member
            name="Alex Lue"
            img={alex}
            title="Development Lead"
            linkedin="https://www.linkedin.com/in/alexzlue/"
            link=""
          />
          <Member
            name="Eric Mockler"
            img={eric}
            title="Development Lead"
            linkedin="https://www.linkedin.com/in/mocklee/"
            link=""
            target="_blank"
          />
        </div>
        <div className="team__row">
          <Member
            name="Tiffany Lee"
            img={tiffany}
            title="Sponsorship Lead"
            linkedin="https://www.linkedin.com/in/tiffany-y-lee/"            
          />
          <Member
            name="Zain Shafique"
            img={zain}
            title="Sponsorship Lead"
            linkedin="https://www.linkedin.com/in/zain-shafique/"
            link=""
          />
          <Member
            name="Shreya Adloori"
            img={shreya}
            title="Sponsorship Lead"
            linkedin="https://www.linkedin.com/in/shreyaadloori/"
            link=""
          />
          <Member
            name="Surya Ruddaraju"
            img={surya}
            title="Sponsorship Lead"
            linkedin="https://www.linkedin.com/in/surya-ruddaraju-22925995/"
            link=""
            target="_blank"
          />          
        </div>
        <div className="team__row">
          <Member
            name="Rajinder Dhaliwal"
            img={raj}
            title="Communications Lead"
            linkedin="https://www.linkedin.com/in/rajinder-dhaliwal-46a907160/"
            link=""
          />
          <Member
            name="Kiran Prasad"
            img={kiran}
            title="Communications Lead"
            linkedin=""
            link=""
            target="_blank"
          />
          <Member
            name="Catherine Lee"
            img={catherine}
            title="Workshops Coordinator"
            linkedin="https://www.linkedin.com/in/catherinelee274/"            
          />
          <Member
            name="Justin Cheon"
            img={justin}
            title="Workshops Coordinator"
            linkedin="https://www.linkedin.com/in/justincheon/"            
          />
        </div>
      </div>
    );
  }
}

export default Team;
