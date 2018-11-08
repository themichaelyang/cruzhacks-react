import React, { Component } from 'react';
import success from 'assets/success.svg';

class Success extends Component {
  render() {
    return (
      <div className="success">
        <p className="success__text">{this.props.text}</p>      
        <img className="success__img" src={success} alt="success"/>
      </div>
    );
  }
}

export default Success;
