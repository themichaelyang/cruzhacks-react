import React, { Component } from 'react';

class GraduationSelect extends Component {

  constructor(props) {
    super(props)
    this.state = {
      grad_year: ''
    }
  }

  changeValue = (event) => {
    this.setState({grad_year: parseInt(event.target.dataset.grad_year, 10)}, function() {
      this.props.handler({grad_year: this.state.grad_year})
    })
  }

  render() {
    return (
      <div className="graduation">        
        <h2 className="graduation__title">What is your graduation year?</h2>
        <div className="graduation__select">
          <span className={this.state.grad_year === 2019 ? "graduation__select__option active" : "graduation__select__option"} data-grad_year="2019" onClick={this.changeValue}>2019</span>
          <span className={this.state.grad_year === 2020 ? "graduation__select__option active" : "graduation__select__option"} data-grad_year="2020" onClick={this.changeValue}>2020</span>
          <span className={this.state.grad_year === 2021 ? "graduation__select__option active" : "graduation__select__option"} data-grad_year="2021" onClick={this.changeValue}>2021</span>
          <span className={this.state.grad_year === 2022 ? "graduation__select__option active" : "graduation__select__option"} data-grad_year="2022" onClick={this.changeValue}>2022</span>
          <input type="hidden" name="grad_year" className="graduation__value" onChange={this.props.handler} value={this.state.grad_year}/>
        </div>        
      </div>
    );
  }
}

export default GraduationSelect;
