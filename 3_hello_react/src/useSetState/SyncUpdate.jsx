import React, {Component} from 'react';

class App extends Component {
  state = {
    message: 'wwww'
  }

  render() {
    const {message} = this.state
    return (
      <div>
        当前：{message}
        <button onClick={() => this.changeText()}>+1</button>
        <button id="btn">改变文本</button>
      </div>
    );
  }

  componentDidMount() {
    const btn = document.getElementById('btn');
    btn.addEventListener('click',() => {
      this.setState({
        message: '阿宇'
      },() => {
        console.log(this.state.message)
      })
      console.log('componentDidMount',this.state.message)
    })
  }

  changeText() {
    //这样会让setState变为同步
    setTimeout(() => {
      this.setState({
        message: '阿宇'
      },() => {
        console.log(this.state.message)
      })
      console.log(this.state.message)
    },)
  }
}

export default App;
