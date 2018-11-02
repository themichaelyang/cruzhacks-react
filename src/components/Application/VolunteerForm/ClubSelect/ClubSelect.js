import React, { Component } from 'react';

class ClubSelect extends Component {

  constructor(props) {
    super(props)
    this.state = {
      club: new Set()
    }
  }

  changeValue = (event) => {
    let club = event.target.dataset.club
    let set = this.state.club

    if (set.has(club)) {
      set.delete(club)
    } else {
      set.add(club)
    }
    this.setState({club: set}, function() {
      this.props.handler({club: this.state.club})
    })
  }

  render() {
    return (
      <div className="club">        
        <h2 className="club__title">Which UCSC clubs are you in?</h2>
        <div className="club__select">
          <span className={this.state.club.has("IEE") ? "club__select__option active" : "club__select__option"} data-club="IEE" onClick={this.changeValue}>IEE</span>
          <span className={this.state.club.has("ACM") ? "club__select__option active" : "club__select__option"} data-club="ACM" onClick={this.changeValue}>ACM</span>
          <span className={this.state.club.has("Formula Slug") ? "club__select__option active" : "club__select__option"} data-club="Formula Slug" onClick={this.changeValue}>Formula Slug</span>
          <span className={this.state.club.has("Gesher Group") ? "club__select__option active" : "club__select__option"} data-club="Gesher Group" onClick={this.changeValue}>Gesher Group</span>
          <input type="hidden" name="club" className="club__value" onChange={this.props.handler}/>
        </div>        
      </div>
    );
  }
}

export default ClubSelect;
