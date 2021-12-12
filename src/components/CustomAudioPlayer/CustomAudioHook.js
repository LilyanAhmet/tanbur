import { useState, useEffect } from "react";

function CustomAudioHook(id) {
  const [duration, setDuration] = useState();
  const [curTime, setCurTime] = useState();
  const [playing, setPlaying] = useState(false);
  const [stopAll, setStopAll] = useState(false);
  const [clickedTime, setClickedTime] = useState();
 
  useEffect(() => {
    const audio = document.getElementById(`${id}`);
    var sounds = document.getElementsByTagName("audio");
    const setAudioData = () => {
      setDuration(audio.duration);
      setCurTime(audio.currentTime);
    };

    const stopAllAudios = () => {
      
      if (!stopAll) {
        setStopAll(true)
        for (var i = 0; i < sounds.length; i++) {
          sounds[i].pause();
          console.log(sounds[i]);
        
        }
        console.log("entered")
      }
    };

    const setAudioTime = () => setCurTime(audio.currentTime);

    audio.addEventListener("loadeddata", setAudioData);

    audio.addEventListener("timeupdate", setAudioTime);


    
    if (playing) {
     // stopAllAudios();
      audio.play();
    } else {
      audio.pause();
    }

    if (clickedTime && clickedTime !== curTime) {
      audio.currentTime = clickedTime;
      setClickedTime(null);
    }

    return () => {
      audio.removeEventListener("loadeddata", setAudioData);
      audio.removeEventListener("timeupdate", setAudioTime);
    };
  });

  return {
    curTime,
    duration,
    playing,
    setPlaying,
    setClickedTime,
  };
}

export default CustomAudioHook;
