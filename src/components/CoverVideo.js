import React from 'react'
import ReactPlayer from 'react-player'

const CoverVideo = props => {
    return (
        <div className="d-flex">
                <ReactPlayer
                url={props.video}
                width="82%"
                height="100%"
                playing={false}
                controls={true}
                className="mx-auto"
                />
        </div>
    )
}

export default CoverVideo
