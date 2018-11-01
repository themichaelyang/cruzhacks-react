import React, { Component } from 'react';

class EthnicitySelect extends Component {

  constructor(props) {
    super(props)
    this.state = {
      race: ''
    }
  }

  changeValue = (event) => {
    this.setState({race: event.target.dataset.race}, function() {
      this.props.handler({race: this.state.race})
    })
  }

  render() {
    return (
      <div className="race">        
        <h2 className="race__title">Please select the ethnicity that best describes you</h2>
        <div className="race__select">
          <span className={this.state.race == "asian" ? "race__select__option active" : "race__select__option"} data-race="asian" onClick={this.changeValue}>Asian</span>          
          <input type="hidden" name="race" className="race__value" onChange={this.props.handler} value={this.state.race}/>
        </div>        
      </div>
    );
  }
}

export default EthnicitySelect;
