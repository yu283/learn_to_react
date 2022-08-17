import React, {Component} from 'react';

class SonCpn extends Component {

  render() {
    const {btnClick} = this.props
    return (
      <div>
        <button onClick={btnClick}>+1</button>
      </div>
    );
  }
}

class AppClassSToF extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    }
  }

  render() {
    return (
      <div>
        <h2>当前计数 {this.state.counter}</h2>
        <SonCpn btnClick={this.increment}/>
        <SonCpn btnClick={this.decrement}/>
      </div>
    );
  }

  increment = () => {
    this.setState({
      counter: this.state.counter + 1
    })
  }
  decrement = () => {
    this.setState({
      counter: this.state.counter - 1
    })
  }
}

export default AppClassSToF;
