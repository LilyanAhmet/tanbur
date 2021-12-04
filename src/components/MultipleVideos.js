import React from "react";
import HoverVideoPlayer from "react-hover-video-player";
/* resources */
import Place1 from '../resources/img/placeholder-1.webp'
import Place2 from '../resources/img/placeholder-2.webp'
import Place3 from '../resources/img/placeholder-3.webp'
import Place4 from '../resources/img/placeholder-4.webp'
import Place5 from '../resources/img/placeholder-5.webp'
const MultipleVideos = (props) => {
  return (
    <div className="video-wrapper">
      <div className="row mx-0">
        <div className="col-12 col-md-6 col-xl-4 px-0">
          <HoverVideoPlayer
            volume={1}
            muted={false}
            videoSrc="https://videos.ctfassets.net/unrnfh6tg4kn/6EpNv5uYLX70WDOkXaUmhM/e5fe245f197b1ba4021f9ab78cddfa7e/tanbur_1.mp4"
            className="video-gallery"
            pausedOverlay={
              <img
                src={Place1}
                alt=""
                style={{
                  // Make the image expand to cover the video's dimensions
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  loading:"lazy",
                }}
              />
            }
            loadingOverlay={
              <div className="loading-overlay">
                <div className="loading-spinner" />
              </div>
            }
            controls
          />
        </div>
        <div className="col-12 col-md-6 col-xl-4 px-0">
          <HoverVideoPlayer
            volume={1}
            muted={false}
            videoSrc="https://videos.ctfassets.net/unrnfh6tg4kn/2Df4hXKKnGOAMDsPhzLK4p/868a3d7deaf046b2eab9fd816e3552b8/tanbur_2.mp4"
            className="video-gallery"
            pausedOverlay={
              <img
                src={Place2}
                alt=""
                style={{
                  // Make the image expand to cover the video's dimensions
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  loading:"lazy",
                }}
              />
            }
            loadingOverlay={
              <div className="loading-overlay">
                <div className="loading-spinner" />
              </div>
            }
            controls
          />
        </div>
        <div className="col-12 col-md-12 col-xl-4 px-0">
          <HoverVideoPlayer
            volume={1}
            muted={false}
            videoSrc="https://videos.ctfassets.net/unrnfh6tg4kn/3yyUMz9ohAem6dCTuYmV77/ed51f1bf17eeb370c9930ed1f0ee7e53/tanbur_3.mp4"
            className="video-gallery"
            pausedOverlay={
              <img
                src={Place3}
                alt=""
                style={{
                  // Make the image expand to cover the video's dimensions
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  loading:"lazy",
                }}
              />
            }
            loadingOverlay={
              <div className="loading-overlay">
                <div className="loading-spinner" />
              </div>
            }
            controls
          />
        </div>
      </div>
      <div className="row mx-0">
        <div className="col-12 col-md-6 col-xl-6 px-0">
          <HoverVideoPlayer
            volume={1}
            muted={false}
            videoSrc="https://videos.ctfassets.net/unrnfh6tg4kn/sFr1CLaPvD7RNiXhzNe9G/0ed05a86f271eebfca9cba6a99d4544b/tanbur_4.mp4"
            className="video-gallery"
            pausedOverlay={
              <img
                src={Place4}
                alt=""
                style={{
                  // Make the image expand to cover the video's dimensions
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  loading:"lazy",
                }}
              />
            }
            loadingOverlay={
              <div className="loading-overlay">
                <div className="loading-spinner" />
              </div>
            }
            controls
          />
        </div>
        <div className="col-12 col-md-6 col-xl-6 px-0">
          <HoverVideoPlayer
            volume={1}
            muted={false}
            videoSrc="https://videos.ctfassets.net/unrnfh6tg4kn/5f9UmdFnyufz6I1QK94rAs/bd80bb644eef403a3435c28128cfbee7/tanbur_5.mp4"
            className="video-gallery"
            pausedOverlay={
              <img
                src={Place5}
                alt=""
                style={{
                  // Make the image expand to cover the video's dimensions
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  loading:"lazy",
                }}
              />
            }
            loadingOverlay={
              <div className="loading-overlay">
                <div className="loading-spinner" />
              </div>
            }
            controls
          />
        </div>
      </div>
    </div>
  );
};

export default MultipleVideos;
