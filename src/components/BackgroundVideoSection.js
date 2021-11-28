import React from 'react'
import '../../src/App.css';

const BackgroundVideoSection = props => {
    return (
        <div className="customPlayer">
            <section className="video-container">
                <video autoPlay muted loop id='backgroundvideo'>
                    <source src={props.video} type='video/mp4'/>
                </video>
                <div className="video-overlay">
                <p className="first-two-text"> {props.text1} </p>
                <h2 className="first-two-text"> {props.text2}</h2>
                <p className="second-two-text"> {props.text3} </p>
                <h2 className="second-two-text"> {props.text4} </h2>
                </div>
            </section>
        </div>
    )
}

export default BackgroundVideoSection