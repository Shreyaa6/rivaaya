import Navbar from './components/layout/Navbar/Navbar';
import Hero from './components/sections/Hero/Hero';
import Collections from './components/sections/Collections/Collections';
import Heritage from './components/sections/Heritage/Heritage';
import Featured from './components/sections/Featured/Featured';
import Flagship from './components/sections/Flagship/Flagship';
import Testimonials from './components/sections/Testimonials/Testimonials';
import CTA from './components/sections/CTA/CTA';
import Footer from './components/layout/Footer/Footer';
import './styles/theme.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Collections />
      <Heritage />
      <Featured />
      <Flagship />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
