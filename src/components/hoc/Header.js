import React, { Component } from 'react';
import Tanbur_Img from "../../resources/img/tanbur-banner-img.png";

export default class Header extends Component {
    render() {
        return (
            <div>
                <title>Tanbur</title>
                <header className="container"> 
                        <img className="banner-img img-fluid" src={Tanbur_Img} alt="Tanbur" />
                </header>
            </div>
        )
    }
}
