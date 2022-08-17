import React, {Component} from 'react';
import NavBar from "./NavBar";
import NavBarTwo from "./NavBarTwo";
class App extends Component {
  render() {
    return (
      <div>
        <NavBar>
          <span>aaa</span>
          <strong>bbb</strong>
          <a href="https://www.baidu.com">baidu</a>
        </NavBar>
        <NavBarTwo
          leftSlot={<span>aaa</span>}
          centerSlot={<strong>bbb</strong>}
          rightSlot={<a href="https://www.baidu.com">baidu</a>}/>
      </div>
    );
  }
}

export default App;
