import React, {Component} from 'react';
import Question from './Question';

class FAQ extends Component {
  render() {
    const linkStyles = {
      padding: '0 3px'
    }
    const MLHquestion = (
      <span>
        As a Major League Hacking member event, we follow 
        <a className="question__link" style={linkStyles} href="https://mlh.io/code-of-conduct" target="_blank" rel="noopener noreferrer">Major League Hacking’s Code of Conduct</a>
        which ensures all attendees to CruzHacks are respectful regardless of who you are and where you come from. Additionally, to be considered for an award, you must only submit a project that your team wrote and worked on during the hackathon & agree to our 2018 Participation Agreement
      </span>
    )

    const news = (
      <span>
        Follow our Facebook page
        <a className="question__link" style={linkStyles} href="http://www.facebook.com/CruzHacks" target="_blank" rel="noopener noreferrer">here!</a>
        This is also a great place to find other hackers to team​ ​up with,​ ​or​ ​explore new​ ​ideas​ ​on​ ​what​ ​to​ ​build.
      </span>
    )

    const sponsor = (
      <span>
        Please contact Amit, our sponsorship expert, at
        <a className="question__link" style={linkStyles} href="mailto:amit@cruzhacks.com" target="_blank" rel="noopener noreferrer">amit@cruzhacks.com</a>
        and we can discuss the best way for your organization to get involved!
      </span>
    )

    const applyMentorsJudges = (
      <span>
        We would love to have you as a mentor or judge. 
        <a className="question__link" style={linkStyles} href="https://www.cruzhacks.com/applications" rel="noopener noreferrer">Mentor and Judge applications can be found here!</a>
      </span>
    )
    const applyVolunteers = (
      <span>
        If you're interested in helping out this year's hackathon,
        <a className="question__link" style={linkStyles} href="https://www.cruzhacks.com/applications" rel="noopener noreferrer">volunteer applications can be found here!</a>
      </span>
    )
    
    return (
      <div className="faq-container">
        <h2 className="faq-container__title">Frequently Asked Questions</h2>
        <div className="faq-grid">
          <div className="faq-container__column">
            <Question
              title="What is a hackathon?"
              answer="A hackathon is a weekend-long event where you can build out your ideas, network, and show off your skills. This 3-day event consists of forming teams, choosing an idea, building it out, and showing it off at the end. Hundreds of students, sponsors, mentors, and judges gather together to push the limits of what you can build, only limited by your imagination."
            />
            <Question
              title="Who can participate?"
              answer="Everyone can! This event is open to coders, designers, artists, project managers, and anyone else who wants to create! No prior coding or technical experience is necessary,​ ​and​ ​everyone​ ​is​ ​welcome​ ​to​ ​participate​ ​in​ ​the​ ​hackathon!"
            />
            <Question
              title="How many people can I have on my team?"
              answer="Each team can have a maximum number of 5 people."
            />
            <Question
              title="What should I bring?"
              answer="Some essential things to bring include a laptop (with charger), an empty bag for swag, and a change of clothes if you plan on spending the night!"
            />
            <Question
              title="How can I become a mentor or judge?"
              answer={applyMentorsJudges}
            />
          </div>
          <div className="faq-container__column">
            <Question
              title="How can I keep up to date on CruzHacks 2019 news?"
              answer={news}
            />
            <Question
              title="Is this completely free?"
              answer="Yes! This event is completely free for everyone! We will not be charging an admission fee for this event. We will cover all costs (including all meals) for the entire duration of the event. Note: CruzHacks 2018 does not cover any travel​ ​costs"
            />
            <Question
              title="What are the rules?"
              answer={MLHquestion}
            />
            <Question
              title="How can I be a sponsor?"
              answer={sponsor}
            />
            <Question
              title="I'd like to help out!"
              answer={applyVolunteers}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default FAQ;
