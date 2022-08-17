import React, {Component} from 'react';

class NavBar extends Component {
  render() {
    const slots = this.props.children
    return (
      <div className="bar">
        <div className="left">
          {slots[0]}
        </div>
        <div className="center">
          {slots[1]}
        </div>
        <div className="right">
          {slots[2]}
        </div>
      </div>
    );
  }
}

export default NavBar;
