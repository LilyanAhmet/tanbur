import React, { useRef, useEffect } from "react";
import Audio from "../CustomAudioPlayer/Audio";
import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function LeftInfo(props) {

  
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);
  useEffect(() => {
    const element = ref.current;
    gsap.fromTo(
      element.querySelector(".text-holder"),
      {
        opacity: 0,
        x: -200,
      },
      {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: element.querySelector(".text-wrapper"),
          start: "top center",
          end: "center center",
          scrub: true
        },
      }
    );
  }, []);

  const audioPlayed = (audioId) => {
    if(props.onAudioPlayed){
      props.onAudioPlayed(props.audio);
    }
  }

  useEffect(() => {
    const element = ref.current;
    gsap.fromTo(
      element.querySelector(".bottom-container"),
      {
        opacity: 0,
        y: 200,
      },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: element.querySelector(".text-wrapper"),
          start: "top center",
          end: "center center",
          scrub: true
        },
      }
    );
  }, []);
  
  useEffect(() => {
      const element = ref.current;
      gsap.fromTo(
        element.querySelector("#right_img"),
        {
          opacity: 0,
          scale: 0.2,
          y: -20
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "none",
          scrollTrigger: {
            trigger: element.querySelector(".img-wrapper"),
            start: "top center",
            end: "center center",
            scrub: true
          }
        }
      );
  }, []);
  
  useEffect(() => {
      const element = ref.current;
      gsap.from(element.querySelector("#left-info-title"), {
        scale: 0,
        ease: "none",
        scrollTrigger: {
          trigger: element.querySelector(".text-wrapper"),
          scrub: true,
          start: "top center",
          end: "center center",
        }
      });
    }, []);

  return (
    <article ref={ref}>
      <div className="row mx-0">
        <div className="col-12 col-md-6 px-0 info-text order-2 order-md-1">
          <div className="text-wrapper">
            <h2 className={props.padding} id="left-info-title">{props.title}</h2>
            <div className="text-box">
              <div>
                <div className="text-holder">
                  <p className=""> {props.description1}</p>
                  <p className=""> {props.description2}</p>
                </div>
                <div className="bottom-container">
                  <div className="song-textbox">
                    <p className="mb-0 song-name">{props.subtext1}</p>
                    <p className="song-subtext">{props.subtext2}</p>
                  </div>
                  <Audio music={props.song} audio={props.audio} playingAudioId={props.playingAudioId} onAudioPlayed={audioPlayed} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 px-0 img-wrapper order-1 order-md-2">
          <img
            className="banner-img img-fluid"
            id="right_img"
            src={props.image}
            alt="Tanbur"
            loading="lazy"
          />
        </div>
      </div>
    </article>
  );
};

export default LeftInfo;
