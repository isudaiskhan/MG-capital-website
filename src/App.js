import About from "./Components/About/About";
import Clients from "./Components/Clients/Clients";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import HigherStandards from "./Components/HigherStandards/HigherStandards";
import IndustryPartners from "./Components/IndustryPartners/IndustryPartners";
import MakePlaces from "./Components/MakePlaces/MakePlaces";
import Navbar from "./Components/Navbar/Navbar";
import Services from "./Components/Services/Services";
import Testimonial from "./Components/Testimonial/Testimonial";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <IndustryPartners />
      <Clients />
      <HigherStandards />
      <MakePlaces />
      <Testimonial />
      <Footer />
    </>
  );
}

export default App;
