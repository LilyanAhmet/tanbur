import React from 'react'

const ParagraphInfo = props => {
    return (
        <section className="paragraphinfo">
           <p className={ props.fontstyle}>{props.ParagraphText}</p>
        </section>
    )
}

export default ParagraphInfo