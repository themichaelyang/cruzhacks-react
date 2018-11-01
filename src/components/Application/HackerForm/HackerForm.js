import React, {Component} from 'react';
import GenderSelect from './GenderSelect';
import EthnicitySelect from './EthnicitySelect';
import GraduationSelect from './GraduationSelect';
import HackathonSelect from './HackathonSelect';

class HackerForm extends Component {
  initialState = {
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    gender: '',
    race: '',
    age: ''      
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
    this.setState(state)
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
        <GraduationSelect handler={this.grabState}/>
        <div className="form__group">
          <input className="form__group__input" id="age" name="age" type="number" onChange={this.handleOnChange} value={this.state.age} required/>
          <label className={this.state.age ? "form__group__label" : "inactive form__group__label"} htmlFor="age">How old are you?</label>
        </div>
        <HackathonSelect handler={this.grabState}/>
        <input type="submit"/>
        </form>
      </div>
    );
  }
}

export default HackerForm;
