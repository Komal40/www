import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Services from "./components/Services/Services";
import { TeamSection } from "./components/TeamSection/TeamSection";
import About from "./components/About/About";
import Nav from "./components/Nav/Nav";
import ServiceSection from "./components/ServiceSection/ServiceSection";
import Testimonials from "./components/Testimonials/Testimonials";
import TestimonialSection from "./components/TestimonialSection/TestimonialSection";
import Contact from "./components/Contact/Contact";
import InContact from "./components/InContact/InContact";

function App() {
  return (
    <>
      <Nav />
      <Home />
      <Services />
      <About />
      <TeamSection />
      <ServiceSection />
      <TestimonialSection />
      <Testimonials />
      <InContact />
      <Contact />
    </>
  );
}

export default App;


