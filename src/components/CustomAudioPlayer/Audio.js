import React from "react";
import Play from "./PlayButton";
import Pause from "./PauseButton";
import Bar from "./ProgressBar";

import CustomAudioHook from "./CustomAudioHook";


import './style.css'
function Audio(props) {
  const { curTime, duration, playing, setPlaying, setClickedTime } =  CustomAudioHook();

  return (
    <div className="player">
      <audio id={props.audio}>
        <source src={props.music} />
        Your browser does not support the <code>audio</code> element.
      </audio>
      <div className="controls">
        {playing ? (
          <Pause handleClick={() => setPlaying(false)} />
        ) : (
          <Play handleClick={() => setPlaying(true)} />
        )}
        <Bar
          curTime={curTime}
          duration={duration}
          onTimeUpdate={(time) => setClickedTime(time)}
        />
      </div>
    </div>
  );
}

export default Audio;
