import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import counterReducer from "./features/counter/counterSlice.js";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";

const store = createStore(
    counterReducer,
    window.__REDUX_DEVTOOLS_EXTENSIONS__ && window.REDUX_DEVTOOLS_EXTENSIONS__()
);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById("root")
)