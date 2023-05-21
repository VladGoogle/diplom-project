import Carousel from '../components/carousel/Carousel.js';
import CategoriesPage from '../components/categories/CategoriesPage';
import Products from '../components/products/Products';

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
