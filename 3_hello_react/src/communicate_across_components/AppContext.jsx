import React, {Component} from 'react';

//创建Context对象
const UserContext = React.createContext({
  nickName: 'aaa',
  level: -1
})

class Header extends Component{

  render() {
    const {nickName,level} = this.context
    return (
      <div>
        <h2>用户昵称:{nickName}</h2>
        <h2>用户等级:{level}</h2>
      </div>
    );
  }

}

Header.contextType = UserContext

/*function Header(props) {
  return (
    <div>
      <h2>用户昵称:</h2>
      <h2>用户等级:</h2>
    </div>
  )
}*/

function Profile(props) {
  return (
    <div>
      <Header/>
      <ul>
        <li>设置1</li>
        <li>设置2</li>
        <li>设置3</li>
        <li>设置4</li>
      </ul>
    </div>
  )
}

class AppContext extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nickName: 'renhy',
      level: 99
    }
  }

  render() {
    return (
      <div>
        <UserContext.Provider value={{...this.state}}>
          <Profile/>
        </UserContext.Provider>
      </div>
    );
  }
}

export default AppContext;
