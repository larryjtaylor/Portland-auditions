import { combineReducers } from "redux";
import { firebaseStateReducer as firebase } from "react-redux-firebase";
import companyList from "./company-list-reducer";

const combinedReducer = combineReducers({
  firebase,
  companyList
});

export default combinedReducer;
