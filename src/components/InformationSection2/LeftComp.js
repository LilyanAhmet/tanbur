import React from 'react'
import ReactPlayer from "react-player";

const LeftComp = props => {
    return (
        <div>
            <div className="row mx-0">
                <div className="col-12 col-md-6 px-0 info-text order-2 order-md-1" id="leftcomp">
                    <h2 className="pt-4 d-none d-md-block"><span className="outer">3 <span>S</span>tring</span></h2>
                    <div className="text-wrapper2">
                        <div className="text-box">
                            <div className="song-textbox">
                                <p className="mb-0 song-name">{props.subtext1}</p>
                                <p className="song-subtext">{props.subtext2}</p>
                            </div>
                        </div>
                        <ReactPlayer
                        url="https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3"
                        width="80%"
                        height="2em"
                        playing={false}
                        controls={true}
                        />
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
                        <img className="banner-img img-fluid" id="leftbanner" src={props.image} alt="Tanbur" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeftComp