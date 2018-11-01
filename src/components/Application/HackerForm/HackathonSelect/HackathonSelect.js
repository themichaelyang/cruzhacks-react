import React, { Component } from 'react';

class HackathonSelect extends Component {

  constructor(props) {
    super(props)
    this.state = {
      hackathon: ''
    }
  }

  changeValue = (event) => {
    this.setState({hackathon: event.target.dataset.hackathon}, function() {
      this.props.handler({hackathon: this.state.hackathon})
    })
  }

  render() {
    return (
      <div className="hackathon">        
        <h2 className="hackathon__title">How many hackathons have you attended?</h2>
        <div className="hackathon__select">
          <span className={this.state.hackathon == "0" ? "hackathon__select__option active" : "hackathon__select__option"} data-hackathon="0" onClick={this.changeValue}>0</span>
          <span className={this.state.hackathon == "1-2" ? "hackathon__select__option active" : "hackathon__select__option"} data-hackathon="1-2" onClick={this.changeValue}>1-2</span>
          <span className={this.state.hackathon == "3-5" ? "hackathon__select__option active" : "hackathon__select__option"} data-hackathon="3-5" onClick={this.changeValue}>3-5</span>
          <span className={this.state.hackathon == "6+" ? "hackathon__select__option active" : "hackathon__select__option"} data-hackathon="6+" onClick={this.changeValue}>6+</span>
          <input type="hidden" name="hackathon" className="hackathon__value" onChange={this.props.handler} value={this.state.hackathon}/>
        </div>        
      </div>
    );
  }
}

export default HackathonSelect;
