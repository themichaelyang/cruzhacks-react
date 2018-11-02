import React, {Component} from 'react';
import TShirtSelect from '../TShirtSelect';
import ClubSelect from './ClubSelect';

class VolunteerForm extends Component {

  initialState = {
    firstname: '',
    lastname: '',
    email: '',
    shirt: '',
    clubs: '',
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
            <input className="form__group__input" id="firstname" name="firstname" type="text" onChange={this.handleOnChange} value={this.state.firstname} required/>
            <label className={this.state.firstname ? "form__group__label" : "inactive form__group__label"} htmlFor="firstname">Firstname</label>
          </div>
          <div className="form__group">
            <input className="form__group__input" id="lastname" name="lastname" type="text" onChange={this.handleOnChange} value={this.state.lastname} required/>
            <label className={this.state.lastname ? "form__group__label" : "inactive form__group__label"} htmlFor="lastname">Lastname</label>
          </div>
          <div className="form__group">
            <input className="form__group__input" id="email" name="email" type="email" onChange={this.handleOnChange} value={this.state.email} required/>
            <label className={this.state.email ? "form__group__label" : "inactive form__group__label"} htmlFor="email">UCSC Email</label>
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
