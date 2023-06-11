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
import Logout from './components/settingsTabs/Logout/Logout';
import Wishlist from './components/settingsTabs/Wishlist/Wishlist';
import Cart from './pages/Cart';
import TokenProvider from "./TokenContext"
import Checkout from './components/checkout/Checkout';
import NotFound from './components/notfound/NotFound';
import Catalog from './components/catalog/Catalog';
import ReviewsPage from './components/reviews/ReviewsPage';
import ReviewForm from './components/reviews/ReviewForm';


function App() {

  return (
    <div className="App">
      <Router>
      <TokenProvider>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/reviews/:id" element={<ReviewsPage />} />
          <Route path="/reviewForm/:id" element={<ReviewForm />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/settings" element={<Settings />}>
            <Route path="account" element={<Account />} />
            <Route path="orders" element={<Orders />} />
            <Route path="wallet" element={<Wallet />} />
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="logout" element={<Logout />} />
          </Route>
          <Route path="/successRegistration" element={<SuccessRegistration />} />
          <Route path="*" element={<NotFound />}/>
        </Routes>
        <Footer />
        </TokenProvider>
      </Router>
    </div>
  );
}

export default App;
