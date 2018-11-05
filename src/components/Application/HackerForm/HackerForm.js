import React, {Component} from 'react';
import S3FileUpload from 'react-s3';

import axios from 'axios';

import GenderSelect from './GenderSelect';
import EthnicitySelect from './EthnicitySelect';
import GraduationSelect from './GraduationSelect';
import HackathonSelect from './HackathonSelect';
import TShirtSelect from '../TShirtSelect';
import Loader from 'components/Loader';


const config = {
  bucketName: process.env.REACT_APP_AWS_BUCKET_NAME,
  region: process.env.REACT_APP_AWS_REGION,
  dirName: 'resumes',
  accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY,
  secretAccessKey: process.env.REACT_APP_AWS_SECRET_KEY
}

class HackerForm extends Component { 
  initialState = {
    status: 0,
    email: '',
    first_name: '',
    last_name: '',
    age: null,
    university: '',
    grad_year: '',
    shirt_size: '',
    short_answer1: '', 
    short_answer2: '', 
    phone_number: '',
    gender: '',
    ethnicity: '',
    major: '',    
    num_hacks: '',
    github: '',     
    linkedin: '',   
    dietary_rest: '',    
    workshop_ideas: '',
    resume: '',
    resumeName: ''
  }

  resumeObj = {}

  constructor(props) {
    super(props)    
    this.state = this.initialState
  }

