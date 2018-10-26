import React, {Component} from 'react';

class MentorForm extends Component {
  render() {
    return (
      <div className="form">
        <h2 className="form__title">Mentor Application</h2>
        <form action="#" className="hacker__form">
          <input type="text" className="form__input" id="firstname" name="firstname" placeholder="firstname" required/>
          <input type="text" className="form__input" id="lastname" name="lastname" placeholder="lastname" required/>
          <input type="email" className="form__input" id="email" name="email" placeholder="email" required/>
          <input type="tel" className="form__input" id="phone" name="phone" placeholder="phone number"/>
          <input type="submit" className="form__submit"/>                
        </form>
      </div>
    );
  }
}

export default MentorForm;
