import React, {Component} from "react";

class Cpn extends Component {
  componentWillUnmount() {
    // clearInterval(this.timer)
    console.log('componentWillUnmount')
  }

  render() {
    return (
      <div>
        <h2>Cpn</h2>
      </div>
    );
  }

}


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      message: '你好 AYU',
      isShow: true
    }
    console.log('constructor')
  }
  /*componentDidMount() 方法会在组件已经被渲染到 DOM 中后运行，所以，最好在这里设置计时器：*/
  componentDidMount() {
    /*this.timer = setInterval(() => {
      this.increment()
    },100)*/
    console.log('componentDidMount')
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log('shouldComponentUpdate')
    return true
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(prevProps, prevState, snapshot)
    console.log('componentDidUpdate')
  }
  componentDidCatch(error, errorInfo) {
    console.log('componentDidCatch')
  }

  render() {
    console.log('render')
    return (
      <div>
        <h1>{this.state.message}</h1>
        <h2>当前计数:{this.state.counter}</h2>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        <hr/>
        <button onClick={this.changeIsShow}>点我切换</button>
        {this.state.isShow && <Cpn/>}
      </div>
    )
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
  changeIsShow = () => {
    this.setState({
      isShow: !this.state.isShow
    })
  }
}
