import React, { ReactElement, useState } from 'react';

import { arrayGroup } from './arrayGroup';

import { DrumPadData } from './DrumPadData';
import { DrumPad } from './DrumPad';

const drumPadData: [
  DrumPadData,
  DrumPadData,
  DrumPadData,
  DrumPadData,
  DrumPadData,
  DrumPadData,
  DrumPadData,
  DrumPadData,
  DrumPadData,
] = [
  {
    key: 'q',
    soundName: 'Heater1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
  },
  {
    key: 'w',
    soundName: 'Heater2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
  },
  {
    key: 'e',
    soundName: 'Heater3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
  },
  {
    key: 'a',
    soundName: 'Heater4',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
  },
  {
    key: 's',
    soundName: 'Clap',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
  },
  {
    key: 'd',
    soundName: 'OpenHH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
  },
  {
    key: 'z',
    soundName: 'Kick-n-Hat',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
  },
  {
    key: 'x',
    soundName: 'Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
  },
  {
    key: 'c',
    soundName: 'ClosedHH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
  },
];

export function DrumMachine(): ReactElement {
  const [soundName, setSoundName] = useState('Play something to see the name of the sound!');
  const [volume, setVolume] = useState(1);

  function handleVolumeChange(event: React.ChangeEvent<HTMLInputElement>): void {
    setVolume(parseFloat(event.target.value));
  }

  // Splits the drum pads into rows of three for the view
  const drumPads = arrayGroup(drumPadData, 3).map((drumPads, index) => {
    const drumPadRowChildren = drumPads.map((padData) => {
      return (
        <div className="column" key={padData.key}>
          <DrumPad data={padData} updateDisplay={setSoundName} volume={volume} />
        </div>
      );
    });

    return (
      <div className="columns" key={index}>
        {drumPadRowChildren}
      </div>
    );
  });

  return (
    <div id="drum-machine">
      <div className="columns">
        <div className="column">
          <h2 id="display">Sound: {soundName}</h2>
        </div>
      </div>
      {drumPads}
      <div className="columns">
        <div className="column">
          <h2>Volume: {volume}</h2>
          <input
            className="slider"
            type="range"
            min={0}
            max={1}
            step={0.01}
            value={volume}
            onChange={handleVolumeChange}
          />
        </div>
      </div>
    </div>
  );
}
