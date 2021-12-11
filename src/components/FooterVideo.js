import React from 'react'
import '../../src/App.css';

const FooterVideo = props => {
    return (
        <div className="customPlayer">
            <section className="video-container">
                <video controls controlsList="nodownload" loop id='backgroundvideo'>
                    <source src={props.video} type='video/mp4'/>
                </video>
            </section>
        </div>
    )
}

export default FooterVideo