import React from 'react'

const Placeholder = (props) => {
    return (
        <div>
            <div className="row mx-0 my-5 py-3">
                <div className="col-12">
                    <img className="banner-img w-75" src={props.image} alt="Tanbur" loading="lazy"/>
                </div>
            </div>
        </div>
    )
}

export default Placeholder