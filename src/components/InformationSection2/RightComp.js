import React from 'react'
import Audio from "../CustomAudioPlayer/Audio";

const RightComp = props => {
    return (
        <article className="versus-section">
            <div className="row mx-0">
                <div className="col-12 col-md-6 px-0">
                    <div className="col-12 col-md-6 px-0 info-text" id="rightcomp">
                        <h2 className="d-block d-md-none"><span className="outer">2 <span>S</span>tring</span></h2>
                    </div>
                    <div id="preview-image-wrapper">
                        <ul>
                            <li></li>
                            <li className="first-img-second-line"></li>
                        </ul>
                        <img className="banner-img img-fluid" id="rightbanner" src={props.image} alt="Tanbur" loading="lazy"/>
                    </div>
                </div>
                <div className="col-12 col-md-6 px-0 info-text" id="rightcomp">
                    <h2 className="d-none d-md-block"><span className="outer">2 <span>S</span>tring</span></h2>
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
            </div>
        </article>
    )
}

export default RightComp