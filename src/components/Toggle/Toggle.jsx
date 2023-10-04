import { Component } from 'react';

class Toggle extends Component {
  state = { visible: false };

  toggle = () => {
    this.setState(prevState => ({ visible: !prevState.visible }));
  };

  render() {
    const { visible } = this.state;
    const { children } = this.props;

    return (
      <div>
        <button onClick={this.toggle}>{visible ? 'Hide' : 'Show'}</button>
        {visible && children}
      </div>
    );
  }
}

export { Toggle };
