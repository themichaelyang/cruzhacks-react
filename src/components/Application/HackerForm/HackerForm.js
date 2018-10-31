import React, {Component} from 'react';

class HackerForm extends Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  handleSubmit = (event) => {
    console.log(event)
  }

  handleOnChange = (event) => {
    let newState = {}
    newState[event.target.name] = event.target.value
    this.setState(newState, function() {
      console.log(this.state)
    })
  }

  render() {
    return (
      <div className="form-container">
        <h2 className="form-container__title">Hacker Application</h2>
        <form className="form">
        <div className="form__group">
          <input className="form__group__input" id="firstname" name="firstname" type="text" onChange={this.handleOnChange}/>
          <label className={this.state.firstname ? "form__group__label" : "inactive form__group__label"} htmlFor="firstname">Firstname</label>
        </div>
        <div className="form__group">
          <input className="form__group__input" id="lastname" name="lastname" type="text" onChange={this.handleOnChange}/>
          <label className="form__group__label" htmlFor="lastname">{this.state.lastname ? "" : "Lastname"}</label>
        </div>
        
        </form>
      </div>
    );
  }
}

export default HackerForm;
