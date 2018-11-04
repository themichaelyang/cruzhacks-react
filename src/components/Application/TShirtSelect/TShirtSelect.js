import React, { Component } from 'react';

class TShirtSelect extends Component {

  constructor(props) {
    super(props)
    this.state = {
      shirt_size: ''
    }
  }

  changeValue = (event) => {
    this.setState({shirt_size: event.target.dataset.shirt_size}, function() {
      this.props.handler({shirt_size: this.state.shirt_size})
    })
  }

  render() {
    return (
      <div className="shirt">        
        <h2 className="shirt__title">What's your T-Shirt size? (Unisex)</h2>
        <div className="shirt__select">
          <span className={this.state.shirt_size == "XS" ? "shirt__select__option active" : "shirt__select__option"} data-shirt_size="XS" onClick={this.changeValue}>XS</span>
          <span className={this.state.shirt_size == "S" ? "shirt__select__option active" : "shirt__select__option"} data-shirt_size="S" onClick={this.changeValue}>S</span>   
          <span className={this.state.shirt_size == "M" ? "shirt__select__option active" : "shirt__select__option"} data-shirt_size="M" onClick={this.changeValue}>M</span>   <span className={this.state.shirt_size == "L" ? "shirt__select__option active" : "shirt__select__option"} data-shirt_size="L" onClick={this.changeValue}>L</span>
          <span className={this.state.shirt_size == "XL" ? "shirt__select__option active" : "shirt__select__option"} data-shirt_size="XL" onClick={this.changeValue}>XL</span>   
          <span className={this.state.shirt_size == "XXL" ? "shirt__select__option active" : "shirt__select__option"} data-shirt_size="XXL" onClick={this.changeValue}>XXL</span>                   
          <input type="hidden" name="shirt_size" className="shirt__value" onChange={this.props.handler} value={this.state.shirt_size}/>
        </div>        
      </div>
    );
  }
}

export default TShirtSelect;
