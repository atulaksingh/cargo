import "./App.css";
import AchievedCard from "./components/Card/AchievedCard";
import FeaturedCard from "./components/Card/FeaturedCard";
import Hero from "./components/Card/Hero";
import HeroCard2 from "./components/Card/HeroCard2";
import LogoCard from "./components/Card/LogoCard";
import MapCard from "./components/Card/MapCard";
import OurFeatures from "./components/Card/OurFeatures";
import Testimonial from "./components/Card/Testimonial";
import Footer from "./components/Shared/Footer";
import Header from "./components/Shared/Header";

function App() {
  return (
    <>
      <div>
      <div className="bg-white">
        <Header />
        </div>
        <Hero />
        <HeroCard2 />
        <OurFeatures />
        <Testimonial />
        <LogoCard />
        <FeaturedCard />
        <AchievedCard />
        <MapCard /> 
         <Footer />
      </div>
    </>
  );
}

export default App;
