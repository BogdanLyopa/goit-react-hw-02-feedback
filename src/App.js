import React, { Component } from 'react';
import Section from './components/Section';
import FeedbackOptions from './components/FeedbackOptions';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countFeedback = event => {
    this.setState(prevState => {
      return {
        [event.target.name]: prevState[event.target.name] + 1,
      };
    });
  };
  render() {
    const options = Object.keys(this.state);
    return (
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={options}
          countFeedback={this.countFeedback}
        ></FeedbackOptions>
      </Section>
    );
  }
}
export default App;
