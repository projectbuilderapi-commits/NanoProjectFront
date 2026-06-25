import BackgroundGlow from "../components/BackgroundGlow";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Pricing from "../components/Pricing";
import Process from "../components/Process";
import Services from "../components/Services";
import WhyChoose from "../components/WhyChoose";

const LandingPage = () => {
  return (
    <div className="bg-slate-950 min-h-screen text-white overflow-x-hidden">
      <Navbar />
      <BackgroundGlow />
      <Hero />
      <Services />
      <Process />
      <WhyChoose />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
};

export default LandingPage;