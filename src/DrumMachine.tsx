import React, { ReactElement, useState, ReactNode, useCallback } from 'react';

import { arrayGroup } from './arrayGroup';

import { DrumPadData } from './DrumPadData';
import { DrumPad } from './DrumPad';

type DrumPadDataArr = [
  DrumPadData,
  DrumPadData,
  DrumPadData,
  DrumPadData,
  DrumPadData,
  DrumPadData,
  DrumPadData,
  DrumPadData,
  DrumPadData,
];

export const initVolume = 1;

export const initDrumPadData: DrumPadDataArr = [
  {
    keyboardKey: 'q',
    soundName: 'Heater1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
  },
  {
    keyboardKey: 'w',
    soundName: 'Heater2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
  },
  {
    keyboardKey: 'e',
    soundName: 'Heater3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
  },
  {
    keyboardKey: 'a',
    soundName: 'Heater4',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
  },
  {
    keyboardKey: 's',
    soundName: 'Clap',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
  },
  {
    keyboardKey: 'd',
    soundName: 'OpenHH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
  },
  {
    keyboardKey: 'z',
    soundName: 'Kick-n-Hat',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
  },
  {
    keyboardKey: 'x',
    soundName: 'Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
  },
  {
    keyboardKey: 'c',
    soundName: 'ClosedHH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
  },
];

interface DrumMachineProps {
  initialVolume: number;
  drumPadData: DrumPadDataArr;
}

export function DrumMachine({ initialVolume, drumPadData }: DrumMachineProps): ReactElement<DrumMachineProps> {
  const [soundName, setSoundName] = useState('Play something to see the name of the sound!');
  const [volume, setVolume] = useState(initialVolume);

  const handleVolumeChange = useCallback((event: React.ChangeEvent<HTMLInputElement>): void => {
    setVolume(parseFloat(event.target.value));
  }, []);

  // Splits the drum pads into rows of three for the view
  const drumPads = arrayGroup(drumPadData, 3).map((drumPads, i) => (
    <MobileLevelWithItems key={i}>
      {drumPads.map((padData) => (
        <DrumPad key={padData.keyboardKey} {...padData} updateDisplay={setSoundName} volume={volume} />
      ))}
    </MobileLevelWithItems>
  ));

  return (
    <div id="drum-machine">
      <h2 id="display">
        <strong>Sound:</strong> {soundName}
      </h2>

      <hr />

      {drumPads}
      <h2>Volume: {volume}</h2>
      <input className="slider" type="range" min={0} max={1} step={0.01} value={volume} onChange={handleVolumeChange} />
    </div>
  );
}

interface MobileLevelWithItemsProps {
  children: ReactNode;
}

// Takes its children and puts each one of them into a level-item inside of a level
function MobileLevelWithItems({ children }: MobileLevelWithItemsProps): ReactElement<MobileLevelWithItemsProps> {
  return (
    <div className="level is-mobile">
      {React.Children.map(children, (child) => (
        <div className="level-item">{child}</div>
      ))}
    </div>
  );
}
