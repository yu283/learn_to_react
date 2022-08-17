import React, {PureComponent} from 'react';
import {EventEmitter} from 'events'

const eventBus = new EventEmitter();

class Home extends PureComponent{

  constructor(props) {
    super(props);
    this.state = {
      msg: 'aaa'
    }
  }


  componentDidMount() {
    eventBus.on('sayHello',this.handleSyaHello.bind(this))
  }

  componentWillUnmount() {
    eventBus.removeListener('sayHello',this.handleSyaHello)
  }

  handleSyaHello(msg1,num) {
    console.log(msg1)
    console.log(num)
    this.change(msg1)
  }

  change(msg=123) {
    this.setState({
      msg:msg
    })
  }

  render() {
    return (
      <div>
        Home
        {this.state.msg}
        <button onClick={event => this.change()}> change</button>
      </div>
    );
  }

}

class Profile extends PureComponent {

  render() {
    return (
      <div>
        Profile
        <button onClick={event => this.emitEvent()}>Profile</button>
      </div>
    );
  }
  emitEvent() {
    eventBus.emit('sayHello','Hello',123)
  }

}

class App extends PureComponent {
  render() {
    return (
      <div>
        <Home/>
        <Profile/>
      </div>
    );
  }
}

App.propTypes = {};

export default App;
