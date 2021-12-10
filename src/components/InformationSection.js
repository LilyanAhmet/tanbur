import React, { Component } from 'react'
import RightInfo from './InformationSection/RightInfo';
import LeftInfo from './InformationSection/LeftInfo';
import Prehistory_Img from "../resources/img/prehistory-img.webp";
import AncientPersia_Img from "../resources/img/ancient-persia-img.webp";
import Ahlehaqq_Img from "../resources/img/ahle-haqq-img.webp";
import Hadjnemat_Img from "../resources/img/hadj-nemat-img.webp";
import Ostadelahi_Img from "../resources/img/ostad-elahi-img.webp";
import song1 from '../resources/audio/1-history-prehistory.mp3'
import song2 from '../resources/audio/2-history-ancientpersia.mp3'
import song3 from '../resources/audio/3-history-ahle-haqq.mp3'
import song4 from '../resources/audio/4-history-hadjnemat.mp3'
import song5 from '../resources/audio/5-history-ostad.mp3'
export default class InformationSection extends Component {
    render() {
        return (
            <div>
                <RightInfo
                image={Prehistory_Img}
                title="Prehistory"
                description1="Before engaging in his narrative, the traditional storyteller would begin
                with: “Once upon a time,” to which he would sometimes add, “There was no one but God”."
                description2="It is with the latter part of this phrase that the tanbur appears to open the narrative,
                the memory of a time before creation."
                subtext1="Tarz-e-Yâri Suite"
                subtext2="A Spritual Epic"
                song={song1}
                audio="prehistory"
                />
                <LeftInfo
                image={AncientPersia_Img}
                title="Ancient Persia"
                description1="The tanbur is an instrument whose origin and use go to the ancient Persia. 
                In Iran, the tanbur figured among the courtly instruments of the Sassanides (third to sixth century)."
                description2="In his Shahnâme, Ferdowsi describes the legendary heroes Rotsam and Esfandyâr as singing their painful destiny accompanied by the tanbur."
                subtext1="Haft Khân-e Rostam Suite"
                subtext2="The Path of Divine Love"
                song={song2}
                padding={"pt-1"}
                />
                <RightInfo
                image={Ahlehaqq_Img}
                title="Ahl-e Haqq"
                description1="In certain cultures, the tanbur is also dedicated to devotional and sacred music. 
                At the very origin of the Ahl-e Haqq, its use was made official by Shâh Khoshin, a great saint who lived in the eleven century in Iran."
                description2=""
                subtext1="Shâh Khoshini Suite"
                subtext2="Awakening"
                song={song3}
                padding={"pt-3"}
                audio="haqq"
                />
                <LeftInfo
                image={Hadjnemat_Img}
                title="Hadj Nemat"
                description1="Hadj Nemat played several instruments with mastery, notably the tanbur for which he composed numerous mystical hymns that other
                players still benefit from today."
                description2="The theme of this melody belongs to Hadj Nemat, Ostad’s father. 
                Ostad has enriched it to such an extent that it is now considered one of the jewels of the tanbur repertoire."
                subtext1="Sheykh Amiri Suite"
                subtext2="Dialogue with the Beloved"
                song={song4}
                padding={"pt-3"}
                />
                <RightInfo
                image={Ostadelahi_Img}
                title="Ostad Elahi"
                description1="Ostad Elahi was an influential thinker, jurist, and musician who founded an innovative 
                approach to the pursuit of self-knowledge and existential meaning."
                description2="Elahi transformed the two-stringed instrument, adding a third string and developing new playing techniques that used all ten fingers."
                subtext1="Ostad Elahi’s Sheykh Amiri"
                subtext2="Dialogue with the Beloved"
                song={song5}
                padding={"pt-3"}
                audio="Ostad"
                />
            </div>
        )
    }
}
