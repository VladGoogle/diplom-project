import Carousel from "./../components/carousel/Carousel.js"
import Categories from "./../components/categories/Categories.js"
import Products from "./../components/products/Products.js"

const Home = () => {
    return (
        <>
            <Carousel />
            <Categories />
            <Products/>
        </>
    );
}

export default Home;