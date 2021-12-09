import React from "react";
import { VideoScroll } from "react-video-scroll";
import Video from "../../resources/video/bg-video-4.mp4";
const setStyles = (wrapperEl, videoEl, playbackRate) => {
    wrapperEl.style.marginTop = `calc(250% - ${Math.floor(videoEl.duration) *
      playbackRate +
      'px'})`
    wrapperEl.style.marginBottom = `calc(50% - ${Math.floor(videoEl.duration) *
      playbackRate +
      'px'})`
  }

class ScrollVideo extends React.Component {
  render() {
    return (
      <div className="wrapper" >
        <VideoScroll
    
        onLoad={props =>
            setStyles(props.wrapperEl, props.videoEl,150)
          }
          playbackRate={380}
          style={{ position: "sticky", top: "0"}}
        >
          <video
            tabIndex={0}
            preload="preload"
            style={{ width: "100%", objectFit: "contain" }}
            playsInline
          >
            <source type="video/mp4" src={Video} />
          </video>
        </VideoScroll>
      
      </div>
    );
  }
}

export default ScrollVideo;
