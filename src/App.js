import './App.css';
import Cta from './components/Cta';
import Features from './components/Features';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar'
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Features />
      <Testimonials />
      <Cta />
      <Footer />
    </div>
  );
}

export default App;
