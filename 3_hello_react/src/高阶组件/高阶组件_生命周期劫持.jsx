import React, {PureComponent} from 'react';



class Home extends PureComponent{
  render() {
    return <h2>Home</h2>
  }
}

class About extends PureComponent{
  render() {
    return <h2>About</h2>
  }
}

function enhanceLifeComponent(Wrapper) {
  return class extends PureComponent{
    UNSAFE_componentWillMount() {
      this.brginTime = Date.now()
    }

    render() {
      return <Wrapper/>
    }
    componentDidMount() {
      this.endTime = Date.now()
      console.log(this.endTime - this.brginTime)
    }
  }
}

const EnhanceAbout = enhanceLifeComponent(About)


class App extends PureComponent {
  render() {
    return (
      <div>
        <Home/>
        <EnhanceAbout/>
      </div>
    );
  }
}

App.propTypes = {};

export default App;
