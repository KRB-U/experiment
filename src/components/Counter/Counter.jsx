import { Component } from 'react';
import { ButtonContainer } from './Counter.styled';
import { Value } from './Control/Value/Value';
import { Control } from './Control/Control';

class Counter extends Component {
  static defaultProps = {
    step: 1,
    initialValue: 0,
  };

  state = {
    value: this.props.initialValue,
  };

  handleIncrement = evt => {
    this.setState(prevState => {
      return { value: prevState.value + this.props.step }; //оновлює значення в об'єкті
    });
    // this.setState({ value: 10 }); //перезапис всього об'єкту
  };

  handleDecrement = evt => {
    this.setState(prevState => {
      return { value: prevState.value - this.props.step }; //оновлює значення в об'єкті
    });
  };

  render() {
    const { step } = this.props;
    const { value } = this.state;
    return (
      <>
        <ButtonContainer>
          <Value value={value}></Value>

          <Control
            step={step}
            onIncrement={this.handleIncrement}
            OnDecrement={this.handleDecrement}
          ></Control>
        </ButtonContainer>
      </>
    );
  }
}

export { Counter };
