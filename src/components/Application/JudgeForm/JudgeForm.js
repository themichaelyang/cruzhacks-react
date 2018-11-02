import React, {Component} from 'react';
import TShirtSelect from '../TShirtSelect';
import Availability from './Availability';

class JudgeForm extends Component {

  initialState = {
    firstname: '',
    lastname: '',
    email: '',
    company: '',
    linkedin: '',
    shirt: '',
  }
  
  constructor(props) {
    super(props)
    this.state = {}
  }

  handleOnChange = (event) => {
    let newState = {}
    newState[event.target.name] = event.target.value
    this.setState(newState)
    console.log(this.state.gender)
  }

  grabState = (state) => {
    this.setState(state)
    console.log(this.state.skills)
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state)
    this.setState(this.initialState)
  }

  render() {
    return (
      <div className="form-container">
        <h2 className="form-container__title">Judge Application</h2>        
        <p className="form-container__text">
          <span>Judges will arrive to the Stevenson Event Center at UCSC at 12 pm and be served lunch from a tasty location.  Then each judge will be assigned projects to evaluate from 1 pm - 2 pm, and then the final results will be announced in the closing ceremony from 2:30 - 4:00 pm. </span>
        </p>
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
            <input className="form__group__input" id="company" name="company" type="tel" onChange={this.handleOnChange} value={this.state.company} required/>
            <label className={this.state.company ? "form__group__label" : "inactive form__group__label"} htmlFor="company">What company do you work for?</label>
          </div>
          <div className="form__group">
            <input className="form__group__input" id="linkedin" name="linkedin" type="text" onChange={this.handleOnChange} value={this.state.linkedin} required/>
            <label className={this.state.linkedin ? "form__group__label" : "inactive form__group__label"} htmlFor="linkedin">LinkedIn URL</label>
          </div>
          <div className="form__group">
            <textarea rows="5" cols="50" className="form__group__textarea" id="reason" name="reason" type="text" onChange={this.handleOnChange} value={this.state.reason} required/>
            <label className={this.state.reason ? "form__group__label" : "inactive form__group__label"} htmlFor="reason">Why do you want to be a judge CruzHacks 2019? </label>
          </div>
          <div className="form__group">
            <input className="form__group__input" id="diet" name="diet" type="text" onChange={this.handleOnChange} value={this.state.diet} required/>
            <label className={this.state.diet ? "form__group__label" : "inactive form__group__label"} htmlFor="diet">Please list any dietary restrictions you have.</label>
          </div>
          <Availability handler={this.grabState} />
          <TShirtSelect handler={this.grabState} />
          <input className="form__submit" type="submit" value="Submit Application"/>
        </form>
      </div>
    );
  }
}

export default JudgeForm;
