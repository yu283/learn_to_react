import React, {Component} from 'react';

class ChildCpn extends Component{

  render() {
    const {name, age, height} = this.props
    return (
      <div>
        <h2>子组件展示数据:{`${name} ${age} ${height}`}</h2>
      </div>
    );
  }
}

class AppClassFToS extends Component {
  render() {
    return (
      <div>
        <ChildCpn name="kobe" age="18" height="175"/>
        <ChildCpn name="rhy" age="18" height="175"/>
      </div>
    );
  }
}

export default AppClassFToS;
