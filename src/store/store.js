import usersReducers from "../reducer/userReducer";
import { createStore, compose, applyMiddleware } from "redux";
import { getFirebase, reduxReactFirebase } from "react-redux-firebase";
import { getFirestore, reduxFirestore } from "redux-firestore";
import thunk from "redux-thunk";
import firebase from "../Firebase/config";

var store = createStore(
  usersReducers,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reduxReactFirebase(firebase),
    reduxFirestore(getFirestore),
));
export default store;
