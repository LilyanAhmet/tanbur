import React from "react";
import ReactPlayer from "react-player";

const MultipleVideos = props => {

    return (
        <div className="video-wrapper">
            <div className="row mx-0">
                <div className="col-12 col-md-6 col-xl-3 px-0">
                <ReactPlayer
                    width="100%"
                    controls={true}
                    className="mx-auto"
                    url="https://aws-3d-tanbur-bucket.s3.eu-central-1.amazonaws.com/tanbur_1.mov"
                />
                </div>
                <div className="col-12 col-md-6 col-xl-6 px-0">
                <ReactPlayer
                    width="100%"
                    controls={true}
                    className="mx-auto"
                    url="https://aws-3d-tanbur-bucket.s3.eu-central-1.amazonaws.com/601417505.mp4"
                />
                </div>
                <div className="col-12 col-md-12 col-xl-3 px-0">
                <ReactPlayer
                    url="https://aws-3d-tanbur-bucket.s3.eu-central-1.amazonaws.com/The+Art+of+Ostad+Elahi.mp4"
                    width="100%"
                    controls={true}
                    className="mx-auto"
                    />
                </div>
            </div>
            <div className="row mx-0">
                <div className="col-12 col-md-6 col-xl-7 px-0">
                <ReactPlayer
                    url={'https://www.youtube.com/watch?v=bC8EmPA6H6g&ab_channel=Moshcam'}
                    width="100%"
                    controls={true}
                    className="mx-auto"
                    />
                </div>
                <div className="col-12 col-md-6 col-xl-5 px-0">
                <ReactPlayer
                    url={'https://www.youtube.com/watch?v=kXYiU_JCYtU&ab_channel=LinkinPark'}
                    width="100%"
                    controls={true}
                    className="mx-auto"
                    />
                </div>
            </div>
        </div>
    )
}

export default MultipleVideos