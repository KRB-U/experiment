import { Component } from 'react';
import { ButtonContainer, CustomSpan, btnIncDec } from './Counter.styled';

class Counter extends Component {
  static defaultProps = {
    step: 1,
  };

  handleIncrement = evt => {
    console.log('Increment button was clicked!', evt); // працює
    console.log('this.props: ', this.props); // працює
  };

  handleDecrement = evt => {
    console.log('Decrement button was clicked!', evt); // працює
    console.log('this.props: ', this.props); // працює
  };

  render() {
    const { step } = this.props;

    return (
      <ButtonContainer>
        <CustomSpan>0</CustomSpan>
        <button type="button" onClick={this.handleIncrement}>
          Increment by {step}
        </button>
        <button type="button" onClick={this.handleDecrement}>
          Decrement by {step}
        </button>
      </ButtonContainer>
    );
  }
}

export { Counter };
