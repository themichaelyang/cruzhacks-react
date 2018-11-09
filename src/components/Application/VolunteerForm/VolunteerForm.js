import React, {Component} from 'react';
import axios from 'axios';

import Loader from 'components/Loader';
import Success from 'components/Success';
import Error from 'components/Error';

import TShirtSelect from '../TShirtSelect';
import ClubSelect from './ClubSelect';
import AvailabilitySelect from './AvailabilitySelect';

class VolunteerForm extends Component {

  initialState = {
    status: 0,
    first_name: '',
    last_name: '',
    email: '',
    shirt_size: '',
    assoc_clubs: '',
    age: '',
    availability: '',
    short_answer: ''
  }

  constructor(props) {
    super(props)
    this.state = this.initialState
  }

  handleOnChange = (event) => {
    let newState = {}
    const name = event.target.name
    newState[name] = name === 'age' ? parseInt(event.target.value, 10) : event.target.value
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
          url: process.env.REACT_APP_REGISTRATION_ENDPOINT.concat('/volunteer'),
          data: {
            email: this.state.email,
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            shirt_size: this.state.shirt_size,
            short_answer: this.state.short_answer,
            age: this.state.age,
            availability:  this.state.availability,
            assoc_clubs: this.state.assoc_clubs
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
      case 2: return <Success text="Thanks for applying! We've received your application and will get back to you as soon as we can."/>
      case 3: return <Error text="Oops! There was an error submitting your application. If you think this was a mistake please get in touch with us at contact@cruzhacks.com!"/>
      default: {
        return (
          <div className="form-container">
            <h2 className="form-container__title">Volunteer Application</h2>
            <p className="form-container__text text-center">
              <span>Note: Only UCSC Students can Volunteer at CruzHacks!</span>
            </p>
            <form className="form" onSubmit={this.handleSubmit}>
              <div className="form__group">
                <input className="form__group__input" id="first_name" name="first_name" type="text" onChange={this.handleOnChange} value={this.state.first_name} required/>
                <label className={this.state.first_name ? "form__group__label" : "inactive form__group__label"} htmlFor="first_name">Firstname</label>
              </div>
              <div className="form__group">
                <input className="form__group__input" id="last_name" name="last_name" type="text" onChange={this.handleOnChange} value={this.state.last_name} required/>
                <label className={this.state.last_name ? "form__group__label" : "inactive form__group__label"} htmlFor="last_name">Lastname</label>
              </div>
              <div className="form__group">
                <input className="form__group__input" id="email" name="email" type="email" onChange={this.handleOnChange} value={this.state.email} required/>
                <label className={this.state.email ? "form__group__label" : "inactive form__group__label"} htmlFor="email">UCSC Email</label>
              </div>
              <div className="form__group">
                <input className="form__group__input" id="age" name="age" type="number" onChange={this.handleOnChange} value={this.state.age} max="99" required/>
                <label className={this.state.age ? "form__group__label" : "inactive form__group__label"} htmlFor="age">How old are you?*</label>
              </div>
              <div className="form__group">
                <textarea rows="5" cols="50" className="form__group__textarea" id="short_answer" name="short_answer" type="text" onChange={this.handleOnChange} value={this.state.short_answer} maxLength="500" required/>
                <label className={this.state.short_answer ? "form__group__label" : "inactive form__group__label"} htmlFor="short_answer">Why do you want to volunteer at CruzHacks 2019?* (Max 500 chars)</label>
                <span className="form__group__charcount">Character count: {this.state.short_answer.length}</span>
              </div>
              <ClubSelect handler={this.grabState} />
              <TShirtSelect handler={this.grabState} />
              <AvailabilitySelect handler={this.grabState} />
              <input className="form__submit" type="submit" value="Submit Application"/>
            </form>
          </div>
        );
      }
    }
  }
}

export default VolunteerForm;
