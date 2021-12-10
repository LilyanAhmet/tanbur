import React from "react";
import { PlayArrow } from "@material-ui/icons";

export default function Play(props) {
  const { handleClick } = props;

  return (
    <button className="player__button" onClick={() => handleClick()}>
      <PlayArrow />
    </button>
  );
}