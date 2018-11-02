import React, { Component } from 'react';

class TShirtSelect extends Component {

  constructor(props) {
    super(props)
    this.state = {
      shirt: ''
    }
  }

  changeValue = (event) => {
    this.setState({shirt: event.target.dataset.shirt}, function() {
      this.props.handler({shirt: this.state.shirt})
    })
  }

  render() {
    return (
      <div className="shirt">        
        <h2 className="shirt__title">What's your T-Shirt size? (Unisex)</h2>
        <div className="shirt__select">
          <span className={this.state.shirt == "XS" ? "shirt__select__option active" : "shirt__select__option"} data-shirt="XS" onClick={this.changeValue}>XS</span>
          <span className={this.state.shirt == "S" ? "shirt__select__option active" : "shirt__select__option"} data-shirt="S" onClick={this.changeValue}>S</span>   
          <span className={this.state.shirt == "M" ? "shirt__select__option active" : "shirt__select__option"} data-shirt="M" onClick={this.changeValue}>M</span>   <span className={this.state.shirt == "L" ? "shirt__select__option active" : "shirt__select__option"} data-shirt="L" onClick={this.changeValue}>L</span>
          <span className={this.state.shirt == "XL" ? "shirt__select__option active" : "shirt__select__option"} data-shirt="XL" onClick={this.changeValue}>XL</span>   
          <span className={this.state.shirt == "XXL" ? "shirt__select__option active" : "shirt__select__option"} data-shirt="XXL" onClick={this.changeValue}>XXL</span>                   
          <input type="hidden" name="shirt" className="shirt__value" onChange={this.props.handler} value={this.state.race}/>
        </div>        
      </div>
    );
  }
}

export default TShirtSelect;
