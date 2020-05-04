import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

import { DrumMachine } from "./DrumMachine";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const projectName = "drum-machine";

ReactDOM.render(
  <React.StrictMode>
    <DrumMachine />
  </React.StrictMode>,
  document.getElementById("root"),
);
