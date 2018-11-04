import React, { Component } from 'react';

class SkillSelect extends Component {

  constructor(props) {
    super(props)
    this.state = {
      skill: new Set()
    }
  }

  changeValue = (event) => {
    let selectedSkill = event.target.dataset.skill
    let set = this.state.skill

    if (set.has(selectedSkill)) {
      set.delete(selectedSkill)
    } else {
      set.add(selectedSkill)
    }
    this.setState({skill: set}, function() {
      this.props.handler({mentor_field: [...this.state.skill].join(',')})
    })
  }

  render() {
    return (
      <div className="skill">        
        <h2 className="skill__title">What skills can you mentor? Please select all that apply.</h2>
        <div className="skill__select">
          <span className={this.state.skill.has("JavaScript") ? "skill__select__option active" : "skill__select__option"} data-skill="JavaScript" onClick={this.changeValue}>JavaScript</span>
          <span className={this.state.skill.has("HTML") ? "skill__select__option active" : "skill__select__option"} data-skill="HTML" onClick={this.changeValue}>HTML</span>
          <span className={this.state.skill.has("CSS") ? "skill__select__option active" : "skill__select__option"} data-skill="CSS" onClick={this.changeValue}>CSS</span>
          <span className={this.state.skill.has("ReactJS") ? "skill__select__option active" : "skill__select__option"} data-skill="ReactJS" onClick={this.changeValue}>ReactJS</span>
          <span className={this.state.skill.has("AngularJs") ? "skill__select__option active" : "skill__select__option"} data-skill="AngularJs" onClick={this.changeValue}>AngularJs</span>
          <span className={this.state.skill.has("NodeJS") ? "skill__select__option active" : "skill__select__option"} data-skill="NodeJS" onClick={this.changeValue}>NodeJS</span>
          <span className={this.state.skill.has("Java") ? "skill__select__option active" : "skill__select__option"} data-skill="Java" onClick={this.changeValue}>Java</span>
          <span className={this.state.skill.has("Python") ? "skill__select__option active" : "skill__select__option"} data-skill="Python" onClick={this.changeValue}>Python</span>
          <span className={this.state.skill.has("Flask") ? "skill__select__option active" : "skill__select__option"} data-skill="Flask" onClick={this.changeValue}>Flask</span>
          <span className={this.state.skill.has("Django") ? "skill__select__option active" : "skill__select__option"} data-skill="Django" onClick={this.changeValue}>Django</span>
          <span className={this.state.skill.has("AWS") ? "skill__select__option active" : "skill__select__option"} data-skill="AWS" onClick={this.changeValue}>AWS</span>
          <span className={this.state.skill.has("Alexa") ? "skill__select__option active" : "skill__select__option"} data-skill="Alexa" onClick={this.changeValue}>Alexa</span>
          <span className={this.state.skill.has("iOS") ? "skill__select__option active" : "skill__select__option"} data-skill="iOS" onClick={this.changeValue}>iOS</span>
          <span className={this.state.skill.has("DevOps") ? "skill__select__option active" : "skill__select__option"} data-skill="DevOps" onClick={this.changeValue}>DevOps</span>
          <span className={this.state.skill.has("Machine Learning") ? "skill__select__option active" : "skill__select__option"} data-skill="Machine Learning" onClick={this.changeValue}>Machine Learning</span>
          <span className={this.state.skill.has("Other") ? "skill__select__option active" : "skill__select__option"} data-skill="Other" onClick={this.changeValue}>Other</span>
          <input type="hidden" name="skill" className="skill__value" onChange={this.props.handler}/>
        </div>        
      </div>
    );
  }
}

export default SkillSelect;
