import React from "react";
import { DrumPadData } from "./DrumPadData";

interface DrumPadProps {
  data: DrumPadData;
  updateDisplay: (soundName: string) => void;
  volume: number;
}

class DrumPad extends React.Component<DrumPadProps, never> {
  constructor(props: DrumPadProps) {
    super(props);

    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.playSound = this.playSound.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }

  handleKeyPress(event: KeyboardEvent) {
    if (event.keyCode === this.props.data.keyCode) {
      this.playSound();
    }
  }

  playSound() {
    const audioElem: HTMLAudioElement = document.getElementById(
      this.props.data.key
    ) as HTMLAudioElement;

    audioElem.volume = this.props.volume;
    audioElem.currentTime = 0;

    audioElem.play();

    this.props.updateDisplay(this.props.data.id);
  }

  render() {
    return (
      <div
        onClick={this.playSound}
        id={this.props.data.id}
        className="drum-pad"
      >
        {this.props.data.key}
        <audio
          src={this.props.data.url}
          id={this.props.data.key}
          className="clip"
        ></audio>
      </div>
    );
  }
}

export default DrumPad;
