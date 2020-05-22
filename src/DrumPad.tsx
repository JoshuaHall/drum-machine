import React, { ReactElement, useRef, useCallback } from 'react';
import type { KeyChar } from './DrumPadData';

import useEventListener from '@srmagura/use-event-listener';

interface DrumPadProps {
  keyboardKey: KeyChar;
  soundName: string;
  url: string;
  volume: number;
  updateDisplay: (soundName: string) => void;
}

export const DrumPad = React.memo(function DrumPad({
  keyboardKey,
  soundName,
  url,
  volume,
  updateDisplay,
}: DrumPadProps): ReactElement<DrumPadProps> {
  const audioElem = useRef<HTMLAudioElement>(null);

  const playSound = useCallback((): void => {
    if (audioElem.current !== null) {
      audioElem.current.volume = volume;
      audioElem.current.currentTime = 0;

      audioElem.current.play();

      updateDisplay(soundName);
    }
  }, [soundName, updateDisplay, volume]);

  const handleKeyPress = useCallback(
    (event: KeyboardEvent): void => {
      event.preventDefault();

      if (event.key.toLowerCase() === keyboardKey) {
        playSound();
      }
    },
    [keyboardKey, playSound],
  );

  useEventListener('keydown', handleKeyPress);

  const upperCaseKey = keyboardKey.toUpperCase();

  return (
    <button onClick={playSound} id={soundName} className="button drum-pad has-text-centered">
      {upperCaseKey}
      <audio src={url} id={upperCaseKey} className="clip" ref={audioElem}></audio>
    </button>
  );
});
