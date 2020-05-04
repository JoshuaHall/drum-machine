import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import "bootstrap/dist/css/bootstrap.css";

import { DrumMachine } from "./DrumMachine";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const projectName = "drum-machine";

ReactDOM.render(
  <React.StrictMode>
    <DrumMachine />
  </React.StrictMode>,
  document.getElementById("root"),
);
