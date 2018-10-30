import React, {Component} from 'react';
import logo from 'assets/logo.svg';
import hero from 'assets/hero.svg';
import axios from 'axios';
import Recaptcha from 'react-google-invisible-recaptcha';

class Hero extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
        email: '',
        submit: 'Submit'
    }
    this.recapatchaValid = this.recapatchaValid.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}
  /**
   * Email input state updater
   */
  handleChange(event) {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  }
  
  /**
   * AJAX function to Google Sheets
   */
  handleSubmit (event) {
    axios.get('https://script.google.com/macros/s/AKfycbwK0fis0dLzeu0Yf3A27oKrxvAC_ZUafgPHiaWqM-Dgmdk-g20/exec', {
      params: {
        email: this.state.email,
      }
    })
    .then(function (response) {
      console.log(response);
      this.setState({submit: 'Submitting!'})
    })
    .catch(function (error) {
      console.log(error);
      alert(error);
    });
    this.setState({submit: 'Submitted!', email: ''})
  }

  render() {
    return (
      <div className="hero">
        <img className="hero__logo" src={logo} alt="logo"/>
        <h1 className="hero__title">CruzHacks 2019</h1>
        <span className="hero__text">Create something that makes a difference.</span>
        <span className="hero__text__alt">Jan 18-20, 2019 @ Stevenson Event Center</span>
        <div className="hero__button-container">
          <a href="#" className="hero__button not-allowed">Apps open in Nov</a>
          <a href="mailto:amit@cruzhacks.com" className="hero__button" target="_blank">Sponsoring?</a>
        </div>
        <span className="hero__text">Subscribe to updates:</span>
        <div className="hero__updates">
        <form onSubmit={this.recapatchaValid} id="emailForm">
          <div className="hero__form-group">
            <input type="email" className="form-control" name="email" id="email" value={this.state.email} onChange={this.handleChange} required/>
            <label for="email" className={this.state.email ? "label-hidden" : "animated-label"}>Email</label>
          </div>
          <button type={"submit"} className={"hero__button-small"}>
              {this.state.submit}
            </button>
            <div className="hidden">
              <Recaptcha              
                ref={ ref => this.recaptcha = ref }
                sitekey="6LcCvHYUAAAAANepSyd4Mt37dg9nqxxSKMb4Ic5p"
                onResolved={  this.handleSubmit } 
              />
            </div>
          </form>
        </div>
        <img src={hero} alt="" className="hero__bg"/>
      </div>
    );
  }
  recapatchaValid (event) {
    event.preventDefault();
    this.setState({submit: 'Submitting!'})
    console.dir(this.recaptcha)
    this.recaptcha.execute();
    console.log(this.recaptcha.getResponse);
  }  
}

export default Hero;
