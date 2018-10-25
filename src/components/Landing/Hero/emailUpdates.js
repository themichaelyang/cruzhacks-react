import React, {Component} from 'react';

class emailUpdates extends Component {
  constructor (props) {
    super(props);
    this.state = {
      email: ''
    }
  }
  render() {
    return (
          <form action="post" method="post" className="emailForm">
          <div className="hero__form-group">
            <input type="text" className="form-control" name="email"  id="email"/>
            <label for="email" className="animated-label">Email</label>
          </div>
          <button type="submit" className="hero__button__small">Submit</button>
          </form>
    );
  }
}

export default emailUpdates;
