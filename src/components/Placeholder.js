import React from 'react'
import placeholder_Img from "../resources/img/placeholder-img.png"

const Placeholder = () => {
    return (
        <div>
            <div className="row mx-0 my-5 py-3">
                <div className="col-12">
                    <img className="banner-img w-75" src={placeholder_Img} alt="Tanbur" />
                </div>
            </div>
        </div>
    )
}

export default Placeholder