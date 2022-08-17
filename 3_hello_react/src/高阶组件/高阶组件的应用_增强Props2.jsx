import React, {createContext, PureComponent} from 'react';

const UserContext = createContext({
  nickname: 'default',
  level: -1,
  region: 'China'
})

function enhanceContextComponent(WrapperComponent) {
  return props => {
    return (
      <UserContext.Consumer>
        {
          user => {
            return <WrapperComponent {...props} {...user}/>
          }
        }
      </UserContext.Consumer>
    )
  }
}

class Home extends PureComponent {

  render() {
    return (
      <UserContext.Consumer>
        {
          user => {
            return (
              <div>
                <h2>Home</h2>
                <h2>{user.nickname}:{user.level}:{user.region}</h2>
                h2
              </div>
            )
          }
        }
      </UserContext.Consumer>
    );
  }
}

class About extends PureComponent {

  render() {
    return (
      <div>
        <h2>About</h2>
        <h2>{this.props.nickname}:{this.props.level}:{this.props.region}</h2>
      </div>
    );
  }
}

const ContextAbout = enhanceContextComponent(About)


class App extends PureComponent {
  render() {
    return (
      <div>
        App
        <UserContext.Provider value={{
          nickname: 'RHYAYU',
          level: 122,
          region: 'AM',
          age: 18
        }}>
          <Home/>
          <ContextAbout/>
        </UserContext.Provider>
      </div>
    );
  }
}


export default App;
