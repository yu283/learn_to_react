import React, {PureComponent} from 'react';
import {CSSTransition, TransitionGroup} from "react-transition-group";

import './TransitionGroup.css'

class TransitionGroupDemo extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      names: ['rhy1','rhy2','rhy3','rhy4']
    }
  }

  render() {
    return (
        <div>
          <TransitionGroup>
            {
              this.state.names.map((item,index) => {
                return (
                  //need key
                  <CSSTransition key={item}
                                 timeout={500}
                                 classNames="item">
                    <div>
                      {item}
                      <button onClick={event => this.removeItem(index)}>-</button>
                    </div>
                  </CSSTransition>
                )
              })
            }
          </TransitionGroup>
          <button onClick={event => this.addName()}>addName</button>
        </div>

  );
  }
  addName() {
    this.setState({
      names:[...this.state.names,'ayu']
    })
  }
  removeItem(index) {
    this.setState({
      names: this.state.names.filter((item,indey) => index!==indey
      )
    })
  }
}


export default TransitionGroupDemo;
