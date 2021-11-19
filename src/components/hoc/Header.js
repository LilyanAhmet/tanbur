import React, { Component } from 'react';
import Tanbur_Img from "../../resources/img/tanbur-banner-img.png";
import D360_Img from "../../resources/img/360-icon-img.svg";

export default class Header extends Component {
    render() {
        return (
            <div>
                <header> 
                <title>Tanbur</title>
                <img className="icon_3d" src={D360_Img} alt="Tanbur" />
                <div className="container"> 
                        <img className="banner-img img-fluid" src={Tanbur_Img} alt="Tanbur" />
                </div>
                </header>
            </div>
        )
    }
}
