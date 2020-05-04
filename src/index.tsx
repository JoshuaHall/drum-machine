import React from "react";
import ReactDOM from "react-dom";

import "bulma/bulma.sass";
import "./index.scss";

import DrumMachine from "./DrumMachine";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const projectName = "drum-machine";

ReactDOM.render(
  <React.StrictMode>
    <DrumMachine />
  </React.StrictMode>,
  document.getElementById("root"),
);

export default DrumMachine;
