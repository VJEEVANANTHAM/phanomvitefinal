import "./App.css";
import Logo from "./assets/images/logo.png";

import Animation from "./components/Animation/Animation";
import Service from "./components/Service";
import Choose from "./components/Choose/Choose";
import Videos from "./components/Videos";
import VPS from "./components/PhanomGuide/PhanomGuide";
import Mission from "./components/Mission";
import Articles from "./components/Articles/Articles";
import Footer from "./components/Footer";
import Header from "./components/Header/Header"
import { Unique } from "./components/Unique/Unique";
import HeroBanner from "./components/Banner/HeroBanner";
import ImageSlider from "./components/ImageSlider/ImageSlider"
import SplitScreenWithDividers from './components/SplitScreenWithDividers'


const App = () => {
  
  return (
      <div>
       <Header/>
       <HeroBanner/>
       <ImageSlider/>
       <Animation />
      <Service />
      <PhanomGuide/>
      <SplitScreenWithDividers />
      <Unique/>
      <Choose />
      <Mission />
      <Videos />
      <Articles />
      <Footer />
    </div>
  );
};
export default App;
