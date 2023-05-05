import Carousel from '../components/carousel/Carousel.js';
import CategoriesPage from '../components/categories/CategoriesPage.js';
import Products from '../components/products/Products.js';

const Home = () => {
  return (
    <>
      <Carousel />
      <CategoriesPage />
      <Products />
    </>
  );
};

export default Home;
