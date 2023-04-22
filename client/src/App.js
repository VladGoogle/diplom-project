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
import Account from './components/settingsTabs/Account/Account';
import Orders from './components/settingsTabs/Orders/Orders';
import Wallet from './components/settingsTabs/Wallet/Wallet';
import Viewed from './components/settingsTabs/Viewed/Viewed';
import Logout from './components/settingsTabs/Logout/Logout';
import Wishlist from './components/settingsTabs/Wishlist/Wishlist';


function App() {

  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/settings" element={<Settings/>}>
            <Route path="account" element={<Account />} />
            <Route path="orders" element={<Orders />} />
            <Route path="wallet" element={<Wallet />} />
            <Route path="viewed" element={<Viewed />} />
            <Route path="wishlist" element={<Wishlist/>} />
            <Route path="logout" element={<Logout />} />
          </Route>
          <Route path="/successRegistration" element={<SuccessRegistration/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
