import React, { Component } from 'react';

class EthnicitySelect extends Component {

  constructor(props) {
    super(props)
    this.state = {
      ethnicity: ''
    }
  }

  changeValue = (event) => {
    this.setState({ethnicity: event.target.dataset.ethnicity}, function() {
      this.props.handler({ethnicity: this.state.ethnicity})
    })
  }

  render() {
    return (
      <div className="race">        
        <h2 className="race__title">Please select the ethnicity that best describes you</h2>
        <div className="race__select">
          <span className={this.state.ethnicity === "American Indian or Alaskan Native" ? "race__select__option active" : "race__select__option"} data-ethnicity="American Indian or Alaskan Native" onClick={this.changeValue}>American Indian or Alaskan Native</span>             
          <span className={this.state.ethnicity === "Asian/Pacific Islander" ? "race__select__option active" : "race__select__option"} data-ethnicity="Asian/Pacific Islander" onClick={this.changeValue}>Asian/Pacific Islander</span>                   
          <span className={this.state.ethnicity === "African American or Black" ? "race__select__option active" : "race__select__option"} data-ethnicity="African American or Black" onClick={this.changeValue}>African American or Black</span>                   
          <span className={this.state.ethnicity === "Hispanic/Latinx" ? "race__select__option active" : "race__select__option"} data-ethnicity="Hispanic/Latinx" onClick={this.changeValue}>Hispanic/Latinx</span>                   
          <span className={this.state.ethnicity === "White/Caucasian" ? "race__select__option active" : "race__select__option"} data-ethnicity="White/Caucasian" onClick={this.changeValue}>White/Caucasian</span>                             
          <span className={this.state.ethnicity === "Other" ? "race__select__option active" : "race__select__option"} data-ethnicity="Other" onClick={this.changeValue}>Other</span>        
          <input type="hidden" name="race" className="race__value" onChange={this.props.handler} value={this.state.ethnicity}/>
        </div>        
      </div>
    );
  }
}

export default EthnicitySelect;
