import './styles/style.css';
import './styles/reset.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/footer/Footer.js';
import Home from './pages/Home';
import Product from './pages/Product.js';
import ScrollToTop from './utils/ScrollToTop';
import Header from './components/header/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
