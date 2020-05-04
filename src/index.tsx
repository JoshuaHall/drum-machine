import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import "bootstrap/dist/css/bootstrap.css";

import { App } from "./App";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const projectName = "drum-machine";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root"),
);
