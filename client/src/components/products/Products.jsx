import Card from '../card/Card.js';
import './style.css';
import React from 'react';
import { useEffect } from 'react';
import AxiosInstance from '../../utils/axios/instance.js';  


function Products() { 
  const instance = AxiosInstance();
  const [items, setItems] = React.useState([]);
  const [wishlistId, setWishlistId] = React.useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await instance.get("/products");
        setItems(response.data);
        
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [wishlistId]);

  const handleAddToCart = async (item) => {
    try {
      await instance.post("/carts", { productId: item.id, quantity: 1 });
    } catch (error) {
      console.log(error);
    }
  }

  const handleAddToWishlist = async (item) => {
    try {
      const response = await instance.post("/wishlists", { productId: item.id });
      setWishlistId(response.data.id);
    } catch (error) {
      console.log(error); 
    }
  }

  const handleRemoveFromWishlist = async (wishlistItemId) => {
    try {
      await instance.patch("/wishlist/removeItem", { wishlistId: 1, wishlistItemId });
    } catch (error) {
      console.log(error);
    }
  }


  

  return (
    <section className="products">
      <div className="container">
        <h2 className="products__title">BESTSELLERS</h2>
        <div className="products-card__top">
          <ul className="products-card-list">
            {items
            .map((obj, id) => {
              const isInWishlist = obj.wishlistItems.length > 0;
              return (
                <Card
                  key={id}
                  id={obj.id}
                  name={obj.name.length > 15 ? obj.name.slice(0, 13) + '...' : obj.name}
                  category={obj.subcategory.name}
                  price={obj.price}
                  discountPrice={obj.discountPrice}
                  img={obj.productImages[0].url}
                  onAddToCart={ () => handleAddToCart(obj)}
                  onAddToWishlist={ () => handleAddToWishlist(obj)}
                  onRemoveFromWishlist={() => handleRemoveFromWishlist(obj.wishlistItems[0]?.id)}
                  itsInWishlist={isInWishlist}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Products;
