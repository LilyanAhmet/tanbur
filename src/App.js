import "./App.css";
import LazyLoad from "react-lazyload";
import Header from "./components/hoc/Header.js";
import ParagraphInfo from "./components/ParagraphInfo";
import InformationSection from "./components/InformationSection";
import BackgroundVideoSection from "../src/components/BackgroundVideoSection";
import InformationSection2 from "./components/InformationSection2";
import MainParagraphInfo from "./components/MainParagraphInfo";
import FooterSection from "./components/hoc/FooterSection.js";
import Tanbur from "./components/Tanbur";
import TanburLeft from "./components/TanburLeft";
import CoverVideo from "./components/CoverVideo";
import MultipleVideos from "./components/MultipleVideos";
import video1 from "../src/resources/video/bg-video-1.mp4";
import video2 from "../src/resources/video/bg-video-2.mp4";
import video3 from "../src/resources/video/bg-video-3.mp4";
import video4 from "../src/resources/video/bg-video-4.mp4";
import video5 from "../src/resources/video/tanbur-cover-video.mp4";
import VideoScroll from "./components/videos/video-scroll.js";
import TextSection from "./components/videos/textSection";
/*function position(elem) {
  var left = 0,
    top = 0;

  do {
    left += elem.offsetLeft - elem.scrollLeft;
    top += elem.offsetTop - elem.scrollTop;
  } while ((elem = elem.offsetParent));

  return top;
}
var delayedExec = function (after, fn) {
  var timer;
  return function () {
    timer && clearTimeout(timer);
    timer = setTimeout(fn, after);
  };
};
var scrollPosition = 0;
function positionSet(initialID) {
  scrollPosition = window.scrollTo(0, initialID);
}

var scrollStopper = delayedExec(1500, function () {
  const el1 = document.getElementById("m-2");
  const el2 = document.getElementById("m-3");
  const el3 = document.getElementById("m-5");
  const el4 = document.getElementById("m-6");
  var screenPosition1 = position(el1);
  var screenPosition3 = position(el3);
  if (document.body.clientWidth >= 992) {
    if (
      window.scrollY > document.getElementById("m-1").offsetTop &&
      window.scrollY < document.getElementById("m-2").offsetTop
    ) {
      positionSet(screenPosition1);
    } else if (
      window.scrollY > document.getElementById("m-4").offsetTop &&
      window.scrollY < document.getElementById("m-5").offsetTop
    ) {
      positionSet(screenPosition3);
    }
  }
});*/

function App() {
  /* window.addEventListener("scroll", function (e) {
    scrollStopper();
  });*/
  return (
    <div>
      <Header />

      <ParagraphInfo
        ParagraphText="Tanbur is a term used to describe long-necked lutes of all sizes. 
        It has existed in antiquated forms since the third millennium b.c., 
        and has been utilized for both secular and sacred music."
      />
     
        <div style={{ height: "100vh", width: "100%", position: "relative" }}>
          <VideoScroll />
        </div>
        
        <TextSection/>
        
     
      <InformationSection />
      <ParagraphInfo
        ParagraphText="The ancient forms of the tanbur were probably close to the instruments from the same family that can be found today in the Near East. 
        The specificity of these instruments resides in the fact that their two strings are struck together with the fingers of the right hand, and not with a plectrum."
      />
      <div id="m-1">
        <BackgroundVideoSection video={video1} />

        <div style={{ height: "100px", width: "100%" }}></div>
      </div>

      <div id="m-3">
        <BackgroundVideoSection
          video={video2}
          text1={"THE"}
          text2={"Sublimation"}
          text3={"OF A"}
          text4={"Tradition"}
        />
      </div>

      <ParagraphInfo
        ParagraphText="Ostad Elahi added the third string and detuned it slightly from its twin.
        This slight difference of pitch creates beating tones between the two strings.
        There is a whole harmonic architecture."
      />
      <InformationSection2 />
      <div id="m-4">
        <ParagraphInfo
          ParagraphText="Today, virtually all tanburs have three strings, 
        though few are aware of just how this third string was added to this ancient two-stringed instrument."
          fontstyle="my-5"
        />
      </div>

      <div id="m-6">
        <ParagraphInfo
          ParagraphText="Ostad Elahi standardize the proportions of the instrument. 
        He has defined exact specifications where he recommends how the instrument should made in with the correct proportions."
        />
      </div>

      <BackgroundVideoSection video={video3} />
      <ParagraphInfo
        ParagraphText="One of Ostad Elahi’s innovations is the introduction of a new resonance tuning (known as Farangi tuning) 
        imparting a new effect to the sound of the instrument that opens up novel horizons for the player."
      />
      <CoverVideo video={video5} />
      <MainParagraphInfo />

      <ParagraphInfo
        ParagraphText="These innovations introduced by Ostad Elahi are presented and played as follow by Dr. Shahrokh Elahi, 
        the youngest son of Ostad Elahi and the principal Legatee of his musical heritage."
      />
      <MultipleVideos />
      <ParagraphInfo
        ParagraphText="“From the sound of the tanbur emanate particles that produce various scenes. 
        If we concentrate our attention with our eyes closed, those scenes can be seen as though on a movie screen.”"
        fontstyle="fst-italic"
      />
      <BackgroundVideoSection video={video4} />
      <FooterSection />
    </div>
  );
}

export default App;