  handleSubmit = (event) => {
    event.preventDefault()
    if (this.state.shirt_size === '') {
      window.alert("Please select a shirt size!")
    } else if (this.resumeObj) {
      S3FileUpload.uploadFile(this.resumeObj, config)
      .then((response) => {
        this.setState({resume: response.location}, function() {
          this.setState({status: 1}, () => {
            axios({
              method: 'post',
              url: process.env.REACT_APP_REGISTRATION_ENDPOINT.concat('/attendee'),
              data: {
                email: this.state.email,
                first_name: this.state.first_name,
                last_name: this.state.last_name,
                age: this.state.age,
                university: this.state.university,
                grad_year: this.state.grad_year,
                shirt_size: this.state.shirt_size,
                short_answer1: this.state.short_answer1,
                short_answer2: this.state.short_answer2,
                phone_number: this.state.phone_number,
                gender: this.state.gender,
                ethnicity: this.state.ethnicity,
                major: this.state.major,
                num_hacks: this.state.num_hacks,
                github: this.state.github,
                linkedin: this.state.linkedin,
                dietary_rest: this.state.dietary_rest,
                workshop_ideas: this.state.workshop_ideas,
                resume: this.state.resume
              }
            }).then((response) => {
              this.setState({status: 2})
            }).catch((error) => {
              this.setState({status: 3})
            });  
          }) 
        })
      })
      .catch((error) => {
        console.log(error)
        this.setState({status: 3})
      })
    } else {
      this.setState({status: 1}, () => {
        axios({
          method: 'post',
          url: 'https://cruzhacks2019-registration-stg.herokuapp.com/register/attendee',
          data: {
            email: this.state.email,
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            age: this.state.age,
            university: this.state.university,
            grad_year: this.state.grad_year,
            shirt_size: this.state.shirt_size,
            short_answer1: this.state.short_answer1,
            short_answer2: this.state.short_answer2,
            phone_number: this.state.phone_number,
            gender: this.state.gender,
            ethnicity: this.state.ethnicity,
            major: this.state.major,
            num_hacks: this.state.num_hacks,
            github: this.state.github,
            linkedin: this.state.linkedin,
            dietary_rest: this.state.dietary_rest,
            workshop_ideas: this.state.workshop_ideas
          }
        }).then((response) => {
          this.setState({status: 2})
        }).catch((error) => {
          this.setState({status: 3})
        });  
      }) 
    }       
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

  handleFileUpload = (event) => {
    this.resumeObj = event.target.files[0]
    let name = event.target.value
    name = name.substr(name.lastIndexOf('\\') + 1)
    this.setState({resumeName: name})
  }

  render() {
    switch (this.state.status) {
      case 1: return <Loader />
      case 2: return <span className="status-success">Thanks for applying! We've received your application and will get back to you as soon as we can.</span>
      case 3: return <span className="status-error">Oops! There was an error submitting your application. Please try again and make sure you use a unique email!</span>
      default: {
        return (
          <div className="form-container">
            <h2 className="form-container__title">Hacker Application</h2>                   
            <p className="form-container__text">
              <span>Add a paragraph before the application to note our policy with picking applications, a.k.a. please take the application seriously as we have limited space in our venue. We are picking participants to ensure diversity between skill level, year, representation, etc.</span>
              <span>Sorry Greg too tired to write this rn can sum1 else do it thanks</span>
            </p>
            <form className="form" onSubmit={this.handleSubmit}>
              <div className="form__group">
                <input className="form__group__input" id="first_name" name="first_name" type="text" onChange={this.handleOnChange} value={this.state.first_name} maxLength="20" required/>
                <label className={this.state.first_name ? "form__group__label" : "inactive form__group__label"} htmlFor="first_name">Firstname*</label>
              </div>
              <div className="form__group">
                <input className="form__group__input" id="last_name" name="last_name" type="text" onChange={this.handleOnChange} value={this.state.last_name} maxLength="20" required/>
                <label className={this.state.last_name ? "form__group__label" : "inactive form__group__label"} htmlFor="last_name">Lastname*</label>
              </div>
              <div className="form__group">
                <input className="form__group__input" id="email" name="email" type="email" onChange={this.handleOnChange} value={this.state.email} maxLength="50" required/>
                <label className={this.state.email ? "form__group__label" : "inactive form__group__label"} htmlFor="email">Email*</label>
              </div>
              <div className="form__group">
                <input className="form__group__input" id="phone_number" name="phone_number" type="tel" onChange={this.handleOnChange} value={this.state.phone_number} maxLength="50" required/>
                <label className={this.state.phone_number ? "form__group__label" : "inactive form__group__label"} htmlFor="phone_number">Phone #* (for SMS notifcations)</label>
              </div>
              <div className="form__group">
                <input className="form__group__input" id="age" name="age" type="number" onChange={this.handleOnChange} max="99" required/>
                <label className={this.state.age ? "form__group__label" : "inactive form__group__label"} htmlFor="age">How old are you?*</label>
              </div>
              <div className="form__group">
                <input className="form__group__input" id="university" name="university" type="text" onChange={this.handleOnChange} value={this.state.university} maxLength="50" required/>
                <label className={this.state.university ? "form__group__label" : "inactive form__group__label"} htmlFor="university">What school do you go to?*</label>
              </div>
              <div className="form__group">
                <input className="form__group__input" id="major" name="major" type="text" onChange={this.handleOnChange} value={this.state.major} maxLength="20" />
                <label className={this.state.major ? "form__group__label" : "inactive form__group__label"} htmlFor="major">What's your major?</label>
              </div>
              <div className="form__group">
                <input className="form__group__input" id="linkedin" name="linkedin" type="text" onChange={this.handleOnChange} value={this.state.linkedin} maxLength="80"/>
                <label className={this.state.linkedin ? "form__group__label" : "inactive form__group__label"} htmlFor="linkedin">LinkedIn URL</label>
              </div>
              <div className="form__group">
                <input className="form__group__input" id="github" name="github" type="text" onChange={this.handleOnChange} value={this.state.github} maxLength="80"/>
                <label className={this.state.github ? "form__group__label" : "inactive form__group__label"} htmlFor="github">Personal Website or GitHub URL</label>
              </div>
              <div className="form__group">
                <input className="form__group__input" id="dietary_rest" name="dietary_rest" type="text" onChange={this.handleOnChange} value={this.state.dietary_rest} maxLength="50"/>
                <label className={this.state.dietary_rest ? "form__group__label" : "inactive form__group__label"} htmlFor="dietary_rest">Please list any dietary restrictions</label>
              </div>
              <div className="form__group">
                <input className="form__group__input" id="workshop_ideas" name="workshop_ideas" type="text" onChange={this.handleOnChange} value={this.state.workshop_ideas} maxLength="250"/>
                <label className={this.state.workshop_ideas ? "form__group__label" : "inactive form__group__label"} htmlFor="workshop_ideas">Are there any specific workshops you'd like to see?</label>
              </div>
              <div className="form__group">
                <label className="form__group__file" htmlFor="resume">{this.state.resumeName ? this.state.resumeName : "Upload your resume as (Firstname_Lastname.pdf)"}</label>
                <input className="form__group__input" style={{visibility: 'hidden', position: 'absolute'}} id="resume" name="resume" type="file" onChange={this.handleFileUpload} maxLength="250"/>
              </div>
              <div className="form__group">
                <textarea rows="4" cols="50" maxLength="500" className="form__group__textarea" id="short_answer1" name="short_answer1" onChange={this.handleOnChange} value={this.state.short_answer1} required/>
                <label className={this.state.short_answer1 ? "form__group__label" : "inactive form__group__label"} htmlFor="short_answer1">Why do you want to attend CruzHacks 2019?* (max 500 chars)</label>
                <span className="form__group__charcount">Character count: {this.state.short_answer1.length}</span>            
              </div>
              <div className="form__group">
                <textarea rows="4" cols="50" maxLength="500" className="form__group__textarea" id="short_answer2" name="short_answer2" onChange={this.handleOnChange} value={this.state.short_answer2} required/>
                <label className={this.state.short_answer2 ? "form__group__label" : "inactive form__group__label"} htmlFor="short_answer2">What's something you've created that you're proud of?* (max 500 chars) </label>
                <span className="form__group__charcount">Character count: {this.state.short_answer2.length}</span>    
              </div>
              <GenderSelect handler={this.grabState}/>
              <EthnicitySelect handler={this.grabState}/>
              <GraduationSelect handler={this.grabState}/>
              <HackathonSelect handler={this.grabState}/>
              <TShirtSelect handler={this.grabState}/>
              <p className="form__text">
                By submitting this application I affirm that I have read and agree to the <a href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf" target="_blank" rel="noopener noreferrer">MLH code of conduct</a> and I authorize CruzHacks to share my application information for event administration, ranking, MLH administration, pre and post-event informational emails and occasional messages about hackathons in-line with the MLH Privacy Policy.  I further agree to the terms of both the MLH Contest Terms and Conditions and the MLH Privacy policy. 
              </p>
              <input className="form__submit" type="submit" value="Submit Application"/>          
            </form>
          </div>
        )
      }
    }
  }
}

export default HackerForm;
