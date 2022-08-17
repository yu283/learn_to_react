import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {addAction, getHomeMultiDataAction, incAction} from "../store/actionCreators";

class Home extends PureComponent{
  componentDidMount() {
    this.props.getHomeMultiData()
  }

  render() {
    const props = this.props
    return (
      <div>
        <h1>Home</h1>
        <h2>当前计数:{props.counter}</h2>
        <button onClick={event => props.increment()}>-1</button>
        <button onClick={event => props.addNumber(5)}>-5</button>
      </div>
    );
  }


}


export default connect((state) => {
  return {
    counter: state.counter,
    banners: state.banners,
    recommend: state.recommend
  }
}, (dispatch) => ({

  increment: () => {
    dispatch(incAction())
  },
  addNumber: (num) => {
    dispatch(addAction(num))
  },
  getHomeMultiData() {
    dispatch(getHomeMultiDataAction)
  }
}))(Home);
