import React, {Component} from 'react';
import linkedin from '../../assets/team/linkedin.svg';
import envelope from '../../assets/team/envelope.svg';

class Member extends Component {
  render() {
    return (
      <div className="member">
        <div className="member__portrait">
          <div className={"member__profile " + this.props.bg}></div>
        </div>
        <span className="member__name">{this.props.name}</span>
        <span className="member__title">{this.props.title}</span>
        <div className="member__links">
          <a href={this.props.linkedin} target="blank"><img src={linkedin} alt="" className="member__linkedin"/></a>
          <a href={this.props.link} target="blank"><img src={envelope} alt="" className="member__mail"/></a>
        </div>
      </div>
    );
  }
}

export default Member;
