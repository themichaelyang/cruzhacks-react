import React, { Component } from 'react';

class GenderSelect extends Component {

  constructor(props) {
    super(props)
    this.state = {
      gender: ''
    }
  }

  changeValue = (event) => {
    this.setState({gender: event.target.dataset.gender}, function() {
      this.props.handler({gender: this.state.gender})
    })
  }

  render() {
    return (
      <div className="gender">
        <h2 className="gender__title">Please select the gender that best describes you</h2>
        <div className="gender__select">
          <span className={this.state.gender == "female" ? "gender__select__option active" : "gender__select__option"} data-gender="female" onClick={this.changeValue}>Female</span>
          <span className={this.state.gender == "male" ? "gender__select__option active" : "gender__select__option"} data-gender="male" onClick={this.changeValue}>Male</span>
          <span className={this.state.gender == "transgender" ? "gender__select__option active" : "gender__select__option"} data-gender="transgender" onClick={this.changeValue}>Transgender</span>
          <span className={this.state.gender == "gender-nonconforming" ? "gender__select__option active" : "gender__select__option"} data-gender="gender-nonconforming" onClick={this.changeValue}>Gender-nonconforming</span>
          <span className={this.state.gender == "other" ? "gender__select__option active" : "gender__select__option"} data-gender="other" onClick={this.changeValue}>Other</span>
          <input type="hidden" name="gender" className="gender__value" onChange={this.props.handler} value={this.state.gender}/>
        </div>        
      </div>
    );
  }
}

export default GenderSelect;
