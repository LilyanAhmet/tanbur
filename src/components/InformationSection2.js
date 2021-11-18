import React, { Component } from 'react'
import LeftComp from './InformationSection2/LeftComp';
import RightComp from './InformationSection2/RightComp';
import Tanbur_2string from "../resources/img/tanbur-2string-img.png";
import Tanbur_3string from "../resources/img/tanbur-3string-img.png";


export default class InformationSection2 extends Component {
    render() {
        return (

            <div className="">
                <RightComp
                image={Tanbur_2string}
                title="2 Strings"
                subtext1="emam Qolı"
                subtext2="saharı"
                />

                <div id="versus">V<span>S</span></div>

                <LeftComp
                image={Tanbur_3string}
                title="3 Strings"
                subtext1="ostad elahı"
                subtext2="saharı"
                />
            </div>
        )
    }
}
