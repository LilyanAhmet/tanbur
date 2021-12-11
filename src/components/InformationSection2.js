import React, { Component } from 'react'
import LeftComp from './InformationSection2/LeftComp';
import RightComp from './InformationSection2/RightComp';
import Versus_Background from "../resources/img/versus-background.webp";
import song6 from '../resources/audio/tanbur-two-strings.mp3'
import song7 from '../resources/audio/tanbur-three-strings.mp3'
export default class InformationSection2 extends Component {
    render() {
        return (
            <div>
                <RightComp
                image={Versus_Background}
                title="2 Strings"
                description1="Emâm Qoli, the last representative of the tradition of the Ahle Haqq’s tanbur from Lorestan, Iran."
                subtext1="emam Qolı"
                subtext2="saharı"
                song={song6}
                audio="2-strings"
                />

                <div id="versus">Vs</div>

                <LeftComp
                image={Versus_Background}
                title="3 Strings"
                description1="Elahi transformed the two-stringed instrument, adding a third string and developing new playing techniques that used all ten fingers."
                subtext1="ostad elahı"
                subtext2="saharı"
                song={song7}
                audio="3-strings"
                />
            </div>
        )
    }
}
