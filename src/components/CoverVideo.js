import React from 'react'
import Audio from './CustomAudioPlayer/Audio'
import cover_img1 from '../resources/img/awakening-cover.webp'
import cover_img2 from '../resources/img/presence-cover.webp'
import cover_img3 from '../resources/img/the-path-of-divine-love-cover.webp'
import cover_img1_m from '../resources/img/awakening-cover-mobile.webp'
import cover_img2_m from '../resources/img/presence-cover-mobile.webp'
import cover_img3_m from '../resources/img/the-path-of-divine-love-cover-mobile.webp'
import cover_song1 from '../resources/audio/awakening.mp3'
import cover_song2 from '../resources/audio/presence.mp3'
import cover_song3 from '../resources/audio/the-path-of-divine-love.mp3'

const CoverVideo = props => {
    return (
        <div className="cover-video-section">
            <div className="row">
                <div className="col-12 col-md-6 cover-player-left">
                    <img className="w-100 d-none d-md-block" src={cover_img1} alt="awakening" />
                    <img className="w-100 d-block d-md-none" src={cover_img1_m} alt="awakening" />
                    <Audio music={cover_song1} audio={"awakening"} />
                </div>
                <div className="col-12 col-md-6 cover-player-right">
                    <img className="w-100 d-none d-md-block" src={cover_img2} alt="presence" />
                    <img className="w-100 d-block d-md-none" src={cover_img2_m} alt="presence" />
                    <Audio music={cover_song2} audio={"presence"} />
                </div>
                <div className="col-12 mx-0 cover-player-center">
                    <img className="w-100 d-none d-md-block" src={cover_img3} alt="the path of divine love" />
                    <img className="w-100 d-block d-md-none" src={cover_img3_m} alt="the path of divine love" />
                    <Audio music={cover_song3} audio={"the-path-of-divine-love"} />
                </div>
            </div>
        </div>
    )
}

export default CoverVideo
