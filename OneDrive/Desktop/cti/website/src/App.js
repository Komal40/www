import Home from "./Components/Home/Home";
import Home2 from "./Components/Home2/Home2";
import Automotive from "./Components/Automotive/Automotive";
import IotSol from "./Components/IotSol/IotSol";
import ServiceSection from "./Components/ServiceSection/ServiceSection";
import { TeamSection } from "./Components/TeamSection/TeamSection";
import Testimonials from "./Components/Testimonials/Testimonials";
import Consulting from "./Components/Consulting/Consulting";
import About from "./Components/About/About";
import Product from "./Components/Products/Products";
import Clients from "./Components/Clients/Clients";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Contact from "./Components/Contact/Contact";
import InContact from "./Components/InContact/InContact";
import Certificates from "./Components/Certificates/Certificates";
import NewProducts from "./Components/NewProducts/NewProducts";



function App() {
  return (
    <>
    <Navbar/>
      <Home />
      <Home2 />
      <Automotive />
      <IotSol />
      <ServiceSection />
      <Consulting />
      <About />
      <TeamSection />
      <Testimonials />
      <Certificates/>
      {/* <Product /> */}

      <NewProducts/>
      <Contact/>
      <Clients/>
      <InContact/>
      <Footer/>

    </>
  );
}

export default App;





