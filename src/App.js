import './App.css';
import Header from "./components/hoc/Header.js";
import ParagraphInfo from './components/ParagraphInfo';
import InformationSection from './components/InformationSection';
import BackgroundVideoSection from '../src/components/BackgroundVideoSection';
import InformationSection2 from './components/InformationSection2';
import MainParagraphInfo from './components/MainParagraphInfo';
import FooterSection from './components/hoc/FooterSection.js';
import Tanbur from './components/Tanbur';
import CoverVideo from './components/CoverVideo';
import MultipleVideos from './components/MultipleVideos';
import Placeholder  from './components/Placeholder';
import video1 from '../src/resources/video/bg-video-1.mp4';
import video2 from '../src/resources/video/bg-video-2.mp4';
import video3 from '../src/resources/video/bg-video-3.mp4';
import video4 from '../src/resources/video/bg-video-4.mp4';
import video5 from '../src/resources/video/tanbur-cover-video.mp4';
import placeholder_Img from "./resources/img/placeholder-img.png"
import placeholder2_Img from "./resources/img/placeholder-2-img.png"



function App() {
  return (
      <div>
        <Header />
        <ParagraphInfo
        ParagraphText="Tanbur is a term used to describe long-necked lutes of all sizes. 
        It has existed in antiquated forms since the third millennium b.c., 
        and has been utilized for both secular and sacred music."
        />
        <InformationSection />
        <ParagraphInfo
        ParagraphText="The ancient forms of the tanbur were probably close to the instruments from the same family that can be found today in the Near East. 
        The specificity of these instruments resides in the fact that their two strings are struck together with the fingers of the right hand, and not with a plectrum."
        />
        <BackgroundVideoSection
          video={video1}
        />
        <Placeholder
        image={placeholder2_Img}
        />
        <BackgroundVideoSection
          video={video2}
          text1={"THE"}
          text2={"Sublimation"}
          text3={"OF A"}
          text4={"Tradition"}
        />
        <ParagraphInfo
        ParagraphText="Ostad Elahi added the third string and detuned it slightly from its twin.
        This slight difference of pitch creates beating tones between the two strings.
        There is a whole harmonic architecture."
        />
        <InformationSection2/>
        <ParagraphInfo
        ParagraphText="Today, virtually all tanburs have three strings, 
        though few are aware of just how this third string was added to this ancient two-stringed instrument."
        fontstyle="my-5"
        />
        <Tanbur/>
        <ParagraphInfo
        ParagraphText="Ostad Elahi standardize the proportions of the instrument. 
        He has defined exact specifications where he recommends how the instrument should made in with the correct proportions."
        />
        <BackgroundVideoSection
          video={video3}
        />
        <ParagraphInfo
        ParagraphText="One of Ostad Elahi’s innovations is the introduction of a new resonance tuning (known as Farangi tuning) 
        imparting a new effect to the sound of the instrument that opens up novel horizons for the player."
        />
        <CoverVideo
        video={video5}
        />
        <MainParagraphInfo
        />

        <ParagraphInfo
        ParagraphText="These innovations introduced by Ostad Elahi are presented and played as follow by Dr. Shahrokh Elahi, 
        the youngest son of Ostad Elahi and the principal Legatee of his musical heritage."
        />
        <MultipleVideos

        />
        <ParagraphInfo
        ParagraphText="‘’From the sound of the tanbur emanate particles that produce various scenes. 
        If we concentrate our attention with our eyes closed, those scenes can be seen as though on a movie screen.’’"
        fontstyle="fst-italic"
        />
        <BackgroundVideoSection
          video={video4}
        />
        <FooterSection />
      </div>
  );
}

export default App;