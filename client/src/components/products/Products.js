import Card from '../card/Card.js';
import './style.css';
import React from 'react';
import { useState, useEffect } from 'react';
import { instance } from "./../../utils/axios/instance"


function Products() { 

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
      const response = await instance.post("/carts", item);
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
                  img={obj.productImage.key}
                  onAddToCart={ () => handleAddToCart(obj)}
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
