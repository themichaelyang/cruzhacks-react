import React, {Component} from 'react';

class AppSelect extends Component {
  render() {
    return (
      <div className={`appselect ${ this.props.class }`} onClick={this.props.handler} data-app={this.props.data}>
        <span className="appselect__title" data-app={this.props.data}>{this.props.name}</span>
      </div>
    );
  }
}

export default AppSelect;
