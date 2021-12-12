import React from "react";
import { VideoScroll } from "react-video-scroll";

class ScrollVideo extends React.Component {
  render() {
    return (
      <VideoScroll playbackRate={this.props.rate} style={{ position: "sticky", top: "0" }}>
        <video
          loop
          height={900}
          tabIndex={0}
          preload="preload"
          className="scroll-vide"
          playsInline
        >
          <source type="video/mp4" src={this.props.video} />
        </video>
      </VideoScroll>
    );
  }
}

export default ScrollVideo;
