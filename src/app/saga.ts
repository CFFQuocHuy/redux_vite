import { all } from "redux-saga/effects";
import watchChangeDraft from "../features/todo/saga";

function* helloSaga() {
  console.log("Hello Sagas!");
}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([helloSaga(), watchChangeDraft()]);
}
