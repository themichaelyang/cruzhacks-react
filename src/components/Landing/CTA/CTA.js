import React, {Component} from 'react';
import Lottie from 'react-lottie';
import { isMobile } from 'react-device-detect';

import networkData from 'assets/cta/network.json';
import sparklesData from 'assets/cta/sparkles.json';
import collaborateData from 'assets/cta/collaborate.json';

class CTA extends Component {
  componentDidMount() {
    state = {
      concept: false,
      collaborate: false,
      create: false,
      position: 9999999,
    }
    document.onscroll = () => {
      if (window.scrollY >= this.state.position) {
        this.setState({concept: true})
        if (isMobile) {
          if (window.scrollY >= this.state.position + 500) this.setState({collaborate: true})
          if (window.scrollY >= this.state.position + 1000) this.setState({create: true})
        } else {
          setTimeout(() => this.setState({collaborate: true}), 500)
          setTimeout(() => this.setState({create: true}), 1000)
        }
      }
    }
    this.setState({position: document.querySelector('.cta__title').offsetTop - 600})
  }
  render() {
    return (
      <div className="cta-container">
        <div className="cta">
          <Lottie options={{
                loop: false,
                autoplay: true,
                animationData: networkData,
                rendererSettings: {
                  preserveAspectRatio: 'xMidYMid slice'
                }
              }}
              height={100}
              width={100}
              isPaused={!this.state.concept}
              style={{'transform': 'scale(1.2)'}}/>
          <span className="cta__title concept">CONCEPT</span>
          <p className="cta__text">Put your thinking cap on and brainstorm an innovative idea that delivers a positive effect on your community</p>
        </div>
        <div className="cta">
        <Lottie options={{
                loop: false,
                autoplay: true,
                animationData: collaborateData,
                rendererSettings: {
                  preserveAspectRatio: 'xMidYMid slice'
                }
              }}
              height={100}
              width={100}
              isPaused={!this.state.collaborate}
              style={{'transform': 'scale(1.2)'}}/>
          <span className="cta__title collaborate">COLLABORATE</span>
          <p className="cta__text">Team up with students from 25+ universities, and 50+ superhero mentors as you power through the weekend!</p>
        </div>
        <div className="cta">
        <Lottie options={{
                loop: false,
                autoplay: true,
                animationData: sparklesData,
                rendererSettings: {
                  preserveAspectRatio: 'xMidYMid slice'
                }
              }}
              height={100}
              width={100}
              isPaused={!this.state.create}
              style={{'transform': 'scale(1.2)'}}/>
          <span className="cta__title create">CREATE</span>
          <p className="cta__text">Try out a new API, team up with your fellow students, and build something amazing at CruzHacks!</p>
        </div>
      </div>
    );
  }
}

export default CTA;
