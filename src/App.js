import CustomNavbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import Rooms from "./components/Rooms";
import Testimonials from "./components/Testimonials";
import EventFlow from "./components/Eventflow";
import Inquiry from "./components/Inquiry";
function App() {
  return (
    <>
        <CustomNavbar />
        <Hero/>
        <About/>
        <Gallery/>
        <Rooms/>
        <EventFlow/>
        <Testimonials/>
        <Inquiry/>
        
        <Footer/>
    </>
  );
}

export default App;
