import React, {Component} from 'react';
import GenderSelect from './GenderSelect';
import EthnicitySelect from './EthnicitySelect';

class HackerForm extends Component {
  initialState = {
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    gender: ''      
  }
  constructor(props) {
    super(props)    
    this.state = this.initialState
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState(this.initialState)
  }

  handleOnChange = (event) => {
    let newState = {}
    newState[event.target.name] = event.target.value
    this.setState(newState)
    console.log(this.state.gender)
  }

  grabState = (state) => {
    this.setState(state, function() {
      console.log(this.state.race)
    })
  }

  render() {
    return (
      <div className="form-container">
        <h2 className="form-container__title">Hacker Application</h2>
        <form className="form" onSubmit={this.handleSubmit}>
        <div className="form__group">
          <input className="form__group__input" id="firstname" name="firstname" type="text" onChange={this.handleOnChange} value={this.state.firstname} required/>
          <label className={this.state.firstname ? "form__group__label" : "inactive form__group__label"} htmlFor="firstname">Firstname</label>
        </div>
        <div className="form__group">
          <input className="form__group__input" id="lastname" name="lastname" type="text" onChange={this.handleOnChange} value={this.state.lastname} required/>
          <label className={this.state.lastname ? "form__group__label" : "inactive form__group__label"} htmlFor="lastname">Lastname</label>
        </div>
        <div className="form__group">
          <input className="form__group__input" id="email" name="email" type="email" onChange={this.handleOnChange} value={this.state.email} required/>
          <label className={this.state.email ? "form__group__label" : "inactive form__group__label"} htmlFor="email">Email</label>
        </div>
        <div className="form__group">
          <input className="form__group__input" id="phone" name="phone" type="tel" onChange={this.handleOnChange} value={this.state.phone} required/>
          <label className={this.state.phone ? "form__group__label" : "inactive form__group__label"} htmlFor="phone">Phone</label>
        </div>
        <GenderSelect handler={this.grabState}/>
        <EthnicitySelect handler={this.grabState}/>
        <input type="submit"/>
        </form>
      </div>
    );
  }
}

export default HackerForm;
