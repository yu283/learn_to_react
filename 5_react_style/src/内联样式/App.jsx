import React, {PureComponent} from 'react';

class App extends PureComponent {
  render() {
    const pStyle = {
      color: 'orange',
      fontSize: '50px'
    }
    return (
      <div>
        <h2>我是标题</h2>
        <p style={pStyle}>我是文字描述</p>
      </div>
    );
  }
}


export default App;
