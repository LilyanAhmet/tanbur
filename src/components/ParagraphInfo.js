import React from 'react'

const ParagraphInfo = props => {
    return (
        <div className="paragraphinfo">
           <h2 className={ props.fontstyle}>{props.ParagraphText}</h2>
        </div>
    )
}

export default ParagraphInfo