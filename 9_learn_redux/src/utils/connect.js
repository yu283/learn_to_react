import {PureComponent} from "react";
import store from "../store";

export function connect(mapStateToProps,mapDispatchToProps) {
  return function enhanceHOC(WrappedComponent) {
    return class extends PureComponent {
      constructor(props) {
        super(props);
        this.state = {
          storeState: mapStateToProps(store.getState())
        }
      }

      componentDidMount() {
        this.unSubscribe = store.subscribe(() => {
          this.setState({
            storeState:mapStateToProps(store.getState())
          })
        })
      }

      componentWillUnmount() {
        this.unSubscribe()
      }

      render() {
        return <WrappedComponent {...this.props}
                                 {...mapStateToProps(store.getState())}
                                 {...mapDispatchToProps(store.dispatch)}/>
      }

    }
  }
}
