import React, { Component } from 'react';
import Tanbur_Img from "../../resources/img/tanbur-banner-img.webp";

export default class Header extends Component {
    render() {
        return (
            <header>
                <div className="container d-table header-wrapper">
                    <table className="mx-auto">
                        <tr>
                            <td><h1>TAN</h1></td>
                            <td><img className="col-4" id="header-img" src={Tanbur_Img} alt="tanbur" /></td>
                            <td><h1>UR</h1></td>
                        </tr>
                    </table>
                </div>
            </header>
        )
    }
}
