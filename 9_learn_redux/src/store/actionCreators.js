import {
  ADD_NUMBER,
  CHANGE_BANNERS,
  CHANGE_RECOMMEND,
  DECREMENT,
  FETCH_HOME_MULTI_DATA,
  INCREMENT,
  SUB_NUMBER
} from "./constants.js";
import axios from "axios";

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

export const changeBannersAction  = (banners) => ({
  type: CHANGE_BANNERS,
  banners
})

export const changeRecommendAction = (recommend) => ({
  type: CHANGE_RECOMMEND,
  recommend
})


//thunk中定义的函数
export const getHomeMultiDataAction = (dispatch,getState) => {
  axios({
    url: "http://123.207.32.32:8000/home/multidata",
  }).then(res => {
    const data = res.data.data;
    dispatch(changeBannersAction(data.banner.list));
    dispatch(changeRecommendAction(data.recommend.list));
  })
}

//saga拦截的action
export const fetchHomeMultiDataAction = {
  type: FETCH_HOME_MULTI_DATA
}
