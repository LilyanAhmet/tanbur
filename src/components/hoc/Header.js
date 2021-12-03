import React, { Component } from 'react';
import Tanbur_Img from "../../resources/img/tanbur-banner-img.png";

export default class Header extends Component {
    render() {
        return (
            <div>
                <header>
                <div className="container"> 
                        <img className="banner-img img-fluid" id="header-img" src={Tanbur_Img} alt="Tanbur" />
                </div>
                </header>
            </div>
        )
    }
}
