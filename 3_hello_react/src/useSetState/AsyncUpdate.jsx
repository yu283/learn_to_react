import React, {Component} from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Ayu'
    }
  }

  render() {
    const {message} = this.state
    return (
      <div>
        当前：{message}
        <button onClick={() => this.changeText()}>+1</button>
      </div>
    );
  }
  changeText() {
    //setState是异步更新的
    /*
    * 设计为异步的原因：
    * 1.提高性能，获取多个更新，进行批量的更新
    * 2.如果同步更新了state,
    * */
    this.setState({
      message: '阿宇'
    },() => {
      //可以在这里获取更新后的数据
      console.log(this.state.message)
    })
    console.log(this.state.message)
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    //方式2：可以在这里获取更新后的state
    console.log('componentDidUpdate', this.state.message)
  }
}

export default App;
