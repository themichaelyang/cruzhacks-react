import React, { Component } from 'react';

class GraduationSelect extends Component {

  constructor(props) {
    super(props)
    this.state = {
      graduation: ''
    }
  }

  changeValue = (event) => {
    this.setState({graduation: event.target.dataset.graduation}, function() {
      this.props.handler({graduation: this.state.graduation})
    })
  }

  render() {
    return (
      <div className="graduation">        
        <h2 className="graduation__title">What is your graduation year?</h2>
        <div className="graduation__select">
          <span className={this.state.graduation == "2019" ? "graduation__select__option active" : "graduation__select__option"} data-graduation="2019" onClick={this.changeValue}>2019</span>
          <span className={this.state.graduation == "2020" ? "graduation__select__option active" : "graduation__select__option"} data-graduation="2020" onClick={this.changeValue}>2020</span>
          <span className={this.state.graduation == "2021" ? "graduation__select__option active" : "graduation__select__option"} data-graduation="2021" onClick={this.changeValue}>2021</span>
          <span className={this.state.graduation == "2022" ? "graduation__select__option active" : "graduation__select__option"} data-graduation="2022" onClick={this.changeValue}>2022</span>
          <input type="hidden" name="graduation" className="graduation__value" onChange={this.props.handler} value={this.state.graduation}/>
        </div>        
      </div>
    );
  }
}

export default GraduationSelect;
