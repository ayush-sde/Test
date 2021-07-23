import { put, takeEvery } from 'redux-saga/effects'

const delay = (ms) => new Promise(res => setTimeout(res, ms))

  function* incrementAsync() {
    yield console.log("wait");
    yield delay(2000)
    yield put({ type: 'Increment' })
  }

  function* watchIncrementAsync() {
    yield takeEvery('INCREMENT_ASYNC', incrementAsync)
  }

  export default function* rootSaga() {
    yield watchIncrementAsync() 
  }