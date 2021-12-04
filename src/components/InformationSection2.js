import React, { Component } from 'react'
import LeftComp from './InformationSection2/LeftComp';
import RightComp from './InformationSection2/RightComp';
import Tanbur_2string from "../resources/img/tanbur-2string-img.png";
import Tanbur_3string from "../resources/img/tanbur-3string-img.png";
import song6 from '../resources/audio/tanbur-two-strings.mp3'
import song7 from '../resources/audio/tanbur-three-strings.mp3'
export default class InformationSection2 extends Component {
    render() {
        return (
            <div>
                <RightComp
                image={Tanbur_2string}
                title="2 Strings"
                description1="Emâm Qoli, the last representative of the tradition of the Ahle Haqq’s tanbur from Lorestan, Iran."
                subtext1="emam Qolı"
                subtext2="saharı"
                song={song6}
                />

                <div id="versus">Vs</div>

                <LeftComp
                image={Tanbur_3string}
                title="3 Strings"
                description1="Elahi transformed the two-stringed instrument, adding a third string and developing new playing techniques that used all ten fingers."
                subtext1="ostad elahı"
                subtext2="saharı"
                song={song7}
                />
            </div>
        )
    }
}
