import usersReducers from "../reducer/userReducer";
import { applyMiddleware, compose, createStore } from "redux";
import { getFirebase } from "react-redux-firebase";
import { getFirestore, reduxFirestore } from 'redux-firestore';
import thunk from "redux-thunk";
import firebase from "../firebase/config";


const store = createStore(usersReducers ,compose  ,( applyMiddleware(thunk.withExtraArgusment({ getFirebase, getFirestore }),
reactReduxFirebase(firebase),
reduxFirestore(firestore)
,)))

export default store;
