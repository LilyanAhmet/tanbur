import React from "react";

const TextSection = (props) => {
  return (
    <article>
      <section className="container g-annotation">
        <div className="content  scroll-text">
         {/* <h1>The current Kurdish tanbur is composed of a pear-shaped or ovoid body covered by a wooden sounding board. </h1> */}
        </div>
      </section>

      <section className="container g-annotation">
        <div className="content scroll-text">
        {/* <h1>The body, and especially the sounding board, must be made of mulberry wood.</h1> */}
        </div>
      </section>

      <section className="container g-annotation">
        <div className="content scroll-text">
        {/* <h1>The Neck is made of walnut, mounted with fourteen frets made from entrails. The frets are an allusion to the levels of the celestial hierarchy.</h1> */}
        </div>
      </section>

      <section className="container g-annotation">
        <div className="content scroll-text">
        {/* <h1>Originally, the strings of the tanbur were made of silk or entrails, but they were replaced probably a century ago by steel.</h1> */}
        </div>
      </section>

      <div id="set-height"></div>
    </article>
  );
};

export default TextSection