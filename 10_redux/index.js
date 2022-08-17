import store from "./store/index.js";
import {addAction, decAction, incAction, subAction} from "./store/actionCreators.js";

//监听
store.subscribe(() => {
  console.log(store.getState())
})


store.dispatch(addAction(10))
store.dispatch(addAction(10))
store.dispatch(addAction(10))
store.dispatch(subAction(12))
store.dispatch(subAction(12))
store.dispatch(incAction())
store.dispatch(incAction())
store.dispatch(incAction())
store.dispatch(incAction())
store.dispatch(decAction())
store.dispatch(decAction())
store.dispatch(decAction())
