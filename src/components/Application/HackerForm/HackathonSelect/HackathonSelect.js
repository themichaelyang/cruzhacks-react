import React, { Component } from 'react';

class HackathonSelect extends Component {

  constructor(props) {
    super(props)
    this.state = {
      num_hacks: ''
    }
  }

  changeValue = (event) => {
    this.setState({num_hacks: event.target.dataset.num_hacks}, function() {
      this.props.handler({num_hacks: this.state.num_hacks})
    })
  }

  render() {
    return (
      <div className="hackathon">        
        <h2 className="hackathon__title">How many hackathons have you attended?</h2>
        <div className="hackathon__select">
          <span className={this.state.num_hacks === "0" ? "hackathon__select__option active" : "hackathon__select__option"} data-num_hacks="0" onClick={this.changeValue}>0</span>
          <span className={this.state.num_hacks === "1-2" ? "hackathon__select__option active" : "hackathon__select__option"} data-num_hacks="1-2" onClick={this.changeValue}>1-2</span>
          <span className={this.state.num_hacks === "3-5" ? "hackathon__select__option active" : "hackathon__select__option"} data-num_hacks="3-5" onClick={this.changeValue}>3-5</span>
          <span className={this.state.num_hacks === "6+" ? "hackathon__select__option active" : "hackathon__select__option"} data-num_hacks="6+" onClick={this.changeValue}>6+</span>
          <input type="hidden" name="hackathon" className="hackathon__value" onChange={this.props.handler} value={this.state.num_hacks}/>
        </div>        
      </div>
    );
  }
}

export default HackathonSelect;
