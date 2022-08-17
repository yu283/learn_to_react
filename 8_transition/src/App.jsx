import React, {PureComponent} from 'react';
// import CSSTransitionDemo from "./transition/CSSTransitionDemo";
// import SwitchTransitionDemo from './transition/SwitchTransitionDemo'
import TransitionGroupDemo from "./transition/TransitionGroupDemo";
class App extends PureComponent {
  render() {
    return (
      <div style={{textAlign: 'center',padding: '30px'}}>
        App
        {/*<CSSTransitionDemo/>*/}
        {/*<SwitchTransitionDemo/>*/}
        <TransitionGroupDemo/>
      </div>
    );
  }
}


export default App;
