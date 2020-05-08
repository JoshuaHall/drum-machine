import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';

import { DrumMachine } from './DrumMachine';

ReactDOM.render(
  <React.StrictMode>
    <DrumMachine />
  </React.StrictMode>,
  document.getElementById('root'),
);

export default DrumMachine;
