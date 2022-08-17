import React, {PureComponent} from 'react';
import Home from '../home'
import Profile from "../profile";
import appStyle from './style.module.css'

class App extends PureComponent {
  render() {
    return (
      <div>
        <h2 className={appStyle.title}>App</h2>
        <Home/>
        <Profile/>
      </div>
    );
  }
}


export default App;
