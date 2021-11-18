import './App.css';
import Header from "./components/hoc/Header.js";
import ParagraphInfo from './components/ParagraphInfo';
import InformationSection from './components/InformationSection';
import BackgroundVideoSection from '../src/components/BackgroundVideoSection';
import InformationSection2 from './components/InformationSection2';
import video1 from '../src/resources/video/bg-video-1.mp4';
import video2 from '../src/resources/video/bg-video-2.mp4';
import video3 from '../src/resources/video/bg-video-3.mp4';

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
        <BackgroundVideoSection
          video={video2}
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
        />
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
      </div>
  );
}

export default App;