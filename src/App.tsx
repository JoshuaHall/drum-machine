import React from "react";

import { arrayGroup } from "./arrayGroup";

import { DrumPadData } from "./DrumPadData";
import DrumPad from "./DrumPad";

const drumPadData: [
  DrumPadData,
  DrumPadData,
  DrumPadData,
  DrumPadData,
  DrumPadData,
  DrumPadData,
  DrumPadData,
  DrumPadData,
  DrumPadData
] = [
  {
    key: "Q",
    keyCode: 81,
    id: "Heater1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  },
  {
    key: "W",
    keyCode: 87,
    id: "Heater2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  },
  {
    key: "E",
    keyCode: 69,
    id: "Heater3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
  },
  {
    key: "A",
    keyCode: 65,
    id: "Heater4",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
  },
  {
    key: "S",
    keyCode: 83,
    id: "Clap",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  },
  {
    key: "D",
    keyCode: 68,
    id: "OpenHH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  },
  {
    key: "Z",
    keyCode: 90,
    id: "Kick-n-Hat",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  },
  {
    key: "X",
    keyCode: 88,
    id: "Kick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  },
  {
    key: "C",
    keyCode: 67,
    id: "ClosedHH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
  },
];

interface AppState {
  soundName: string;
  volume: number;
}

class App extends React.Component<any, AppState> {
  constructor(props: never) {
    super(props);

    this.state = {
      soundName: "",
      volume: 1,
    };

    this.updateDisplay = this.updateDisplay.bind(this);
  }

  updateDisplay(soundName: string): void {
    this.setState({
      soundName,
    });
  }

  render() {
    // Splits the drum pads into rows of three for the view
    const drumPads = arrayGroup(drumPadData, 3).map((drumPads) => {
      const drumPadRowChildren = drumPads.map((padData) => {
        return (
          <DrumPad
            data={padData}
            updateDisplay={this.updateDisplay}
            volume={this.state.volume}
          />
        );
      });

      return <div className="row">{drumPadRowChildren}</div>;
    });

    return (
      <div id="drum-machine" className="container">
        <div className="row">
          <div className="col">
            <h2 id="display">{this.state.soundName}</h2>
          </div>
        </div>
        <div className="row"></div>
        {drumPads}
      </div>
    );
  }
}

export default App;
