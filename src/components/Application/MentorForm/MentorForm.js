import React, {Component} from 'react';
import axios from 'axios';

import Loader from 'components/Loader';
import TShirtSelect from '../TShirtSelect';
import SkillSelect from './SkillSelect';

class MentorForm extends Component {

  initialState = {
    status: 0,
    first_name: '',
    last_name: '',
    email: '',
    company: '',
    linkedin: '',
    shirt_size: '',
    short_answer: '',
    mentor_field: '',
    dietary_rest: ''
  }
  
  constructor(props) {
    super(props)
    this.state = this.initialState
  }

  handleOnChange = (event) => {
    let newState = {}
    newState[event.target.name] = event.target.value
    this.setState(newState)
  }

  grabState = (state) => {
    this.setState(state)
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.shirt_size === '') {
      window.alert("Please select a shirt size!")
    } else {
      this.setState({status: 1}, () => {
        axios({
          method: 'post',
          url: process.env.REACT_APP_REGISTRATION_ENDPOINT.concat('/mentor'),
          data: {
            email: this.state.email,
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            company: this.state.company,
            shirt_size: this.state.shirt_size,
            short_answer: this.state.short_answer,
            mentor_field: this.state.mentor_field,
            linkedin: this.state.linkedin,
            dietary_rest: this.state.dietary_rest
          }
        }).then((response) => {
          this.setState({status: 2})
        }).catch((error) => {
          this.setState({status: 3})
        });  
      })
    }    
  }

  render() {
    switch (this.state.status) {
      case 1: return <Loader />
      case 2: return <span className="status-success">Success! (Can someone come up with the text for this & Jennifer can ya make some SVG for this so it's more visual or give me an idea of what to make this thing look like it's like 5am and im exhausted and i have 0 creative sense right now and im hangry and i have to finish my cs homework Also can u pick send me the hex for success color and error colors)</span>
      case 3: return <span className="status-error">Oops! There was an error submitting your application. You probably submitted an application with an email that has already been used. If that's not what happened and you see this I messed up the form data validation. Let me know immediately if that's the case</span>
      default: {
        return (
          <div className="form-container">
            <h2 className="form-container__title">Mentor Application</h2>   
            <p className="form-container__text">
              <span>Mentors are the backbone of our hackathon. They operate our event’s Q/A forums and roam the event helping hackers with technical problems.</span>
              <span>For such an important role, we’ll have separate lounging space and tons of delicious food for all mentors.</span>
            </p>
            <form className="form" onSubmit={this.handleSubmit}>
              <div className="form__group">
                <input className="form__group__input" id="first_name" name="first_name" type="text" onChange={this.handleOnChange} value={this.state.first_name} maxLength="30" required/>
                <label className={this.state.first_name ? "form__group__label" : "inactive form__group__label"} htmlFor="first_name">Firstname*</label>
              </div>
              <div className="form__group">
                <input className="form__group__input" id="last_name" name="last_name" type="text" onChange={this.handleOnChange} value={this.state.last_name} maxLength="30" required/>
                <label className={this.state.last_name ? "form__group__label" : "inactive form__group__label"} htmlFor="last_name">Lastname*</label>
              </div>
              <div className="form__group">
                <input className="form__group__input" id="email" name="email" type="email" onChange={this.handleOnChange} value={this.state.email} maxLength="50" required/>
                <label className={this.state.email ? "form__group__label" : "inactive form__group__label"} htmlFor="email">Email*</label>
              </div>
              <div className="form__group">
                <input className="form__group__input" id="company" name="company" type="tel" onChange={this.handleOnChange} value={this.state.company} required/>
                <label className={this.state.company ? "form__group__label" : "inactive form__group__label"} htmlFor="company">What company do you work for?*</label>
              </div>
              <div className="form__group">
                <input className="form__group__input" id="linkedin" name="linkedin" type="text" onChange={this.handleOnChange} value={this.state.linkedin} maxLength="80"/>
                <label className={this.state.linkedin ? "form__group__label" : "inactive form__group__label"} htmlFor="linkedin">LinkedIn URL*</label>
              </div>
              <div className="form__group">
                <input className="form__group__input" id="dietary_rest" name="dietary_rest" type="text" onChange={this.handleOnChange} value={this.state.dietary_rest} maxLength="50"/>
                <label className={this.state.dietary_rest ? "form__group__label" : "inactive form__group__label"} htmlFor="dietary_rest">Please list any dietary restrictions</label>
              </div>
              <div className="form__group">
                <textarea rows="5" cols="50" className="form__group__textarea" id="short_answer" name="short_answer" type="text" onChange={this.handleOnChange} value={this.state.short_answer} maxLength="500" required/>
                <label className={this.state.short_answer ? "form__group__label" : "inactive form__group__label"} htmlFor="short_answer">Why do you want to mentor CruzHacks 2019?* (Max 500 chars)</label>
                <span className="form__group__charcount">Character count: {this.state.short_answer.length}</span>  
              </div>
              <TShirtSelect handler={this.grabState} />
              <SkillSelect handler={this.grabState} />
              <input className="form__submit" type="submit" value="Submit Application"/>
            </form>
          </div>
        );
      }
    }    
  }
}

export default MentorForm;
