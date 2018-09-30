import React, {Component} from 'react';

class Question extends Component {
  render() {
    return (
      <div className="question-bg">
        <div className="question">
          <span className="question__title">{this.props.title}</span>
          <p className="question__answer">{this.props.answer}</p>
        </div>
      </div>
    );
  }
}

export default Question;
