import React, {Component} from 'react';

class Member extends Component {
  render() {
    return (
      <div className="member">
        <div className="member__portrait">
          <img src="" alt="" className="member__profile"/>
        </div>
        <span className="member__name">{this.props.name}</span>
        <span className="member__title">{this.props.title}</span>
        <img src="" alt="" className="member__linkedin"/>
        <img src="" alt="" className="member__mail"/>
      </div>
    );
  }
}

export default Member;
