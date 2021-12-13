import React from "react";
import Play from "./PlayButton";
import Pause from "./PauseButton";
import Bar from "./ProgressBar";

import CustomAudioHook from "./CustomAudioHook";

import "./style.css";
function Audio(props) {
  const { curTime, duration, playing, setPlaying, setClickedTime } =
    CustomAudioHook(props.audio, props.playingAudioId);

    const playAudio = () => {
      if(props.onAudioPlayed){
       
        props.onAudioPlayed();
      }
     
      setPlaying(true);
    }

    const pauseAudio = () => {
      setPlaying(false);
    }

  return (
    <div className="player">
      <audio id={props.audio}>
        <source src={props.music} />
        Your browser does not support the <code>audio</code> element.
      </audio>
      <div className="controls">
        {playing ? (
          <Pause handleClick={pauseAudio} />
        ) : (
          <Play handleClick={playAudio} />
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
