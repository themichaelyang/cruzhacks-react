import React, {Component} from 'react';

class Availability extends Component {

  constructor(props) {
    super(props)
    this.state = {
      availability: ''
    }
  }

  changeValue = (event) => {
    this.setState({availability: event.target.dataset.availability}, function() {
      this.props.handler({available: this.state.availability === 'Yes' ? true: false})
    })
  }

  render() {
    return (
      <div className="availability">        
        <h2 className="availability__title">Will you be free from 12:00 - 2:00 pm on Sunday January 20th, 2019?</h2>
        <div className="availability__select">
          <span className={this.state.availability === "Yes" ? "availability__select__option active" : "availability__select__option"} data-availability="Yes" onClick={this.changeValue}>Yes</span>
          <span className={this.state.availability === "No" ? "availability__select__option active" : "availability__select__option"} data-availability="No" onClick={this.changeValue}>No</span>           
          <input type="hidden" name="availability" className="availability__value" onChange={this.props.handler} value={this.state.availability}/>
        </div>        
      </div>
    );
  }

}

export default Availability;
