import React, { Component } from 'react';

class AvailabilitySelect extends Component {

  constructor(props) {
    super(props)
    this.state = {
      availability: new Set()
    }
  }

  changeValue = (event) => {
    let availability = event.target.dataset.availability
    let set = this.state.availability

    if (set.has(availability)) {
      set.delete(availability)
    } else {
      set.add(availability)
    }
    this.setState({availability: set}, function() {
      this.props.handler({availability: [...this.state.availability].join(',')})
    })
  }

  render() {
    return (
      <div className="avail">        
        <h2 className="avail__title">Please select your available time slots</h2>
        <div className="avail__select">
          <div className="avail__col">
            <span className="avail__col__title">Friday</span>
            <span className={this.state.availability.has("fri:5pm-8pm") ? "avail__col__option active" : "avail__col__option"} data-availability="fri:5pm-8pm" onClick={this.changeValue}>5pm-8pm</span>
            <span className={this.state.availability.has("fri:8pm-12am") ? "avail__col__option active" : "avail__col__option"} data-availability="fri:8pm-12am" onClick={this.changeValue}>8pm-12am</span>
          </div>
          <div className="avail__col">
            <span className="avail__col__title">Saturday</span>
            <span className={this.state.availability.has("sat:12am-4am") ? "avail__col__option active" : "avail__col__option"} data-availability="sat:12am-4am" onClick={this.changeValue}>12am-4am</span>
            <span className={this.state.availability.has("sat:11am-3pm") ? "avail__col__option active" : "avail__col__option"} data-availability="sat:11am-3pm" onClick={this.changeValue}>11am-3pm</span>
            <span className={this.state.availability.has("sat:3pm-6pm") ? "avail__col__option active" : "avail__col__option"} data-availability="sat:3pm-6pm" onClick={this.changeValue}>3pm-6pm</span>
            <span className={this.state.availability.has("sat:6pm-9pm") ? "avail__col__option active" : "avail__col__option"} data-availability="sat:6pm-9pm" onClick={this.changeValue}>6pm-9pm</span>
            <span className={this.state.availability.has("sat:9pm-12pm") ? "avail__col__option active" : "avail__col__option"} data-availability="sat:9pm-12pm" onClick={this.changeValue}>9pm-12pm</span>
          </div>
          <div className="avail__col">
            <span className="avail__col__title">Sunday</span>
            <span className={this.state.availability.has("sun:12am-4am") ? "avail__col__option active" : "avail__col__option"} data-availability="sun:12am-4am" onClick={this.changeValue}>12am-4am</span>
            <span className={this.state.availability.has("sun:4am-7am") ? "avail__col__option active" : "avail__col__option"} data-availability="sun:4am-7am" onClick={this.changeValue}>4am-7am</span>
            <span className={this.state.availability.has("sun:7am-10am") ? "avail__col__option active" : "avail__col__option"} data-availability="sun:7am-10am" onClick={this.changeValue}>7am-10am</span>
            <span className={this.state.availability.has("sun:11am-2pm") ? "avail__col__option active" : "avail__col__option"} data-availability="sun:11am-2pm" onClick={this.changeValue}>11am-2pm</span>
            <span className={this.state.availability.has("sun:2pm-4pm") ? "avail__col__option active" : "avail__col__option"} data-availability="sun:2pm-4pm" onClick={this.changeValue}>2pm-4pm</span>
          </div>
          {/* <span className={this.state.avail.has("IEE") ? "avail__select__option active" : "avail__select__option"} data-avail="IEE" onClick={this.changeValue}>IEE</span>
          <span className={this.state.avail.has("ACM") ? "avail__select__option active" : "avail__select__option"} data-avail="ACM" onClick={this.changeValue}>ACM</span>
          <span className={this.state.avail.has("Formula Slug") ? "avail__select__option active" : "avail__select__option"} data-avail="Formula Slug" onClick={this.changeValue}>Formula Slug</span>
          <span className={this.state.avail.has("Gesher Group") ? "avail__select__option active" : "avail__select__option"} data-avail="Gesher Group" onClick={this.changeValue}>Gesher Group</span> */}
          <input type="hidden" name="avail" className="avail__value" onChange={this.props.handler}/>
        </div>        
      </div>
    );
  }
}

export default AvailabilitySelect;
