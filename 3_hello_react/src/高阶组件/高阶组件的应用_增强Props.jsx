import React, { PureComponent} from 'react';


function enhanceRegComponent(WrappedComponent) {
  return props => {
    return <WrappedComponent {...props} region="China"/>
  }
}

class Home extends PureComponent {

  render() {
    return (
      <div>
        <h2>Home</h2>
        <h2>{this.props.nickName}:{this.props.level}:{this.props.region}</h2>
      </div>
    );
  }
}

class About extends PureComponent {

  render() {
    return (
      <div>
        <h2>About</h2>
        <h2>{this.props.nickName}:{this.props.level}:{this.props.region}</h2>
      </div>
    );
  }
}

const EnhanceHome = enhanceRegComponent(Home)
const EnhanceAbout = enhanceRegComponent(About)


class App extends PureComponent {
  render() {
    return (
      <div>
        App
        <EnhanceHome nickName="rhy" level={999}/>
        <EnhanceAbout nickName="rhy" level={999}/>
      </div>
    );
  }
}

App.displayName = 'RENHY'

export default App;
