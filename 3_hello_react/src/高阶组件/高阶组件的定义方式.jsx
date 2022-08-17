import React, { PureComponent} from 'react';

class App extends PureComponent {
  render() {
    return (
      <div>
        App:{this.props.name}
      </div>
    );
  }
}

App.displayName = 'RENHY'

function enhanceComponent(WrappedComponent) {
  return class extends PureComponent{
    render() {
      return <WrappedComponent {...this.props}/>
    }
  }
}
//返回的函数式组件
function enhanceFunComponent(WrappedComponent) {
  return function (props) {
    return <WrappedComponent {...props}/>
  }
}

const EnhanceComponent = enhanceComponent(App)

export default EnhanceComponent;
