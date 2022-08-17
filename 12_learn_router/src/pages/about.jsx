import React, {PureComponent} from 'react';
import {NavLink,Outlet} from "react-router-dom";

import './about.css'



class About extends PureComponent {
  render() {
    return (
      <div>
        <h2>About</h2>
        <NavLink exact={'true'} className={({isActive}) => isActive?'good':''} to={'/about/'}>企业历史</NavLink>
        <NavLink exact={'true'} className={({isActive}) => isActive?'good':''} to={'culture'}>企业文件</NavLink>
        <NavLink exact={'true'} className={({isActive}) => isActive?'good':''} to={'contact'}>联系我们</NavLink>
        <button onClick={event => this.joinFun()}>加入我</button>
        <Outlet/>
      </div>
    );
  }

  joinFun() {
    console.log(this.props)
  }
}


export default About;
