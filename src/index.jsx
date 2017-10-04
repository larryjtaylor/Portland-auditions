import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import reducer from "./reducers/company-list-reducer";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import combinedReducer from "./reducers/index";
import { createStore, applyMiddleware,  compose } from "redux";
import middlewareLogger from "./middleware/middleware-logger";
import { reduxFirebase } from "react-redux-firebase";
import firebaseCredentials from "./constants/apiKeys.js";

const createStoreWithFirebaseMiddleware = compose(
  reduxFirebase(firebaseCredentials)
)(createStore);

const store = createStoreWithFirebaseMiddleware(
  combinedReducer,
  applyMiddleware(middlewareLogger)
);

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <App/>
    </HashRouter>
  </Provider>,
  document.getElementById("react-app-root")
);
