import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar/Navbar';
import Services from './component/middleCompnent/Services';
import Footer from './component/Footer.js/Footer';
import RecomendedSites from './component/middleCompnent/RecomendedSites';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Services/>
     <RecomendedSites/>
     <Footer/>
    </div>
  );
}

export default App;
