import Hero from "../components/home/Hero";
import TrustStrip from "../components/home/TrustStrip";
import Services from "../components/home/Services";
import DoctorSection from "../components/home/DoctorSection";
import PatientJourney from "../components/home/PatientJourney";
import Transformation from "../components/home/Transformation";
import Reviews from "../components/home/Reviews";

const Home = () => {
  return (
    <>
      <Hero />
      <TrustStrip />
      <Services />
      <DoctorSection />
      <PatientJourney />
      <Transformation />
      <Reviews />
    </>
  );
};

export default Home;