import React, {Component} from 'react';

//创建Context对象
const UserContext = React.createContext({
  nickName: 'aaa',
  level: -1
})

// Header.contextType = UserContext

function Header(props) {
  return (
    <UserContext.Consumer>
      {
        value => {
          return (
            <div>
              <h2>用户昵称:{value.nickName}</h2>
              <h2>用户等级:{value.level}</h2>
            </div>
          )
        }
      }
    </UserContext.Consumer>
  )
}

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

class AppFunContext extends Component {
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

export default AppFunContext;
