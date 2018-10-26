import React, {Component} from 'react';

class VolunteerForm extends Component {
  render() {
    return (
      <div className="form">
        <h2 className="form__title">Volunteer Application</h2>
        <form action="#" className="hacker__form">
          <input type="text" className="form__input" name="firstname" placeholder="firstname" required/>
          <input type="text" className="form__input" name="lastname" placeholder="lastname" required/>
          <input type="email" className="form__input" name="email" placeholder="email" required/>
          <input type="tel" className="form__input" name="phone" placeholder="phone number"/>
          <input type="submit" className="form__submit"/>                
        </form>
      </div>
    );
  }
}

export default VolunteerForm;
