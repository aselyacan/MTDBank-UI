import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App"; // App with {} defalt export
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import reducer, { initialState } from "./reducer"; // {} export withouth default
import { StateProvider } from "./StateProvider";

ReactDOM.render(
  <React.Fragment>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App /> {/* app is childeren*/}
    </StateProvider>
  </React.Fragment>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
