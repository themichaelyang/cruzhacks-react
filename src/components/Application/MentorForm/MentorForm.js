import React, {Component} from 'react';
import TShirtSelect from '../TShirtSelect';

class MentorForm extends Component {

  initialState = {
    firstname: '',
    lastname: '',
    email: '',
    company: '',
    linkedin: '',
    shirt: ''
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
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state)
    this.setState(this.initialState)
  }

  render() {
    return (
      <div className="form-container">
        <h2 className="form-container__title">Mentor Application</h2>        
        <p className="form-container__text">
          <span>Mentors are the backbone of an hackathon.  They operate our event’s Q/A forums and roam the event helping hackers.</span>
          <span>For such an important role, we’ll have separate lounging space and tons of delicious food for all mentors.</span>
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
            <label className={this.state.reason ? "form__group__label" : "inactive form__group__label"} htmlFor="reason">Why do you want to mentor CruzHacks 2019? </label>
          </div>
          <TShirtSelect handler={this.grabState} />
          <input className="form__submit" type="submit" value="Submit Application"/>
        </form>
      </div>
    );
  }
}

export default MentorForm;
