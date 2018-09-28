import React, { Component } from 'react';

class Highlight extends Component {
  render() {
    return (
      <div className={this.props.reverse ? "highlight reverse" : "highlight"}>
        <div className="highlight__image-container">
          <img className="highlight__image" src={this.props.image} alt=""/>
          <div className="highlight__overlay"></div>
        </div>
        <div className="highlight__text">
          <span className="highlight__text__title">{this.props.title}</span>
          <p>{this.props.text}</p>
        </div>
      </div>
    );
  }
}

export default Highlight;
