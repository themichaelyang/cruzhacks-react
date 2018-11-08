import React, { Component } from 'react';
import error from 'assets/error.svg';

class Error extends Component {
  render() {
    return (
      <div className="error">
        <img className="error__img" src={error} alt="error"/>
        <p className="error__text">{this.props.text}</p>
      </div>
    );
  }
}

export default Error;
