import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';

import { DrumMachine, initDrumPadData, initVolume } from './DrumMachine';

ReactDOM.render(
  <React.StrictMode>
    <DrumMachine initialVolume={initVolume} drumPadData={initDrumPadData} />
  </React.StrictMode>,
  document.getElementById('root'),
);

export default DrumMachine;
