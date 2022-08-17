import React from "react";
import {connect} from "../utils/connect";
import {addAction, incAction} from "../store/actionCreators";

function Home(props) {
  return (
    <div>
      <h1>Home</h1>
      <h2>当前计数:{props.counter}</h2>
      <button onClick={event => props.increment()}>-1</button>
      <button onClick={event => props.addNumber(5)}>-5</button>
    </div>
  );

}


export default connect((state) => {
  return {
    counter: state.counter
  }
}, (dispatch) => ({

  increment: () => {
    dispatch(incAction())
  },
  addNumber: (num) => {
    dispatch(addAction(num))
  }
}))(Home);
