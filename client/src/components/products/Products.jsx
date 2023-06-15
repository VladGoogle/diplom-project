import Card from '../card/Card';
import './style.css';
import React from 'react';
import { useEffect, useContext } from 'react';
import AxiosInstance from '../../utils/axios/instance.js';
import { TokenContext } from '../../TokenContext';

function Products() {
  const instance = AxiosInstance();
  const [items, setItems] = React.useState([]);
  const [wishlistItems, setWishlistItems] = React.useState([]);
  const [wishlistId, setWishlistId] = React.useState(null);
  const { loggedIn } = useContext(TokenContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await instance.get('/products');
        if (loggedIn) {
          setItems(response.data.products);
          setWishlistItems(response.data.wishlist);
        } else {
          setItems(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [wishlistId, loggedIn]);

  const handleAddToCart = async (item) => {
    try {
      await instance.post('/carts', { productId: item.id, quantity: 1 });
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddToWishlist = async (item) => {
    try {
      const response = await instance.post('/wishlists', {
        productId: item.id,
      });
      setWishlistId(response.data.id);
    } catch (error) {
      console.log(error);
    }
  };

  const handleRemoveFromWishlist = async (item) => {
    try {
      const wishlistItem = wishlistItems.wishlistItems.find(
        (wishlistItem) => wishlistItem.productId === item.id,
      );
      if (wishlistItem) {
        await instance.patch('/wishlist/removeItem', {
          wishlistId: wishlistItems.id,
          wishlistItemId: wishlistItem.id,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="products">
      <div className="container">
        <h2 className="products__title">BESTSELLERS</h2>
        <div className="products-card__top">
          <ul className="products-card-list">
            {Array.isArray(items) ? (
              items.map((obj, id) => {
                const isInWishlist =
                  loggedIn &&
                  wishlistItems?.wishlistItems?.some(
                    (wishlistItem) => wishlistItem.productId === obj.id,
                  );
                return (
                  <Card
                    key={id}
                    id={obj.id}
                    name={
                      obj.name.length > 15
                        ? obj.name.slice(0, 13) + '...'
                        : obj.name
                    }
                    category={obj.subcategory.name}
                    price={obj.price}
                    discountPrice={obj.discountPrice}
                    img={obj.productImages[0].url}
                    onAddToCart={() => handleAddToCart(obj)}
                    onAddToWishlist={() => handleAddToWishlist(obj)}
                    onRemoveFromWishlist={() => handleRemoveFromWishlist(obj)}
                    itsInWishlist={isInWishlist}
                  />
                );
              })
            ) : (
              <p>Loading...</p>
            )}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Products;
