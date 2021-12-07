import React from 'react'

const ParagraphInfo = props => {
    return (
        <div className="paragraphinfo">
           <p className={ props.fontstyle}>{props.ParagraphText}</p>
        </div>
    )
}

export default ParagraphInfo