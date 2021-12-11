import React from "react";
import Audio from "../CustomAudioPlayer/Audio";
const LeftInfo = (props) => {
  return (
    <div>
      <div className="row mx-0">
        <div className="col-12 col-md-6 px-0 info-text order-2 order-md-1">
          <div className="text-wrapper">
            <h2 className={props.padding}>{props.title}</h2>
            <div className="text-box">
              <div>
                <div className="text-holder">
                  <p className=""> {props.description1}</p>
                  <p className=""> {props.description2}</p>
                </div>
                <div className="song-textbox">
                  <p className="mb-0 song-name">{props.subtext1}</p>
                  <p className="song-subtext">{props.subtext2}</p>
                </div>

                <Audio music={props.song} audio={props.audio} />
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 px-0  order-1 order-md-2">
          <img
            className="banner-img img-fluid"
            src={props.image}
            alt="Tanbur"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default LeftInfo;
