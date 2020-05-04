import React, { ReactElement, useRef } from "react";
import { DrumPadData } from "./DrumPadData";

import useEventListener from "@srmagura/use-event-listener";

interface DrumPadProps {
  data: DrumPadData;
  updateDisplay: (soundName: string) => void;
  volume: number;
}

export function DrumPad({ data, updateDisplay, volume }: DrumPadProps): ReactElement {
  const audioElem = useRef<HTMLAudioElement>(null);

  function playSound(): void {
    if (audioElem.current !== null) {
      audioElem.current.volume = volume;
      audioElem.current.currentTime = 0;

      audioElem.current.play();

      updateDisplay(data.soundName);
    }
  }

  function handleKeyPress(event: KeyboardEvent): void {
    if (event.key.toLowerCase() === data.key) {
      playSound();
    }
  }

  useEventListener("keydown", handleKeyPress);

  const upperCaseKey = data.key.toUpperCase();

  return (
    <div onClick={playSound} id={data.soundName} className="drum-pad text-center">
      {upperCaseKey}
      <audio src={data.url} id={upperCaseKey} className="clip" ref={audioElem}></audio>
    </div>
  );
}
