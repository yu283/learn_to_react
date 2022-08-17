import React, {PureComponent} from 'react';
import './App.css'

import {
  BrowserRouter,
  NavLink,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Profile from "./pages/profile";
import User from "./pages/user";
import NoMatch from "./pages/noMatch";
import Login from "./pages/login";


function AboutHistory(props) {
  return <h2>AboutHistory</h2>
}
function AboutCulture(props) {
  return <h2>AboutCulture</h2>
}
function AboutContact(props) {
  return <h2>AboutContact</h2>
}
function JoinUs(props) {
  return <h2>JoinUs</h2>
}


class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      links: [
        {to: '/',title: '首页'},
        {to: '/about',title: '关于'},
        {to: '/profile',title: '我的'}
      ]
    }
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          {/*<NavLink style={({isActive}) => {
            return {
              color: isActive? 'red': ''
            }
          }} to={'/'} >首页</NavLink>
          <NavLink style={({isActive}) => {
            return {
              color: isActive? 'red': ''
            }
          }} to={'/about'}>关于</NavLink>
          <NavLink style={({isActive}) => {
            return {
              color: isActive? 'red': ''
            }
          }} to={'/profile'}>我的</NavLink>*/}
          <NavLink className={({isActive}) => isActive?'red':''}  to={'/'} >首页</NavLink>
          <NavLink  to={'/about'}>关于</NavLink>
          <NavLink  to={'/profile'}>我的</NavLink>
          <NavLink  to={'/abc'}>abc</NavLink>
          <NavLink  to={'/user'}>我的</NavLink>
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}>

                <Route path={'/about/'} element={<AboutHistory/>}/>
                <Route path={'culture'} element={<AboutCulture/>}/>
                <Route path={'contact'} element={<AboutContact/>}/>
                <Route path={'joinus'} element={<JoinUs/>}/>

            </Route>
            <Route path='/profile' element={<Profile/>}/>
            {/*<Route path="/:id" element={<User/>}/>*/}
            <Route path={'/user'} element={<User/>}></Route>
            <Route path={'/abc'} element={<Navigate to={'/login'}/>}/>
            <Route path={'/login'} element={<Login/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}


export default App;
