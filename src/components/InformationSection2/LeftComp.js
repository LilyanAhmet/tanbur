import React from 'react'
import ReactPlayer from "react-player";
import Audio from "../CustomAudioPlayer/Audio";
const LeftComp = props => {
    return (
        <div className="versus-section">
            <div className="row mx-0">
                <div className="col-12 col-md-6 px-0 info-text order-2 order-md-1" id="leftcomp">
                    <h2 className="d-none d-md-block"><span className="outer">3 <span>S</span>tring</span></h2>
                    <div className="text-wrapper2">
                        <div className="text-box">
                            <div className="text-holder">
                                <p className="pb-1"> {props.description1}
                                </p>
                                <p className=""> {props.description2}
                                </p>
                            </div>
                            <div className="song-textbox">
                                <p className="mb-0 song-name">{props.subtext1}</p>
                                <p className="song-subtext">{props.subtext2}</p>
                            </div>
                        </div>
                        <Audio music={props.song} audio={props.audio} />
                    </div>
                </div>
                <div className="col-12 col-md-6 px-0  order-1 order-md-2">
                    <div className="col-12 col-md-6 px-0 d-block d-md-none info-text order-2 order-md-1" id="leftcomp">
                        <h2><span className="outer">3 <span>S</span>tring</span></h2>
                    </div>
                    <div id="preview-image-wrapper">
                        <ul>
                            <li className="second-img-first-line"></li>
                            <li className="second-img-second-line"></li>
                            <li className="second-img-third-line"></li>
                        </ul>
                        <img className="banner-img img-fluid" id="leftbanner" src={props.image} alt="Tanbur" loading="lazy"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeftComp