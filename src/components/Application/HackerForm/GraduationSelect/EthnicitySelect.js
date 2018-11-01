import React, { Component } from 'react';

class GraduationSelect extends Component {

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
          <span className={this.state.race == "American Indian or Alaskan Native" ? "race__select__option active" : "race__select__option"} data-race="American Indian or Alaskan Native" onClick={this.changeValue}>American Indian or Alaskan Native</span>             
          <span className={this.state.race == "Asian/Pacific Islander" ? "race__select__option active" : "race__select__option"} data-race="Asian/Pacific Islander" onClick={this.changeValue}>Asian/Pacific Islander</span>                   
          <span className={this.state.race == "African American or Black" ? "race__select__option active" : "race__select__option"} data-race="African American or Black" onClick={this.changeValue}>African American or Black</span>                   
          <span className={this.state.race == "Hispanic/Latinx" ? "race__select__option active" : "race__select__option"} data-race="Hispanic/Latinx" onClick={this.changeValue}>Hispanic/Latinx</span>                   
          <span className={this.state.race == "White/Caucasian" ? "race__select__option active" : "race__select__option"} data-race="White/Caucasian" onClick={this.changeValue}>White/Caucasian</span>                             
          <span className={this.state.race == "Other" ? "race__select__option active" : "race__select__option"} data-race="Other" onClick={this.changeValue}>Other</span>        
          <input type="hidden" name="race" className="race__value" onChange={this.props.handler} value={this.state.race}/>
        </div>        
      </div>
    );
  }
}

export default GraduationSelect;
