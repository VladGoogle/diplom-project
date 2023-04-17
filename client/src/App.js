import './styles/style.css';
import './styles/reset.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Home from './pages/Home';
import Product from './pages/Product';
import ScrollToTop from './utils/ScrollToTop';
import Header from './components/header/Header';
import Settings from './pages/Settings';
import SuccessRegistration from './components/signup/SuccessReg';

function App() {

  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/settings" element={<Settings/>}/>
          <Route path="/successRegistration" element={<SuccessRegistration/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
