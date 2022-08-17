import React, {PureComponent} from 'react';
import {Route, Navigate} from "react-router-dom";

class User extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false
    }
  }

  render() {
    return this.state.isLogin ? (
      <div>
        <h2>User</h2>
        <h2>用户名:rhy</h2>
      </div>
    ): <Navigate to={'/login'}/>
  }
}


export default User;
