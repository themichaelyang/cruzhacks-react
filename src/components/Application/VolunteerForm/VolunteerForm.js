import React, {Component} from 'react';
import TShirtSelect from '../TShirtSelect';
import ClubSelect from './ClubSelect';

class VolunteerForm extends Component {

  initialState = {
    first_name: '',
    last_name: '',
    email: '',
    shirt_size: '',
    assoc_clubs: '',
    short_answer: '',
    year: ''
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
            <textarea rows="5" cols="50" className="form__group__textarea" id="short_answer" name="short_answer" type="text" onChange={this.handleOnChange} value={this.state.short_answer} maxLength="500" required/>
            <label className={this.state.short_answer ? "form__group__label" : "inactive form__group__label"} htmlFor="short_answer">Why do you want to volunteer at CruzHacks 2019?* (Max 500 chars)</label>
            <span className="form__group__charcount">Character count: {this.state.short_answer.length}</span>  
          </div>
          <ClubSelect handler={this.grabState} />
          <TShirtSelect handler={this.grabState} />
          <input className="form__submit" type="submit" value="Submit Application"/>
        </form>
      </div>
    );
  }
}

export default VolunteerForm;
