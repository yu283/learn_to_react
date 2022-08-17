import {takeEvery, put,all} from 'redux-saga/effects'
import {
  FETCH_HOME_MULTI_DATA
} from "./constants";
import axios from "axios";
import {changeBannersAction, changeRecommendAction} from "./actionCreators";


function* fetchHomeMultiData(action) {
  const res = yield axios.get('http://123.207.32.32:8000/home/multidata')
  // yield put(changeBannersAction(res.data.data.banner.list))
  // yield put(changeRecommendAction(res.data.data.recommend.list))
  yield all([
    yield put(changeBannersAction(res.data.data.banner.list)),
    yield put(changeRecommendAction(res.data.data.recommend.list))
  ])
}



export default function* mySaga() {
  yield takeEvery(FETCH_HOME_MULTI_DATA,fetchHomeMultiData)
}
