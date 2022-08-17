import React, {Component} from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    }
  }

  render() {
    const {counter} = this.state
    return (
      <div>
        当前计数：{counter}
        <button onClick={() => this.increment()}>+1</button>
      </div>
    );
  }
  increment() {
    this.setState({
      counter: this.state.counter + 1
    })
  }
}

export default App;
