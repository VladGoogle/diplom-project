import Card from '../card/Card.js';
import './style.css';
import React from 'react';
import { useState, useEffect } from 'react';
import createAxiosInstance from '../../utils/axios/instance.js';  


function Products() { 


  const instance = createAxiosInstance();
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);

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
  }, []);

  const handleAddToCart = async (item) => {
    try {
      const response = await instance.post("/carts", { productId: item.id, quantity: 1 });
      setCartItems([...cartItems, response.data]);
    } catch (error) {
      console.log(error);
    }
  }

  const handleAddToWishlist = async (item) => {
    try {
      const response = await instance.post("/wishlist", { productId: item.id});
      setCartItems([...cartItems, response.data]);
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
              return (
                <Card
                  key={id}
                  name={obj.name.length > 15 ? obj.name.slice(0, 13) + '...' : obj.name}
                  category={obj.subcategory.name}
                  price={obj.price}
                  discountPrice={obj.discountPrice}
                  img={obj.productImage.url}
                  onAddToCart={ () => handleAddToCart(obj)}
                  onAddToWishlist={ () => handleAddToWishlist(obj)}
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
