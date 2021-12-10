import React from "react";
import { Pause } from "@material-ui/icons";

export default function Play(props) {
  const { handleClick } = props;
  
  return (
    <button className="player__button" onClick={() => handleClick()}>
      <Pause />
    </button>
  );
}