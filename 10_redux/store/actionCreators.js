import {ADD_NUMBER, DECREMENT, INCREMENT, SUB_NUMBER} from "./constants.js";

export const addAction = num => ({
  type: ADD_NUMBER,
  num
})


export const subAction = (num) => {
  return {
    type: SUB_NUMBER,
    num
  }
}

export const incAction = () =>({
  type: INCREMENT
})

export const decAction = () => ({
  type: DECREMENT
})
