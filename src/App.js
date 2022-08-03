import './App.css';
import './nskast.css'
import Footer from './components/Footer';
import Navbar from './components/Navbar'
import PodKast from './components/podkast';
import PopularTag from './components/PopularTag';

function App() {
  return (
    <>
      <Navbar />
      <PodKast />
      <PopularTag />
      <Footer /> 
    </>
  );
}

export default App;
