import React from 'react'
import '../../src/App.css';

const BackgroundVideoSection = props => {
    return (
        <div className="customPlayer">
            <video autoPlay muted loop id='video1'>
                <source src={props.video} type='video/mp4'/>
            </video>
        </div>
    )
}

export default BackgroundVideoSection