import {ADD_NUMBER, CHANGE_BANNERS, CHANGE_RECOMMEND, DECREMENT, INCREMENT, SUB_NUMBER} from "./constants.js";

const defaultState = {
  counter: 0,
  banners: [],
  recommend: []
}

export const reducer =  (state = defaultState,action) => {
  switch (action.type) {
    case ADD_NUMBER:
      return {...state,counter: state.counter+action.num}
    case SUB_NUMBER:
      return {...state,counter: state.counter-action.num}
    case INCREMENT:
      return {...state,counter: state.counter+1}
    case DECREMENT:
      return {...state,counter: state.counter-1}
    case CHANGE_BANNERS:
      return {...state,banners: action.banners}
    case CHANGE_RECOMMEND:
      return {...state,recommend:action.recommend}
    default:
      return state
  }
}
