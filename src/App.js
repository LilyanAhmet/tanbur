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
import FooterVideo from "./components/FooterVideo";
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
      <LazyLoad height={200} offset={100}>
        <ParagraphInfo
          ParagraphText="Tanbur is a term used to describe long-necked lutes of all sizes. 
        It has existed in antiquated forms since the third millennium b.c., 
        and has been utilized for both secular and sacred music."
        />
      </LazyLoad>

      <LazyLoad height={200} offset={100}>
        <InformationSection />
      </LazyLoad>
      <LazyLoad height={200} offset={100}>
        <ParagraphInfo
          ParagraphText="The ancient forms of the tanbur were probably close to the instruments from the same family that can be found today in the Near East. 
        The specificity of these instruments resides in the fact that their two strings are struck together with the fingers of the right hand, and not with a plectrum."
        />
      </LazyLoad>
      <LazyLoad height={200} offset={100}>
        <VideoScroll video="https://videos.ctfassets.net/unrnfh6tg4kn/4cOAol4C5DqYEmcmNlxmaK/d64b1eff711623b0a1fd7cfb876e2afb/bg-video-1_SparkVideo.mp4" rate={380} />
        <TextSection />
      </LazyLoad>
      <LazyLoad height={200} offset={100}>
        <Tanbur />
      </LazyLoad>
      <LazyLoad height={200} offset={100}>
        <div id="m-3">
          <BackgroundVideoSection
            video="https://videos.ctfassets.net/unrnfh6tg4kn/7oPQYuvn6K0E6695c9yZfp/83efe2e966578fcf7ccfc953ff149db6/bg-video-2.mp4"
            text1={"The"}
            text2={"Sublimation"}
            text3={"Of A"}
            text4={"Tradition"}
          />
        </div>
      </LazyLoad>
      <LazyLoad height={200} offset={100}>
        <ParagraphInfo
          ParagraphText="Ostad Elahi added the third string and detuned it slightly from its twin.
        This slight difference of pitch creates beating tones between the two strings.
        There is a whole harmonic architecture."
        />
      </LazyLoad>
      <LazyLoad height={200} offset={100}>
        <TanburLeft />
      </LazyLoad>
      <LazyLoad height={200} offset={100}>
        <InformationSection2 />
      </LazyLoad>
      <LazyLoad height={200} offset={100}>
        <div id="m-4">
          <ParagraphInfo
            ParagraphText="Today, virtually all tanburs have three strings, 
        though few are aware of just how this third string was added to this ancient two-stringed instrument."
            fontstyle="my-5"
          />
        </div>
      </LazyLoad>
      <LazyLoad height={200} offset={100}>
        <div id="m-6">
          <ParagraphInfo
            ParagraphText="Ostad Elahi standardize the proportions of the instrument. 
        He has defined exact specifications where he recommends how the instrument should made in with the correct proportions."
          />
        </div>
      </LazyLoad>
      <LazyLoad height={200} offset={100}>
        <VideoScroll video="https://videos.ctfassets.net/unrnfh6tg4kn/6xJSTQc0ggm3we3Xpqbxwi/34148f72c3e9a1a2af15b0e19672d918/bg-video-3_SparkVideo.mp4"  rate={380}/>
        <TextSection />
      </LazyLoad>
      <LazyLoad height={200} offset={100}>
        <ParagraphInfo
          ParagraphText="One of Ostad Elahi’s innovations is the introduction of a new resonance tuning (known as Farangi tuning) 
        imparting a new effect to the sound of the instrument that opens up novel horizons for the player."
        />
      </LazyLoad>
      <LazyLoad height={200} offset={100}>
        <CoverVideo
        />
      </LazyLoad>
      <LazyLoad height={200} offset={100}>
        <MainParagraphInfo />
      </LazyLoad>
      <LazyLoad height={200} offset={100}>
        <ParagraphInfo
          ParagraphText="These innovations introduced by Ostad Elahi are presented and played as follow by Dr. Shahrokh Elahi, 
        the youngest son of Ostad Elahi and the principal Legatee of his musical heritage."
        />
      </LazyLoad>
      <LazyLoad height={200} offset={100}>
        <MultipleVideos />
      </LazyLoad>
      <LazyLoad height={200} offset={100}>
        <ParagraphInfo
          ParagraphText="“From the sound of the tanbur emanate particles that produce various scenes. 
        If we concentrate our attention with our eyes closed, those scenes can be seen as though on a movie screen.”"
          fontstyle="fst-italic"
        />
      </LazyLoad>
      <LazyLoad height={200} offset={100}>
        <FooterVideo video="https://videos.ctfassets.net/unrnfh6tg4kn/ojPz0qeBN4DvE06aPsU5s/d83aa4200f6ac135447d0ef976a899ce/bg-video-4.mp4" />
        <FooterSection />
      </LazyLoad>
      s
    </div>
  );
}

export default App;
