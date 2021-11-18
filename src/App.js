import './App.css';
import Header from "./components/hoc/Header.js";
import ParagraphInfo from './components/ParagraphInfo';
import InformationSection from './components/InformationSection';
import BackgroundVideoSection from '../src/components/BackgroundVideoSection';
import InformationSection2 from './components/InformationSection2';
import video1 from '../src/resources/video/lotr.mp4';

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
      </div>
  );
}

export default App;